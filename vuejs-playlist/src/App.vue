<template>
  <div>
    <keep-alive>
      <component :is='selectedForm'></component>
    </keep-alive>
    <button @click="changeForm">Change Form</button>
  </div>
</template>

<script>
  import FormOne from './components/FormOne';
  import FormTwo from './components/FormTwo';

  export default {
    components: { 'form-one': FormOne, 'form-two': FormTwo },

    data() {
      return {
        selectedForm : 'form-one',
      }
    },
    methods: {
      changeForm() {
        this.selectedForm = (this.selectedForm == 'form-one') ? 'form-two' : 'form-one';
      }
    }
  }
</script>

<style scoped>
  h1 { color:purple }
</style>
