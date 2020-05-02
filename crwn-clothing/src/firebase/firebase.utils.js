import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7A6UAp8cC5YikVGpeAUUHnIL_VI2K0bQ",
  authDomain: "crwn-db-81d2e.firebaseapp.com",
  databaseURL: "https://crwn-db-81d2e.firebaseio.com",
  projectId: "crwn-db-81d2e",
  storageBucket: "crwn-db-81d2e.appspot.com",
  messagingSenderId: "607885972259",
  appId: "1:607885972259:web:666b84a4098839e3ca7296",
  measurementId: "G-4DCMLKH5XW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
