import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCASQbUtn0IDobv843kGasyCANypbX3Ei8",
  authDomain: "authentication-d551a.firebaseapp.com",
  projectId: "authentication-d551a",
  storageBucket: "authentication-d551a.appspot.com",
  messagingSenderId: "485209922928",
  appId: "1:485209922928:web:7a147e2e2c772c6a7fc3b5",
  measurementId: "G-CVCBECCCR9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
