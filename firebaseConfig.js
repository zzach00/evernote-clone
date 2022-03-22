// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ8tHLj_WLM3LHPgzXsg06VZdqEhfo3ek",
  authDomain: "evernote-clone-96b38.firebaseapp.com",
  projectId: "evernote-clone-96b38",
  storageBucket: "evernote-clone-96b38.appspot.com",
  messagingSenderId: "128259843030",
  appId: "1:128259843030:web:b956616d38aa9e337efa77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);