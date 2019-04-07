import Vue from "vue";
import * as firebase from "firebase/app";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// firebase設定値・初期化処理
const config = {
  apiKey: "AIzaSyDrtoDH-OO8ILdnwEqvJaULHG1dXqJ8Zvo",
  authDomain: "my-char-dictionary.firebaseapp.com",
  databaseURL: "https://my-char-dictionary.firebaseio.com",
  projectId: "my-char-dictionary",
  storageBucket: "my-char-dictionary.appspot.com",
  messagingSenderId: "102427001734"
};
firebase.initializeApp(config);

// storeの初期化
store.dispatch("init");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
