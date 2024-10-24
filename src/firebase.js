// src/firebase.js

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };

// For debugging purposes
console.log('Firebase Config:', {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '[SET]' : '[NOT SET]',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '[SET]' : '[NOT SET]',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '[SET]' : '[NOT SET]',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '[SET]' : '[NOT SET]',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? '[SET]' : '[NOT SET]',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '[SET]' : '[NOT SET]',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? '[SET]' : '[NOT SET]'
});