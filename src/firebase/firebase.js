import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe9oYuahd83ucgudjw9mY3Q1lyokgUaEQ",
  authDomain: "thread-well-clothing.firebaseapp.com",
  databaseURL:
    "https://thread-well-clothing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thread-well-clothing",
  storageBucket: "thread-well-clothing.appspot.com",
  messagingSenderId: "834902980076",
  appId: "1:834902980076:web:c48869b0dd9697b9f4bcc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
// const cityRef = doc(db, "cities", "BJ");

// setDoc(cityRef, { capital: true }, { merge: true });

export { app, auth, db };
