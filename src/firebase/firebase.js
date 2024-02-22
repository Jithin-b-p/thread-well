import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
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

export { app, auth };
// const provider = new GoogleAuthProvider();
// const auth = getAuth();
// export const signInWithGoogle = signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
