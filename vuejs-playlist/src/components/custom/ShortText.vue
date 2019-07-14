<template>
  <div>
    <e-label :required="required" :show="showLabel">{{label}} :</e-label>
    <input type="text" ref="shortText" :maxlength="maxlength" :value="value" @input="updateValue()" />
    <span v-show="error.has" class="errors">{{error.message}}</span>
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
    value: { type: String, required: false, default: "" },
    maxlength: { type: Number, required: false, default: 24 }
  },
  data() {
    return {
      error: {
        has: false,
        message: ""
      }
    };
  },
  methods: {
    updateValue() {
      this.$emit("input", this.$refs.shortText.value);
    },
    clearError() {
      this.error = { has: false, message: "" };
    },
    validate() {
      this.clearError();
      const value = this.$refs.shortText.value;
      if (value === "") {
        this.error = { has: true, message: this.label + " is required" };
      } else if (value.length > this.maxlength) {
        this.error = { has: true, message: this.label + " input exceed" };
      }
    }
  }
};
</script>
<style scoped>
.errors {
  color: red;
}
</style>
