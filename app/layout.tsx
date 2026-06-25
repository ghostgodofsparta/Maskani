import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Maskani — Listings & Verified Real Estate Connections',
  description:
    'Kenya\'s platform for agents and developers to showcase residential and commercial properties — for rent or sale — with verified connections and a 72-hour refund guarantee.',
  openGraph: {
    title: 'Maskani — Listings & Verified Connections',
    description: 'A listing platform and connection broker for agents, developers, and tenants across Kenya.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
