import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "./assets/css/global.less";

import "./assets/font/iconfont.css";

// 请求基准路径的配置
axios.defaults.baseURL = "http://127.0.0.1:8888/api";
// 将axios挂载到Vue的原型对象上，这里的http是自己起的名称
// 在别的组件中使用this.$http 就可以得到对象，从而发起ajax请求
Vue.prototype.$http = axios;

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echarts 使用
Vue.prototype.$echarts = window.echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
