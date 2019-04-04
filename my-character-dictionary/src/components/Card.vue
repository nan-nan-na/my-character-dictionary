<template>
  <div class="w-50">
    <b-card class="m-3">
      <b-media no-body>
        <b-media-aside>
          <b-img-lazy
            thumbnail
            blank
            blank-color="#ccc"
            width="64"
            height="200"
            :src="getImgUrl()"
            alt="キャラクター画像"
          ></b-img-lazy>
        </b-media-aside>
        <b-media-body class="ml-3">
          <h5 class="mt-0">charactpr name ( age ) [ gender ]</h5>
          <p>job</p>
          <p>supplement</p>
          <p>system</p>
          <p>scenario</p>
        </b-media-body>
      </b-media>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  private getImgUrl() {
    return require("../assets/lower_m.png");
  }
}
</script>
