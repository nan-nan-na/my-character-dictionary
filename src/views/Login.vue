<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col lg="6">
        <div class="m-2">
          <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark" header-tag="h2">
            <template slot="header">Myキャラ図鑑</template>
            <template slot="lead">TRPGのキャラクターを記録できるサービス</template>
            <hr class="my-4">
            <p>TRPG(テーブルトークRPG)で、様々な冒険・事件・日常を過ごしたキャラクター達を、簡潔に記録として残すことができるWebサービスです。</p>
            <b-button
              class="border border-light"
              variant="primary"
              @click="onClick"
            >Twitterアカウントでログイン</b-button>
          </b-jumbotron>
        </div>
      </b-col>
      <Card :character="infoCharacter"/>
      <Card :character="sampleCharacter"/>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import { Character } from "@/model/Character.ts";
import Firebase from "@/plugins/firebase.ts";

@Component({ components: { Card } })
export default class Login extends Vue {
  private onClick() {
    Firebase.login();
  }

  private infoCharacter: Character = {
    no: "ナンバリングもご自由に。",
    PCName: "キャラクターの名前",
    age: "歳",
    gender: "性別",
    job: "職業や所属など、システムにあわせて記録。",
    supplement: "少しですが補足エリアもあります",
    system: "ここにシステム名を書いて…",
    scenario: "「ここにシナリオ名を書きます」",
    PLName: "最後にあなたのプレイヤー名をこちらに。"
  };

  private sampleCharacter: Character = {
    no: "0",
    PCName: "さん　ぷる子",
    age: "21",
    gender: "女性",
    job: "学生",
    supplement: "サンプル大学　理工学部　理工学研究科",
    system: "マルチジャンル・ホラーRPG インセイン",
    scenario: "「ハイ・ストレンジネス」",
    PLName: "さん　ぷる太郎"
  };
}
</script>

<style scoped>
.display-3 {
  font-size: 2.7rem;
}
.lead {
  font-size: 1.1rem;
}
</style>

