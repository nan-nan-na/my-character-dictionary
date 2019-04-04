<template>
  <div id="app">
    <Navbar />
    <Card />
    <!-- v-forでデータ数分だけカードを並べる -->
    <Card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Navbar,
    Card
  }
})
export default class App extends Vue {}
</script>
