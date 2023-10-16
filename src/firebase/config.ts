// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWS6LVHk9DzMR8ZVOzZ5IfNtfiXGsNDPk",
  authDomain: "dash-powerlifting.firebaseapp.com",
  projectId: "dash-powerlifting",
  storageBucket: "dash-powerlifting.appspot.com",
  messagingSenderId: "474209482556",
  appId: "1:474209482556:web:61d23fa6ac7e82a85a1039",
  measurementId: "G-VBZJ83JXN9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

// const analytics = getAnalytics(FirebaseApp);