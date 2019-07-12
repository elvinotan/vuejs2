<template>
  <div>
    <form-helper>
      <div slot="form-header"><h1>{{ headerTitle }}</h1></div>
      <div slot="form-body"><h1>{{ bodyTitle }}</h1></div>
      <div slot="form-footer"><h1>{{ footerTitle }}</h1></div>
      <div><h1>Tampa menggunakan Slot</h1></div>
    </form-helper>
  </div>
</template>

<script>
  import FormHelper from './components/FormHelper';

  export default {
    components: { 'form-helper': FormHelper },

    data() {
      return { 
        headerTitle:'Header Title',
        bodyTitle:'Body Title',
        footerTitle:'Footer Title',
      }
    }
  }
</script>

<style scoped>
  h1 { color:purple }
</style>
