<template>
  <div>
    <e-label :required="required" :show="showLabel">{{label}}</e-label>
    <input type="text" ref="shortText" :value="value" @input="updateValue()" />
  </div>
</template>
<script>
import Label from "./Label";

export default {
  components: {
    "e-label": Label
  },
  props: {
    required: { type: Boolean, required: false, default: false },
    label: { type: String, required: false, default: "" },
    showLabel: { type: Boolean, required: false, default: true },
    value: { type: String, required: false, default: "" }
  },
  data() {
    return {};
  },
  methods: {
    updateValue() {
      console.log(this.$refs.shortText.value);

      this.$emit("input", this.$refs.shortText.value);
    }
  }
};
</script>
<style>
</style>
