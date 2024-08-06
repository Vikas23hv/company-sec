// src/components/Logout.js
'use client';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Updated import path
import { useRouter } from 'next/navigation'; // Updated for App Router

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to login page
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}
