<template>
  <b-col lg="6">
    <div>
      <b-card class="my-2" bg-variant="light">
        <p>No.{{ this.character.no }}</p>
        <b-media no-body>
          <b-media-aside>
            <b-img
              blank
              blank-color="#5f9ea0"
              width="64"
              height="200"
              alt="Charactor image"
            ></b-img>
          </b-media-aside>
          <b-media-body class="ml-3">
            <h5 class="mt-0">
              {{ this.character.PCName }} ( {{ this.character.age }} ) [
              {{ this.character.gender }} ]
            </h5>
            <p>{{ this.character.job }}</p>
            <p>{{ this.character.supplement }}</p>
            <p>{{ this.character.system }}</p>
            <p>{{ this.character.scenario }}</p>
            <p align="right">{{ this.character.PLName }}</p>
          </b-media-body>
        </b-media>
      </b-card>
    </div>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Character } from "@/model/Character.ts";

@Component
export default class Card extends Vue {
  @Prop()
  private character?: Character;
}
</script>
