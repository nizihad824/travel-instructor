// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdTawFTRhh5zV87XaS-q6EWB_Rs-KvncI",
  authDomain: "travel-instructor-751a8.firebaseapp.com",
  projectId: "travel-instructor-751a8",
  storageBucket: "travel-instructor-751a8.appspot.com",
  messagingSenderId: "255256996539",
  appId: "1:255256996539:web:e43821784aa6b05049579e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;