<template>
  <b-card class="my-2" bg-variant="light">
    <b-form @reset="onReset">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4" class="pl-0">
            <b-form-input
              size="sm"
              v-model="character.no"
              placeholder="No"
            ></b-form-input>
          </b-col>
          <b-col class="pr-0">
            <p align="right">
              <b-button @click="onSubmit" variant="success" size="sm"
                >✔</b-button
              >
              <b-button type="reset" variant="outline-secondary" size="sm"
                >✖</b-button
              >
            </p>
          </b-col>
        </b-row>
      </b-container>
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
          <b-container class="bv-example-row mb-2">
            <b-row>
              <b-col class="px-0">
                <b-form-input
                  v-model="character.PCName"
                  placeholder="キャラクター名"
                ></b-form-input>
              </b-col>
              <b-col cols="3" class="pr-0 pl-1">
                <b-form-input
                  v-model="character.age"
                  placeholder="年齢"
                ></b-form-input>
              </b-col>
              <b-col cols="3" class="pr-0 pl-1">
                <b-form-input
                  v-model="character.gender"
                  placeholder="性別"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-container>
          <p class="mb-2">
            <b-form-input
              size="sm"
              v-model="character.job"
              placeholder="職業"
            ></b-form-input>
          </p>
          <p class="mb-2">
            <b-form-input
              size="sm"
              v-model="character.supplement"
              placeholder="補足情報"
            ></b-form-input>
          </p>
          <p class="mb-2">
            <b-form-input
              size="sm"
              v-model="character.system"
              placeholder="システム名"
            ></b-form-input>
          </p>
          <p class="mb-2">
            <b-form-input
              size="sm"
              v-model="character.scenario"
              placeholder="シナリオ名"
            ></b-form-input>
          </p>
          <p align="right" class="mb-2">
            <b-form-input
              size="sm"
              v-model="character.PLName"
              placeholder="プレイヤー名"
            ></b-form-input>
          </p>
        </b-media-body>
      </b-media>
    </b-form>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { Character } from "@/model/Character.ts";
import store from "../store";

let idCount: number = 3;

@Component
export default class EditCard extends Vue {
  @Prop()
  val!: Character;

  private character!: Character;

  public created() {
    this.character = this.val;
  }

  @Emit("change-state")
  changeState() {}

  private onSubmit() {
    if (this.character.no === "") {
      alert("Noが不正です");
    } else if (
      this.$store.getters.getCharacterById(this.character.id) !== null
    ) {
      this.$store.dispatch("updateAction", this.character);
      this.character = {};
      this.changeState();
    } else {
      this.character.id = idCount;
      idCount = idCount + 1;
      this.$store.dispatch("addAction", this.character);
      this.character = {};
      this.changeState();
    }
  }
  private onReset() {
    this.character = {};
    this.changeState();
  }
}
</script>
