import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Hassan Raza - Portfolio',
  description: 'A motion-rich developer portfolio with editorial typography, layered storytelling, and scroll choreography.',
  keywords: ['portfolio', 'developer', 'fullstack', 'react', 'nextjs', 'motion design'],
  authors: [{ name: 'Hassan Raza' }],
  openGraph: {
    type: 'website',
    title: 'Hassan Raza - Portfolio',
    description: 'Motion-rich portfolio with editorial storytelling',
    siteName: 'Hassan Raza Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#120f0e" />
      </head>
      <body className="bg-dark text-paper antialiased">
        <Navigation />
        <main className="relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
