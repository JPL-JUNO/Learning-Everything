import Vue from "vue";
import VueRouter from "vue-router";
import sellerPage from "@/views/sellerPage";
import trendPage from "@/views/trendPage";
import homePage from "@/views/homePage";
import homePage2 from "@/views/homePage2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sellerPage",
    component: sellerPage,
  },
  {
    path: "/",
    component: homePage2,
  },
  {
    path: "/trendPage",
    component: trendPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
