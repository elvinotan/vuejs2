<template>
  <div>
    <e-short-text
      ref="txtName"
      :label="uiname.label"
      :showLabel="show"
      :required="required"
      :disabled="disabled"
      v-model="name"
      col="1,2,3,4"
    ></e-short-text>
    {{name}}
    <button @click="save">Save</button>
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import ShortText from "./components/custom/ShortText";
export default {
  components: {
    "app-menu": Menu,
    "e-short-text": ShortText
  },
  data() {
    return {
      name: "Constantine Davin Ethan",
      show: true,
      disabled: false,
      required: false,
      uiname: {
        label: "Name"
      }
    };
  },
  methods: {
    save() {
      //this.$refs.txtName.validate();
      this.disabled = !this.disabled;
      this.required = !this.required;
      this.uiname.label = this.uiname.label + " ayo ";
      // this.disabled = !this.disabled;
    }
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
]