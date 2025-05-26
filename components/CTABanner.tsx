import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTABanner({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton 
}: CTABannerProps) {
  return (
    <div className="bg-primary-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-primary-600">{subtitle}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button asChild size="lg">
              <Link href={primaryButton.href}>{primaryButton.text}</Link>
            </Button>
          </div>
          {secondaryButton && (
            <div className="ml-3 inline-flex rounded-md shadow">
              <Button variant="outline" asChild size="lg">
                <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
