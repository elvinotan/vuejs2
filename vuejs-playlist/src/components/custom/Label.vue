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
    disabled: { type: Boolean, required: false, default: false },
    col: { type: String, required: false, default: "1,2,3,4" }
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
    },
    col(n) {
      console.log("ShortText.watch.col " + n);
      this.xs_ = this.col.split(",").length > 0 ? this.col.split(",")[0] : 0;
      this.sm_ = this.col.split(",").length > 1 ? this.col.split(",")[1] : 0;
      this.md_ = this.col.split(",").length > 2 ? this.col.split(",")[2] : 0;
      this.lg_ = this.col.split(",").length > 3 ? this.col.split(",")[3] : 0;
    }
  },
  data() {
    return {
      name: "Label",
      type: "label",
      required_: this.required,
      show_: this.show,
      disabled_: this.disabled,
      xs_: this.col.split(",").length > 0 ? this.col.split(",")[0] : 0,
      sm_: this.col.split(",").length > 1 ? this.col.split(",")[1] : 0,
      md_: this.col.split(",").length > 2 ? this.col.split(",")[2] : 0,
      lg_: this.col.split(",").length > 3 ? this.col.split(",")[3] : 0
    };
  }
};
</script>
<style>
.required {
  color: red;
}
</style>
