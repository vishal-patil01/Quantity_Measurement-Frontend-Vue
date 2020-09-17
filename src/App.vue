<template>
  <div id="app">
    <AppHeader msg="Welcome to Quantity Measurement" />
    <ChooseType msg="Choose Type" />
    <conversion />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ChooseType from "./components/ChooseType.vue";
import Conversion from "./components/Conversion.vue";

export default {
  name: "App",
  components: { AppHeader, ChooseType, Conversion },
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
