<template>
  <div>
    <div>{{title}}</div>
    <p>Contoh Component global Registered</p>
    <ninjas-global></ninjas-global>
    <p>Contoh Component local Registered</p>
    <ninjas-local></ninjas-local>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'; // Registering local component

export default {
  components: {
    'ninjas-local':Ninjas, // Registering local component
  },
  data () {
    return {
      title: 'Ninjas',
    }
  }
}
</script>

<style></style>
