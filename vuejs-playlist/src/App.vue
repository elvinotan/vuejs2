<template>
  <div>
    <e-short-text :label="uiname.label" required v-model="name"></e-short-text>
    {{name}}
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
        label: "Input Name : "
      }
    };
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
]