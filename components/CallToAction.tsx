import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white rounded-xl p-12 text-center shadow-lg transition-all duration-500 hover:shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Voice?</h2>
            <p className="text-xl mb-8">
              Join SMU Gavel Club today and embark on a journey of personal and professional growth.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[#8B0000] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg hover:scale-105 transition-transform"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Become a Member
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
