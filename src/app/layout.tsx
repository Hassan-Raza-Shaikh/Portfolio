import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Hassan Raza - Portfolio',
  description: 'Full-stack developer portfolio with dynamic animations and interactive projects.',
  keywords: ['portfolio', 'developer', 'fullstack', 'react', 'nextjs'],
  authors: [{ name: 'Hassan Raza' }],
  openGraph: {
    type: 'website',
    title: 'Hassan Raza - Portfolio',
    description: 'Full-stack developer portfolio',
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
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <Navigation />
        <main className="relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
