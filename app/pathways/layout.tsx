import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pathways | Gavel Club',
  description: 'Explore the Pathways learning experience program at Gavel Club. Develop your communication and leadership skills through our structured educational program.',
};

export default function PathwaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
