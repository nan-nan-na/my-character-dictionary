import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Character } from "@/model/Character.ts";
import firestore from "@/plugins/firestore.ts";

Vue.use(Vuex);

interface State {
  init: boolean;
  id: number;
  characters: Character[];
}

// テストデータ
let char1: Character = {
  id: 1,
  no: "1",
  PCName: "保科　弦",
  age: "123",
  gender: "不明",
  job: "私立探偵",
  supplement: "不老不死",
  system: "マルチホラージャンルRPG インセイン",
  scenario: "楽園",
  PLName: "北極星紫苑"
};

let char2: Character = {
  id: 2,
  no: "2",
  PCName: "原田　元祐",
  age: "37",
  gender: "男性",
  job: "医者",
  supplement: "ぱげ心療内科",
  system: "忍術バトルRPG シノビガミ",
  scenario: "最後の最後まで",
  PLName: "北極星紫苑"
};

let char3: Character = {
  id: 3,
  no: "3",
  PCName: "風雅　さつき",
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
    init: false,
    id: 3,
    characters: [char2, char3, char1]
  } as State,
  getters: {
    getInit: state => () => {
      return state.init;
    },
    getCharacters: state => () => {
      // 常に昇順で渡す
      let characters = state.characters.sort(
        (a, b): number => {
          if (a.no === undefined) return -1;
          if (b.no === undefined) return -1;
          if (a.no < b.no) return -1;
          if (a.no >= b.no) return 1;
          return 0;
        }
      );
      return characters;
    },
    getCharacterById: state => (id: number) => {
      let character = state.characters.find(character => character.id === id);
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
    addAction(context, payload) {
      context.commit("add", payload);
    },
    deleteAction(context, payload) {
      context.commit("delete", payload);
    }
  }
});
