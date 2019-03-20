import './database/firebase';
import Vue from 'vue';
import App from './App.vue';
//import VueRouter from 'vue-router';
//import VueFire from 'vuefire';
import routes from './routes';
import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import './assets/css/admin.scss';
import './assets/js/main.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false

new Vue({
  router: routes,
  store,
  render: h => h(App)
}).$mount('#root')
