import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.directive('rainbow',{
  bind(el, binding, vnode) {
    el.style.color = '#'+Math.random().toString().slice(2,8);
  }
})

Vue.directive('speccolor', {
  bind(el, binding, vnode) {
    el.style.color = binding.value;
  }
});

Vue.filter('filter-uppercase', value => {
  return value.toUpperCase();
})

Vue.filter('filter-snippet', value => {
  return value.slice(0, 100)+'...';
})

export const bus = new Vue({});

new Vue({
  el: '#app',
  render: h => h(App)
})
