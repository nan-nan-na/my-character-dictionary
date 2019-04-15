<template>
  <b-container class="bv-example-row">
    <b-row>
      <!-- v-forでデータ数分だけカードを並べる -->
      <Card
        v-for="character in this.getCharacters"
        :key="character.id"
        v-bind:character="character"
      />
      <AddCard />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Character } from "@/model/Character.ts";
import Card from "@/components/Card.vue";
import AddCard from "@/components/AddCard.vue";

@Component({
  components: {
    Card,
    AddCard
  }
})
export default class CardList extends Vue {
  private get getCharacters(): Character[] {
    return this.$store.getters.characters();
  }
}
</script>
