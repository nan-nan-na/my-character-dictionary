<template>
  <div id="navbar">
    <b-navbar toggleable variant="info" type="light">
      <b-navbar-brand href="#">
        <img
          src="../assets/logo.png"
          class="d-inline-block align-top"
          alt="【M】"
        />
        Myキャラ図鑑
      </b-navbar-brand>
      <b-navbar-toggle
        target="nav-text-collapse"
        label="Menu"
      ></b-navbar-toggle>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!isLogin" type="dark" @click="loginAction"
            >ログイン</b-nav-item
          >
          <b-nav-item v-if="isLogin" type="dark" @click="logoutAction"
            >ログアウト</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as firebaseConst from "@/plugins/firebase.ts";
import * as firebase from "firebase/app";
import "firebase/auth";

@Component
export default class Navber extends Vue {
  @Prop()
  isLogin?: boolean = false;

  private loginAction() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(firebaseConst.provider)
          .then(() => {
            this.$store.dispatch("sync").then(() => {
              this.$router.push("/main");
            });
          });
      })
      .catch(e => {
        console.log("twitter login error" + JSON.stringify(e));
      });
  }

  private logoutAction() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$store.commit("setCharacters", []);
        console.log("signout!!!");
      })
      .catch(e => {
        console.log("Logout error" + JSON.stringify(e));
      });
  }
}
</script>
