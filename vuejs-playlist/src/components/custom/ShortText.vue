<template>
  <div>
    <e-label
      ref="fLabel"
      :required="required_"
      :disabled="disabled_"
      :show="showLabel_"
    >{{label_}} :</e-label>
    <input
      type="text"
      ref="rInput"
      :disabled="disabled_"
      :maxlength="maxlength_"
      :value="value_"
      @input="input()"
    />
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
    maxlength: { type: Number, required: false, default: 24 },
    disabled: { type: Boolean, required: false, default: false }
  },
  watch: {
    required(n) {
      console.log("ShortText.watch.required " + n);
      this.required_ = n;
    },
    label(n) {
      console.log("ShortText.watch.label " + n);
      this.label_ = n;
    },
    showLabel(n) {
      console.log("ShortText.watch.showLabel " + n);
      this.showLabel_ = n;
    },
    value(n) {
      console.log("ShortText.watch.value " + n);
      this.value_ = n;
    },
    maxlength(n) {
      console.log("ShortText.watch.maxlength " + n);
      this.maxlength_ = n;
    },
    disabled(n) {
      console.log("ShortText.watch.disabled " + n);
      this.disabled_ = n;
    }
  },
  data() {
    return {
      name: "ShortText",
      type: "input",
      required_: this.required,
      label_: this.label,
      showLabel_: this.showLabel,
      value_: this.value,
      maxlength_: this.maxlength,
      disabled_: this.disabled,
      error: {
        has: false,
        message: ""
      }
    };
  },
  methods: {
    input() {
      console.log("ShortText.methods.input");
      this.$emit("input", this.$refs.rInput.value);
    },
    clearError() {
      console.log("ShortText.methods.clearError");
      this.error = { has: false, message: "" };
    },
    validate() {
      console.log("ShortText.methods.validate");
      this.clearError();
      const value = this.$refs.rInput.value;
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
