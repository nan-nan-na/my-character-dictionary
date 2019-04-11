import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Character } from "@/model/Character.ts";
import * as lodash from "lodash";
import * as firebase from "firebase/app";
import { db } from "@/plugins/firebase";

Vue.use(Vuex);

interface State {
  user: any; // firebase.User | {} にすると、uidが拾えないので苦肉の策。
  loginStatus: boolean;
  characters: Character[];
}

export default new Vuex.Store({
  state: {
    user: {},
    loginStatus: false,
    characters: []
  } as State,
  getters: {
    user: state => () => {
      return state.user;
    },
    isLogin: state => () => {
      return state.loginStatus;
    },
    characters: state => () => {
      return state.characters;
    },
    characterById: state => (id: string) => {
      let character = state.characters.find(character => character.id === id);
      if (character) {
        return character;
      }
      return null;
    }
  },
  mutations: {
    onAuthStateChanged(state, user: firebase.User | {}) {
      state.user = user;
    },
    onUserStatusChanged(state, status: boolean) {
      state.loginStatus = status;
    },
    setCharacters(state, payload: Character[]) {
      state.characters = payload;
    }
  },
  actions: {
    sync(context) {
      if (this.state.user.uid) {
        db.collection("characters")
          .where("uid", "==", this.state.user.uid)
          .orderBy("no", "asc")
          .get()
          .then(querySnapshot => {
            if (querySnapshot) {
              let characters: Character[] = [];
              querySnapshot.forEach(doc => {
                characters.push(createCharacterByDocumentSnapshot(doc));
              });
              context.commit("setCharacters", characters);
            }
          })
          .then()
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      }
    },
    addAction(context, payload: Character) {
      if (this.state.user.uid) {
        db.collection("characters")
          .add(createDocumentByCharacter(payload, this.state.user.uid))
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            context.dispatch("sync");
          })
          .catch(error => {
            console.error("Error adding document: ", error);
          });
      }
    },
    updateAction(context, payload: Character) {
      context.dispatch("deleteAction", payload).then(() => {
        context.dispatch("addAction", payload).then(() => {
          context.dispatch("sync");
        });
      });
    },
    deleteAction(context, payload: Character) {
      let doc = db.collection("characters").doc(payload.id);
      doc
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          context.dispatch("sync");
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    }
  }
});

const createCharacterByDocumentSnapshot = (
  snapshot: firebase.firestore.DocumentSnapshot
): Character => {
  const data = snapshot.data() as firebase.firestore.DocumentData;
  return {
    id: snapshot.id,
    no: data.no,
    PCName: data.PCName,
    age: data.age,
    gender: data.gender,
    job: data.job,
    supplement: data.supplement,
    system: data.system,
    scenario: data.scenario,
    PLName: data.PLName
  };
};

const createDocumentByCharacter = (character: Character, uid: string) => {
  return {
    no: character.no ? character.no : "",
    PCName: character.PCName ? character.PCName : "",
    age: character.age ? character.age : "",
    gender: character.gender ? character.gender : "",
    job: character.job ? character.job : "",
    supplement: character.supplement ? character.supplement : "",
    system: character.system ? character.system : "",
    scenario: character.scenario ? character.scenario : "",
    PLName: character.PLName ? character.PLName : "",
    uid: uid ? uid : ""
  };
};
