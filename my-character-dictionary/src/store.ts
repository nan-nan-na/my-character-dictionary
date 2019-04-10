import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Character } from "@/model/Character.ts";
import firestore from "@/plugins/firestore.ts";

Vue.use(Vuex);

interface State {
  init: boolean;
  characters: Character[];
}

export default new Vuex.Store({
  state: {
    init: false,
    characters: []
  } as State,
  getters: {
    getInit: state => () => {
      return state.init;
    },
    getCharacters: state => () => {
      // 常に昇順で渡す
      let characters = state.characters.sort(
        (a, b): number => {
          if (a.no < b.no) return -1;
          if (a.no >= b.no) return 1;
          return 0;
        }
      );
      return characters;
    },
    getCharacterByNo: state => (no: number) => {
      let character = state.characters.find(character => character.no === no);
      if (character) {
        return character;
      }
      // エラー処理が雑、検索方法は要検討
      return null;
    }
  },
  mutations: {
    setInit(state): void {
      state.init = true;
    },
    setCharacters(state, payload) {
      state.characters = payload;
    },
    add(state, payload): void {
      state.characters.push(payload);
    },
    update(state, payload): boolean {
      let deleteResult: boolean = this.delete(state, payload);
      if (deleteResult) {
        state.characters.push(payload);
        return true;
      }
      return false;
    },
    delete(state, payload): boolean {
      let idx: number = state.characters.findIndex(
        character => character.no === payload.no
      );
      if (idx !== -1) {
        state.characters.splice(idx, 1);
        return true;
      }
      // エラー処理が雑、検索方法は要検討
      return false;
    }
  },
  actions: {
    init(state, context) {
      if (!state.state.init) {
        firestore
          .collection("character")
          .get()
          .then(querySnapshot => {
            if (querySnapshot) {
              this.commit("setCharacter", querySnapshot);
            }
          });
      }
      context.commit("setInit");
    },
    addAction(context) {
      context.commit("add");
    },
    updateAction(context) {
      context.commit("update");
    },
    deleteAction(context) {
      context.commit("delete");
    }
  }
});
