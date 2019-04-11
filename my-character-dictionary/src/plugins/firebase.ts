import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDrtoDH-OO8ILdnwEqvJaULHG1dXqJ8Zvo",
  authDomain: "my-char-dictionary.firebaseapp.com",
  databaseURL: "https://my-char-dictionary.firebaseio.com",
  projectId: "my-char-dictionary",
  storageBucket: "my-char-dictionary.appspot.com",
  messagingSenderId: "102427001734"
});

export const provider = new firebase.auth.TwitterAuthProvider();

export const db = app.firestore();
