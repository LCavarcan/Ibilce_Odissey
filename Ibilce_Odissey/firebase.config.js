// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYvI7-szBfJJnU-oIWQPUvrYK7i7l7ZIw",
  authDomain: "login-e42b3.firebaseapp.com",
  projectId: "login-e42b3",
  storageBucket: "login-e42b3.appspot.com",
  messagingSenderId: "1074121801713",
  appId: "1:1074121801713:web:bd6d48c7389a61ac378e50"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
