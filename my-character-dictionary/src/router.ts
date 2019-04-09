import Vue from "vue";
import Router from "vue-router";
import CardList from "@/views/CardList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "cardList",
      component: CardList
    },
    {
      path: "/login",
      name: "login",
      component: CardList /* 要変更 */
    }
  ]
});
