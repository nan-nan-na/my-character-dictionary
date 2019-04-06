import Vue from "vue";
import Vuex from "vuex";
import { Character } from "@/model/Character.ts";

Vue.use(Vuex);

interface State {
  characters: Character[];
}

// テストデータ
let char1: Character = {
  no: 1,
  PCName: "ほげ",
  age: "123",
  gender: "不明",
  job: "私立探偵",
  supplement: "不老不死",
  system: "マルチホラージャンルRPG インセイン",
  scenario: "楽園",
  PLName: "北極星紫苑"
};

let char2: Character = {
  no: 2,
  PCName: "ぱげ",
  age: "37",
  gender: "男性",
  job: "医者",
  supplement: "ぱげ心療内科",
  system: "忍術バトルRPG シノビガミ",
  scenario: "最後の最後まで",
  PLName: "北極星紫苑"
};

let char3: Character = {
  no: 3,
  PCName: "ふが",
  age: "12",
  gender: "女性",
  job: "小学生",
  supplement: "○○小学校6年3組",
  system: "ご近所メルヘンRPG ピーカーブー",
  scenario: "最後の最後まで",
  PLName: "北極星紫苑"
};

export default new Vuex.Store({
  state: {
    characters: [char2, char3, char1]
  } as State,
  getters: {
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
