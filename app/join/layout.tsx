import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us | SMU Gavel Club',
  description: 'Become a member of SMU Gavel Club and start your journey to becoming a confident speaker and leader.',
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
