import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_-DmH6pte4IRp4xwntFM9lknHDk-8RHM",
  authDomain: "crown-db-d91a9.firebaseapp.com",
  databaseURL: "https://crown-db-d91a9.firebaseio.com",
  projectId: "crown-db-d91a9",
  storageBucket: "crown-db-d91a9.appspot.com",
  messagingSenderId: "846886255763",
  appId: "1:846886255763:web:7fe6b1d061939d750d2166",
  measurementId: "G-3444H65QRD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
