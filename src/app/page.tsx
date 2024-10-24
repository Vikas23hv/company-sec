

"use client"
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { auth } from '../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        router.push('/companies');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Company Directory</h1>
        <p className={styles.description}>
          Explore and discover information about various companies in our comprehensive directory.
        </p>
        <Link href="/companies" className={styles.button}>
          Go to Companies
        </Link>
      </main>
    </div>
  );
}