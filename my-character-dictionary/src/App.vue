<template>
  <div id="app">
    <Navbar :isLogin="isLogin" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  private isLogin: boolean = false;

  public created() {
    firebase.auth().onAuthStateChanged(user => {
      let loginUser: firebase.User | {} = user ? user : {};
      this.$store.commit("onAuthStateChanged", loginUser);
      this.$store.commit(
        "onUserStatusChanged",
        user ? (user.uid ? true : false) : false
      );
      this.isLogin = this.$store.getters.isLogin();
      if (this.isLogin) {
        this.$store.dispatch("sync").then(() => {
          this.$router.push("/main");
        });
      } else {
        this.$router.push("/");
      }
    });
  }
}
</script>
