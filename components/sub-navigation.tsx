"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SubNavItem {
  href: string;
  label: string;
}

interface SubNavigationProps {
  items: SubNavItem[];
  basePath: string;
}

export function SubNavigation({ items, basePath }: SubNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar">
          <div className="flex space-x-1 py-2">
            {items.map((item) => {
              const isActive = pathname === item.href || 
                (pathname.startsWith(item.href) && item.href !== basePath) ||
                (pathname === basePath && item.href === `${basePath}/overview`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-red-50 text-[#8B0000] dark:bg-red-900/20 dark:text-red-100"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
