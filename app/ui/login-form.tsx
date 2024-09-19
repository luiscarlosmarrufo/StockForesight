'use client';

import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import { auth, googleProvider, yahooProvider } from '@/src/index';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, AuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa el useRouter

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true); // Toggle between login and register
  const router = useRouter(); // Crea una instancia del router

  // Sign in with provider (Google, Yahoo)
  const loginWithProvider = async (provider: AuthProvider) => {
    setIsPending(true);
    try {
      await signInWithPopup(auth, provider);
      // Redirige al usuario a la página de inicio
      router.push('/home');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setIsPending(false);
    }
  };

  // Sign in with email and password
  const loginWithEmail = async (email: string, password: string) => {
    setIsPending(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirige al usuario a la página de inicio
      router.push('/home');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setIsPending(false);
    }
  };

  // Register with email and password
  const registerWithEmail = async (email: string, password: string) => {
    setIsPending(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirige al usuario a la página de inicio
      router.push('/home');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setIsPending(false);
    }
  };

  // Handle Email Login/Registration
  const handleEmailSubmit = async () => {
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    if (
      emailElement instanceof HTMLInputElement &&
      passwordElement instanceof HTMLInputElement
    ) {
      const email = emailElement.value;
      const password = passwordElement.value;

      if (isRegistered) {
        await loginWithEmail(email, password);
      } else {
        await registerWithEmail(email, password);
      }
    } else {
      setErrorMessage('Please enter valid email and password');
    }
  }


  return (
    <div className="space-y-3">
      <h1 className={`${lusitana.className} text-white mb-3 text-2xl`}>
        {isRegistered ? 'Please log in to continue.' : 'Create an account'}
      </h1>

      <Button
        className="mt-4 w-full"
        onClick={() => loginWithProvider(googleProvider)}
        aria-disabled={isPending}
      >
        Log in with Google
      </Button>

      <Button
        className="mt-4 w-full"
        onClick={() => loginWithProvider(yahooProvider)}
        aria-disabled={isPending}
      >
        Log in with Yahoo
      </Button>

      {/* Email login or registration form */}
      <div className="mt-4">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          type="email"
          placeholder="Enter your email"
          id="email"
          required
        />
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          type="password"
          placeholder="Enter your password"
          id="password"
          required
        />
        <Button
          className="mt-4 w-full"
          onClick={handleEmailSubmit}
          aria-disabled={isPending}
        >
          {isRegistered ? 'Log in with Email' : 'Register with Email'}
        </Button>

        {/* Toggle between login and registration */}
        <div className="mt-2">
          <Button
            className="w-full"
            onClick={() => setIsRegistered(!isRegistered)}
            aria-disabled={isPending}
          >
            {isRegistered ? 'Need an account? Register' : 'Already have an account? Log in'}
          </Button>
        </div>
      </div>

      {errorMessage && (
        <div className="text-red-500">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
