<template>
  <div id="app">
    <AppHeader msg="Welcome to Quantity Measurement" />
    <ChooseType msg="Choose Type" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ChooseType from "./components/ChooseType.vue";

export default {
  name: "App",
  components: { AppHeader, ChooseType },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: -webkit-fill-available;
}
</style>
