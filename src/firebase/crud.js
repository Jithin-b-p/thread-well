import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// creating custom id
const generateRandomID = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomID = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }

  return randomID;
};

// create
export const createData = async (collectionName, data) => {
  const id = generateRandomID();
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, { id, ...data });
  } catch (error) {
    console.error("error adding document", error);
  }
};

// const testData = {
//   name: "jithin B P",
//   age: "26",
//   email: "jithinbp@live.com",
// };

// createData("users", testData);

// read
export const readData = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such Document");
    }
  } catch (error) {
    console.error("error reading data", error.message);
  }
};

// update
export const updateData = async (collectionName, id, data) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      id: id,
      ...data,
    });

    console.log("Document successfully updated!!");
  } catch (error) {
    console.error("Error updating document: ", error.message);
  }
};

export const deleteData = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    console.log("Document successfully deleted");
  } catch (error) {
    console.error("Error deleting document: ", error.message);
  }
};

// read all
export const readAllData = async (collectionName) => {
  try {
    const newDataArr = [];
    const querySnapShot = await getDocs(collection(db, collectionName));
    querySnapShot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      newDataArr.push(doc.data());
    });
    return newDataArr;
  } catch (error) {
    console.error("Error reading collection: ", error.message);
  }
};

// listen to collection.
export const listenToCollection = (collectionName, callback) => {
  const collectionRef = collection(db, collectionName);

  return onSnapshot(collectionRef, (querySnapShot) => {
    const newDataArr = [];
    querySnapShot.forEach((doc) => {
      newDataArr.push(doc.data());
    });
    callback(newDataArr);
  });
};
