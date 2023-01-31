import Vue from "vue";
import VueRouter from "vue-router";
import SellerPage from "@/views/sellerPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sellerPage",
    component: SellerPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
