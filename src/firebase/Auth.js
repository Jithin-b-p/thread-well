import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { db, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const { email, uid } = user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setDoc(doc(db, "users", uid), {
        uid,
        email,
      });
    })
    .catch((error) => {
      console.error("error on google sign in", error.message);
    });

  return result;
};

export const signIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("res:", res);
    return res.user;
  } catch (error) {
    console.error("sign in error", error.message);
    return error.code;
  }
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("signout error", error.message);
  }
};

// export const signUp = async (email, password, userData) => {
//   try {
//     const user = await createUserWithEmailAndPassword(auth, email, password);
//     await setDoc(doc(db, "users", user.user.uid), {
//       ...userData,
//       uid: user.user.uid,
//     });
//     return user.user;
//   } catch (error) {
//     console.error(error.message);
//   }
// };
export const signUp = async (email, password, userData) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", user.user.uid), {
      uid: user.user.uid,
      ...userData,
    });

    return user.user;
  } catch (error) {
    console.error(error.message);

    return error.code;
  }
};
