<template>
  <label v-show="show_" :disabled="disabled_">
    <slot></slot>
    <span v-show="required_" class="required">*</span>
  </label>
</template>
<script>
export default {
  props: {
    required: { type: Boolean, required: false, default: false },
    show: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false, default: false }
  },
  watch: {
    required(n) {
      console.log("Label.watch.required " + n);
      this.required_ = n;
    },
    show(n) {
      console.log("Label.watch.show " + n);
      this.show_ = n;
    },
    disabled(n) {
      console.log("Label.watch.disabled " + n);
      this.disabled_ = n;
    }
  },
  data() {
    return {
      name: "Label",
      type: "label",
      required_: this.required,
      show_: this.show,
      disabled_: this.disabled
    };
  }
};
</script>
<style>
.required {
  color: red;
}
</style>
