import Vue from "vue";
import Vuex from "vuex";
// import firebase from "@/plugins/firebase.ts";

Vue.use(Vuex);

interface State {
  characters: Array<Character>;
}

interface Character {
  no: number;
  PCName: string;
  age: string;
  gender: string;
  job: string;
  supplement: string;
  system: string;
  scenario: string;
  PLName: string;
}

// テストデータ
let char1: Character = {
  no: 1,
  PCName: "ほげ",
  age: "123",
  gender: "不明",
  job: "nodata",
  supplement: "nodata",
  system: "nodata",
  scenario: "nodata",
  PLName: "nodata"
};

export default new Vuex.Store({
  state: {
    characters: [char1, char1, char1]
  } as State,
  getters: {
    getCharacters: state => () => {
      // 常に昇順で渡す
      return state.characters.sort(
        (a, b): number => {
          if (a.no < b.no) return -1;
          if (a.no >= b.no) return 1;
          return 0;
        }
      );
    },
    getCharacterByNo: (state, no: number) => () => {
      let character = state.characters.find(character => character.no === no);
      if (character) {
        return character;
      }
      // エラー処理が雑、検索方法は要検討
      return null;
    }
  },
  mutations: {
    add(state, payload) {
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
