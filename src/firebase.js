
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVzMEJ8i_7Fi5sPwKxwivqA4vny9QfsgQ",
  authDomain: "react-ec6bd.firebaseapp.com",
  projectId: "react-ec6bd",
  storageBucket: "react-ec6bd.firebasestorage.app",
  messagingSenderId: "574308813569",
  appId: "1:574308813569:web:379a00ad9db6be49f12900",
  measurementId: "G-4XHK6BK9G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);