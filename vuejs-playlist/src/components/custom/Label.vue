<template>
  <label v-show="show">
    <slot></slot>
    <span v-show="required">*</span>
  </label>
</template>
<script>
export default {
  props: {
    required: { type: Boolean, required: false, default: false },
    show: { type: Boolean, required: false, default: true }
  }
};
</script>
<style>
</style>
