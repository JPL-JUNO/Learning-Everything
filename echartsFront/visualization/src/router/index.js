import Vue from "vue";
import VueRouter from "vue-router";
import sellerPage from "@/views/sellerPage";
import trendPage from "@/views/trendPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sellerPage",
    component: sellerPage,
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
