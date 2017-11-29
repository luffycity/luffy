// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import cookie from "vue-cookies"
import axios from 'axios'

Vue.config.productionTip = false;
// Vue.use(axios)

Vue.prototype.$axios =axios;
Vue.prototype.$cookie = cookie;

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
