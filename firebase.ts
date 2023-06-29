// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2lsSInfFlQb0LHQB7WmEQ50L1HrQikVQ",
  authDomain: "chatgpt-message-936c4.firebaseapp.com",
  projectId: "chatgpt-message-936c4",
  storageBucket: "chatgpt-message-936c4.appspot.com",
  messagingSenderId: "881773906480",
  appId: "1:881773906480:web:809efe664da238f52fbbf5",
  measurementId: "G-1J04H1V780",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
