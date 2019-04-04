<template>
  <div id="app">
    <Navbar />
    <b-container class="bv-example-row">
      <b-row>
        <!-- v-forでデータ数分だけカードを並べる -->
        <b-col lg="6">
          <Card />
        </b-col>
        <b-col lg="6">
          <Card />
        </b-col>
      </b-row>
      <b-row>
        <!-- v-forでデータ数分だけカードを並べる -->
        <b-col lg="6">
          <Card />
        </b-col>
      </b-row>
    </b-container>
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
