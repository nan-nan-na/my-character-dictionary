import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDrtoDH-OO8ILdnwEqvJaULHG1dXqJ8Zvo",
  authDomain: "my-char-dictionary.firebaseapp.com",
  databaseURL: "https://my-char-dictionary.firebaseio.com",
  projectId: "my-char-dictionary",
  storageBucket: "my-char-dictionary.appspot.com",
  messagingSenderId: "102427001734"
};

// Twitter 認証ログイン用の設定
var TwitterProvider = new firebase.auth.TwitterAuthProvider();

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());

// Twitter 認証ログイン用の設定のエクスポート
export { TwitterProvider };
