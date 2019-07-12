<template>
  <div>
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu';
export default {
  components:{
    'app-menu': Menu,
  }
}
 </script>

<style scoped>
  h1 { color:purple }
</style>
