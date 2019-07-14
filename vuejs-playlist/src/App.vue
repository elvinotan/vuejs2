<template>
  <div>
    <e-short-text ref="txtName" :label="uiname.label" required v-model="name"></e-short-text>
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
      uiname: {
        label: "Name"
      }
    };
  },
  methods: {
    save() {
      this.$refs.txtName.validate();
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