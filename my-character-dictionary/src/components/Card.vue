<template>
  <b-col lg="6">
    <div v-if="!editMode">
      <b-card class="my-2" bg-variant="light" @click="onClick">
        <b-container>
          <b-row>
            <b-col>
              <p class="text-truncate">No.{{ this.character.no }}</p>
            </b-col>
          </b-row>
        </b-container>
        <b-media no-body>
          <b-media-aside class="img-area">
            <b-img
              blank
              blank-color="#5f9ea0"
              width="80"
              height="200"
              alt="Charactor image"
            ></b-img>
          </b-media-aside>
          <b-media-body class="ml-3 data-area">
            <b-container style="max-width: 100%">
              <b-row>
                <b-col class="px-0" cols="7">
                  <h5 class="mt-0 text-truncate">
                    {{ this.character.PCName }}
                  </h5>
                </b-col>
                <b-col class="px-0" cols="2">
                  <h5 class="mt-0 text-truncate">
                    ( {{ this.character.age }} )
                  </h5>
                </b-col>
                <b-col class="px-0" cols="3">
                  <h5 class="mt-0 text-truncate">
                    [ {{ this.character.gender }} ]
                  </h5>
                </b-col>
              </b-row>
            </b-container>
            <p class="text-truncate">{{ this.character.job }}</p>
            <p class="text-truncate">{{ this.character.supplement }}</p>
            <p class="text-truncate">{{ this.character.system }}</p>
            <p class="text-truncate">{{ this.character.scenario }}</p>
            <p align="right" class="text-truncate">
              {{ this.character.PLName }}
            </p>
          </b-media-body>
        </b-media>
      </b-card>
    </div>
    <div v-if="editMode">
      <EditCard @change-state="onClick" :val="character" :deleteMode="true" />
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
export default class Card extends Vue {
  @Prop()
  private character?: Character;
  private editMode: boolean = false;
  onClick() {
    this.editMode = !this.editMode;
  }
}
</script>
<style scoped>
.card {
  height: 312px;
}
.card-body {
  height: 100%;
}
.img-area {
  width: 20%;
}
.data-area {
  width: 80%;
}
</style>
