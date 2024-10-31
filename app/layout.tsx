import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import { Button } from '../components/ui/button';
import FloatingButton from './components/FloatingButton';

export const metadata: Metadata = {
  title: 'Nutritrack',
  description: 'Capture, analyze, and optimize your dietary habits with NutriTrack. Harness the power of AI to achieve your health goals.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
        {/* Floating Action Button for Meal Logging */}
        <FloatingButton />
      </body>
    </html>
  );
}
