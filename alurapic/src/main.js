  import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';
// importando o arquivo `Transform.js`.
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);



const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  components: { App },
  router: router,
  template: '<App/>'
})
