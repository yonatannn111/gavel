import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMU Gavel Club',
  description: 'Official website of the SMU Gavel Club - Developing leadership through public speaking',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'SMU Gavel Club',
    description: 'Developing leadership through public speaking',
    url: 'https://smugavel.org',
    siteName: 'SMU Gavel Club',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMU Gavel Club',
    description: 'Developing leadership through public speaking',
    creator: '@smugavel',
  },
};
