// src/app/page.tsx
// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from "next/navigation";
// import { auth } from '../firebase';
// import { onAuthStateChanged, User } from 'firebase/auth';
// import Link from 'next/link';

// function Home() {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="container" style={{backgroundColor: '#1E1E1E'}}>
//       <main className="main">
//         <h1 className="title" style ={{color:'white'}}>Welcome to Company Directory</h1>
//         <p className="description" style ={{color:'white'}}>
//           Explore and discover information about various companies in our comprehensive directory.
//         </p>

//         {user ? (
//           <Link href="/companies" className="button" style ={{color:'white'}}>
//             Go to Companies
//           </Link>
//         ) : (
//           <Link href="/signin" className="button" style ={{color:'white'}}>
//             Sign In
//           </Link>
//         )}
//       </main>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           background-color: #ffffff;
//           color: #000000;
//         }
//         .main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           max-width: 800px;
//           text-align: center;
//         }
//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//           font-weight: 700;
//         }
//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//           margin: 1rem 0;
//         }
//         .button {
//           background-color: #000000;
//           color: #ffffff;
//           border: none;
//           padding: 0.75rem 1.5rem;
//           font-size: 1rem;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//           text-decoration: none;
//           margin-top: 1rem;
//         }
//         .button:hover {
//           background-color: #333333;
//         }
//         .loading {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           font-size: 1.5rem;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;
// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from "next/navigation";
// import { auth } from '../firebase';
// import { onAuthStateChanged, User } from 'firebase/auth';
// import Link from 'next/link';
// import styles from './page.module.css';

// export default function Home() {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1 className={styles.title}>Welcome to Company Directory</h1>
//         <p className={styles.description}>
//           Explore and discover information about various companies in our comprehensive directory.
//         </p>
// {/* 
//         {user ? (
//           <Link href="/companies" className={styles.button}>
//             Go to Companies
//           </Link>
//         ) : (
//           <Link href="/signin" className={styles.button}>
//             Sign In
//           </Link>
//         )} */}
//         <Link href="/companies" className={styles.button}>
//             Go to Companies
//           </Link>
//       </main>
//     </div>
//   );
// }

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