import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninjas.vue';

// Registering global component
Vue.component('ninjas-global', Ninjas);

export const bus = new Vue({});

new Vue({
  el: '#app',
  render: h => h(App)
})
