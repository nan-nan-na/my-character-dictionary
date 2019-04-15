import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import debug from "@/plugins/debugLog.ts";
import store from "@/store.ts";
import router from "@/router.ts";

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

export default {
  login() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => {
            store.dispatch("sync").then(() => {
              router.push("/main");
            });
          });
      })
      .catch(e => {
        debug.log("twitter login error" + JSON.stringify(e));
      });
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        store.commit("setCharacters", []);
        debug.log("Logout complete");
      })
      .catch(e => {
        debug.log("Logout error" + JSON.stringify(e));
      });
  }
};
