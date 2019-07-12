import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routers from './routers';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routers,
  mode: 'history'
})

export const bus = new Vue({});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
