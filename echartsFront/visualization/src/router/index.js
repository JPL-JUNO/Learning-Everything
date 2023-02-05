import Vue from "vue";
import VueRouter from "vue-router";
import sellerPage from "@/views/sellerPage";
import trendPage from "@/views/trendPage";
import homePage from "@/views/homePage";
import homePage2 from "@/views/homePage2";
import mapPage from "@/views/mapPage";
import rankPage from "@/views/rankPage";
import hotPage from "@/views/hotPage";
import stockPage from "@/views/stockPage.vue";

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
  {
    path: "/mapPage",
    component: mapPage,
  },
  {
    path: "/rankPage",
    component: rankPage,
  },
  {
    path: "/hotPage",
    component: hotPage,
  },
  {
    path: "/stockPage",
    component: stockPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
