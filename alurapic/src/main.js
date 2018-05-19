import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';
// importando o arquivo `Transform.js`.
import './directives/Transform';
import VeeValidate from 'vee-validate';

import { Validator } from 'vee-validate';

import { msg } from './fr';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);



Vue.http.options.root = 'http://localhost:3000';

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
