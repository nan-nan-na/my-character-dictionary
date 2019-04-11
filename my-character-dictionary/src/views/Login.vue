<template>
  <div>右上のメニューから、Twitterアカウントでログインしてください。</div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import * as firebase from "firebase/app";
import { provider } from "@/plugins/firebase.ts";

export default class Login extends Vue {}
</script>
