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
import Firebase from "@/plugins/firebase.ts";

@Component
export default class Navber extends Vue {
  @Prop()
  isLogin?: boolean = false;

  private loginAction() {
    Firebase.login();
  }

  private logoutAction() {
    Firebase.logout();
  }
}
</script>
