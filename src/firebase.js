// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDLRyHl163ty8HXgAVLOvq84Pu9CoHqxGo",
    authDomain: "learning-5804a.firebaseapp.com",
    projectId: "learning-5804a",
    storageBucket: "learning-5804a.appspot.com",
    messagingSenderId: "633196266510",
    appId: "1:633196266510:web:88b48dd37ca838ece7a85f",
    measurementId: "G-KKW4HJ2KN5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
 const db = getFirestore(app);
export { auth, googleProvider, app, db };
//const googleProvider = new GoogleAuthProvider();

// export { auth, googleProvider };
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);