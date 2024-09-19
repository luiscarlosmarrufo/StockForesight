'use client';

import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/src/index';
import { useState } from 'react';

export default function SignOutButton() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsPending(true);
    try {
      await signOut(auth);
      router.push('/login'); // Redirige al login después de cerrar sesión
    } catch (error) {
      console.error("Error signing out", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center justify-center gap-2 p-3 text-sm font-medium bg-gray-50 hover:bg-red-100 hover:text-red-600 rounded-md"
      disabled={isPending}
    >
      <PowerIcon className="w-6" />
      <span>Sign Out</span>
    </button>
  );
}
