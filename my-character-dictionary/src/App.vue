<template>
  <div id="app">
    <Navbar />
    <b-container class="bv-example-row">
      <b-row>
        <!-- v-forでデータ数分だけカードを並べる -->
        <Card
          v-for="character in this.getCharacters"
          :key="character.no"
          v-bind:character="character"
        />
        <AddCard />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Character } from "@/model/Character.ts";
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import AddCard from "@/components/AddCard.vue";

@Component({
  components: {
    Navbar,
    Card,
    AddCard
  }
})
export default class App extends Vue {
  private get getCharacters(): Character[] {
    let characters = this.$store.getters.getCharacters();
    return characters;
  }
}
</script>
