// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8hw0ZI-3iIvPAvWNgCeVwCrNgCf8fMY0",
  authDomain: "netflix-gpt-30e94.firebaseapp.com",
  projectId: "netflix-gpt-30e94",
  storageBucket: "netflix-gpt-30e94.appspot.com",
  messagingSenderId: "759929371746",
  appId: "1:759929371746:web:7a2e1be27ed0870724e53b",
  measurementId: "G-L7WQSPD7NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();