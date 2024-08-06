// src/app/signin/page.js
'use client';
import { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/companies");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="container" style={{backgroundColor:'#121212'}}>
      <main className="main">
        <h1 className="title">Sign In</h1>
        <p className="description" style={{color:'white'}}>
          Sign in with your Google account to access the Company Directory.
        </p>
        <button onClick={signInWithGoogle} className="button">
          Sign in with Google
        </button>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          color: #000000;
        }
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
          text-align: center;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          font-weight: 700;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 1rem 0;
        }
        .button {
          background-color: #000000;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 1rem;
        }
        .button:hover {
          background-color: #333333;
        }
      `}</style>
    </div>
  );
}