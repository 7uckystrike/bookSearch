import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoSqhQ_MvvGe851UplEVyIkDgpDYHpI84",
  authDomain: "book-cfb51.firebaseapp.com",
  projectId: "book-cfb51",
  storageBucket: "book-cfb51.appspot.com",
  messagingSenderId: "1097066251641",
  appId: "1:1097066251641:web:5c7a3dda3bc6629bc95ba8"
};

firebase.initializeApp(firebaseConfig);

export const firebaseinstance = firebase
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageServise = firebase.storage();

export default firebase