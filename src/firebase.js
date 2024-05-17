// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdaBpZ3rSmr70aFv4sPrvgtS1jJB00r38",
  authDomain: "auth-ef0d5.firebaseapp.com",
  projectId: "auth-ef0d5",
  storageBucket: "auth-ef0d5.appspot.com",
  messagingSenderId: "68223945516",
  appId: "1:68223945516:web:4ef8b125602557df847a89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;

