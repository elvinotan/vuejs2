<template>
  <div>
    <show-blog></show-blog>
  </div>
</template>

<script>
  import ShowBlog from './components/ShowBlog'; 

  export default {
    components: { 'show-blog': ShowBlog},

    data() {
      return {}
    }
  }
</script>

<style scoped>
  h1 { color:purple }
</style>
