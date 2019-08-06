import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.config.productionTip = false;

export const eventEmmiter = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
