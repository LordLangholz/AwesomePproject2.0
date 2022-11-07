import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCA8JDgKJyCgPLm9OJ03MxbN0xsf1tOh0Y",
  authDomain: "coffeemaster-363414.firebaseapp.com",
  projectId: "coffeemaster-363414",
  storageBucket: "coffeemaster-363414.appspot.com",
  messagingSenderId: "975616438055",
  appId: "1:975616438055:web:62ced6a73007e3b87c8302",
  measurementId: "G-QH7VEF0PN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);