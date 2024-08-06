// src/hooks/useAuth.js
// import { useState, useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase'; // Updated import path

// export default function useAuth() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUser({
//           uid: user.uid,
//           email: user.email,
//           displayName: user.displayName,
//           // Add any other user properties you need
//         });
//       } else {
//         // User is signed out
//         setUser(null);
//       }
//     });

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   return { user };
// }
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, getIdTokenResult } from 'firebase/auth';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const tokenResult = await getIdTokenResult(currentUser, true);
        setIsAdmin(!!tokenResult.claims.admin);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, isAdmin };
}