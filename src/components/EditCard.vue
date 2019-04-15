<template>
  <b-card class="my-2" bg-variant="light">
    <b-form @reset="onReset">
      <b-container class="bv-example-row">
        <b-row class="no-area">
          <b-col cols="4" class="pl-0">
            <b-form-input
              size="sm"
              v-model="character.no"
              placeholder="No"
            ></b-form-input>
          </b-col>
          <b-col class="pr-0">
            <p align="right">
              <b-button
                v-b-tooltip.hover
                title="delete"
                v-if="showDelete"
                variant="danger"
                size="sm"
                @click="modalShow = !modalShow"
                >ー</b-button
              >
              <b-button
                v-b-tooltip.hover
                title="save"
                @click="onSubmit"
                variant="success"
                size="sm"
                >✔</b-button
              >
              <b-button
                v-b-tooltip.hover
                title="cancel"
                type="reset"
                variant="outline-secondary"
                size="sm"
                >✖</b-button
              >
            </p>
            <b-modal
              v-model="modalShow"
              @ok="onDelete"
              title="キャラクターを削除します"
            >
              <p class="my-1">
                選択されたキャラクターを削除します。
                <br />よろしいですか？
              </p>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
      <b-media no-body>
        <b-media-aside class="img-area">
          <b-img
            blank
            blank-color="#5f9ea0"
            width="1"
            height="200"
            alt="Charactor image"
          ></b-img>
        </b-media-aside>
        <b-media-body class="ml-0 data-area">
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
import * as lodash from "lodash";

@Component
export default class EditCard extends Vue {
  @Prop()
  private deleteMode?: boolean;

  @Prop()
  private val!: Character;

  private character!: Character;
  private showDelete!: boolean;
  private modalShow: boolean = false;

  public created() {
    this.character = lodash.cloneDeep(this.val);
    this.showDelete = this.deleteMode ? this.deleteMode : false;
  }

  @Emit("change-state")
  changeState() {}

  private onSubmit() {
    if (this.$store.getters.characterById(this.val.id) !== null) {
      this.$store.dispatch("updateAction", this.character);
    } else {
      this.$store.dispatch("addAction", this.character);
    }
    this.onReset();
  }

  private onDelete(bvModalEvt: any) {
    /** bootstrap-vueの制御のため型が無いのでany */
    this.$store.dispatch("deleteAction", this.character);
    bvModalEvt.preventDefault();
    this.modalShow = false;
    this.onReset();
  }

  private onReset() {
    this.character = {};
    this.changeState();
  }
}
</script>
<style scoped>
.no-area {
  height: 40px;
}
.img-area {
  width: 20%;
  background-color: #5f9ea0;
}
.data-area {
  width: 80%;
}
</style>
