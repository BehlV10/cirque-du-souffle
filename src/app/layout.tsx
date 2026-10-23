import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cirque du Soufflé | Haute Pâtisserie & Chocolatier Chef T Lawrence-Simon',
  description:
    'Experience the theatrical intersection of aerial circus arts and French haute pâtisserie. Certified Chocolatier, FOX Crime Scene Kitchen & Food Network finalist.',
  openGraph: {
    title: 'Cirque du Soufflé | Chef T Lawrence-Simon',
    description:
      'Artisanal chocolate bonbon releases, French macarons, and theatrical 5-course dessert tasting menus.',
    url: 'https://chef-t.com',
    siteName: 'Cirque du Soufflé',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-950 font-sans">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
