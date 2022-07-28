// Import the functions you need from the SDKs you need
// import  {initializeApp}  from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmY0tbPGzYLPNgD0XcE6O0-PqZ9r10A_I",
  authDomain: "whatsapp-clone-da2c7.firebaseapp.com",
  projectId: "whatsapp-clone-da2c7",
  storageBucket: "whatsapp-clone-da2c7.appspot.com",
  messagingSenderId: "692451254769",
  appId: "1:692451254769:web:b46f1cacf8d344e749a450"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = app.firestore();

export const googleProvider = new firebase.auth.GithubAuthProvider();