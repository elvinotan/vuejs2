<template>
  <div>
    <show-blog></show-blog>
    <show-title></show-title>
  </div>
</template>

<script>
  import ShowBlog from './components/ShowBlog'; 
  import ShowTitle from './components/ShowTitle'; 

  export default {
    components: { 'show-blog': ShowBlog, 'show-title': ShowTitle},

    data() {
      return {}
    }
  }
</script>

<style scoped>
  h1 { color:purple }
</style>
