import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Filter, X } from "lucide-react";
import { EventType, eventTypes } from "@/types/events";
import { cn } from "@/lib/utils";

interface EventsFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedTypes: EventType[];
  onTypeToggle: (type: EventType) => void;
  onReset: () => void;
}

export function EventsFilter({
  searchQuery,
  onSearchChange,
  selectedTypes,
  onTypeToggle,
  onReset
}: EventsFilterProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full">
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <span>Filters</span>
          <Filter className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-4 py-2 h-11 w-full"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Mobile filters panel */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-white z-50 p-6 overflow-y-auto transition-transform duration-300 transform",
            isMobileFiltersOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Event Types</h4>
              <div className="space-y-3">
                {Object.entries(eventTypes).map(([type, { label, icon: Icon }]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`mobile-${type}`}
                      checked={selectedTypes.includes(type as EventType)}
                      onCheckedChange={() => onTypeToggle(type as EventType)}
                    />
                    <Label htmlFor={`mobile-${type}`} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  onReset();
                  setIsMobileFiltersOpen(false);
                }}
              >
                Reset
              </Button>
              <Button
                className="flex-1 bg-[#8B0000] hover:bg-[#6B0000]"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop filters */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-md h-11">
              <Filter className="h-4 w-4 text-gray-500" />
              <span>Filter</span>
            </div>
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-10">
              <h4 className="font-medium mb-3">Event Types</h4>
              <div className="space-y-3">
                {Object.entries(eventTypes).map(([type, { label, icon: Icon }]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`desktop-${type}`}
                      checked={selectedTypes.includes(type as EventType)}
                      onCheckedChange={() => onTypeToggle(type as EventType)}
                    />
                    <Label htmlFor={`desktop-${type}`} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-3 text-sm text-[#8B0000] hover:bg-[#8B0000]/10"
                onClick={onReset}
              >
                Reset filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
