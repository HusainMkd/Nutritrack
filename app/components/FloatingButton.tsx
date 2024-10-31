'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function FloatingButton() {
  const router = useRouter();

  return (
    <Button
      className="fixed bottom-8 right-8 bg-blue-500 rounded-full p-8 shadow-lg"
      onClick={() => router.push('/meal-logging')}
    >
      📷
    </Button>
  );
}
