import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUHpLCucyXiJey_Y81jLMn-37IlBhFnPA",
  authDomain: "e-commerce-db-53312.firebaseapp.com",
  projectId: "e-commerce-db-53312",
  storageBucket: "e-commerce-db-53312.appspot.com",
  messagingSenderId: "514911805605",
  appId: "1:514911805605:web:ba59d9ddcf157e9561ed4c",
  measurementId: "G-V143Y06YLM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;