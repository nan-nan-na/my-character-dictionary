<template>
  <b-col lg="6">
    <div v-if="!addMode">
      <b-card class="my-2 card" @click="onClick">
        <div class="d-flex align-items-center card-body">
          <h1 class="text-muted mx-auto">＋</h1>
        </div>
      </b-card>
    </div>
    <div v-if="addMode">
      <EditCard @change-state="onClick" :val="character" />
    </div>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Character } from "@/model/Character.ts";
import EditCard from "@/components/EditCard.vue";

@Component({
  components: {
    EditCard
  }
})
export default class AddCard extends Vue {
  private addMode: boolean = false;
  private character: Character = {};

  onClick() {
    this.addMode = !this.addMode;
    this.character = {};
  }
}
</script>

<style scoped>
.card {
  height: 312px;
  border: 1px dashed;
  border-color: #6c757d;
}
.card-body {
  height: 100%;
}
</style>
