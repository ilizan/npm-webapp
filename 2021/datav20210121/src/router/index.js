import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home
    redirect:'/main'
  },
  {
    path: "/v",
    name: "V",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/V.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
