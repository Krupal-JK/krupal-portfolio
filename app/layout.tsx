import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krupal Jada - Backend Developer & Team Lead',
  description: 'Results-driven backend developer with 3.5+ years of experience building scalable full-stack systems, microservices architectures, blockchain integrations, and payment platforms.',
  openGraph: {
    title: 'Krupal Jada - Backend Developer & Team Lead',
    description: 'Building scalable backend systems, real-time applications, and payment infrastructures',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krupal Jada - Backend Developer & Team Lead',
    description: 'Building scalable backend systems, real-time applications, and payment infrastructures',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
