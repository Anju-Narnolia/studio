import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600', '700'],
});

const fontJetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Aurora Institute of Engineering',
  description: 'Engineering the Next 100 Years. A Tier-1, research-intensive engineering school.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontInter.variable} ${fontJetBrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

