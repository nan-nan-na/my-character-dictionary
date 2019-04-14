import Vue from "vue";
import Router from "vue-router";
import CardList from "@/views/CardList.vue";
import Login from "@/views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/main",
      name: "cardList",
      component: CardList
    },
    {
      path: "/",
      name: "login",
      component: Login
    }
  ]
});
