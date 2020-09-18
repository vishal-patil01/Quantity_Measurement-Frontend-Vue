<template>
  <div id="app">
    <AppHeader msg="Welcome to Quantity Measurement" />
    <ChooseType msg="Choose Type" />
    <conversion />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import ChooseType from "./ChooseType.vue";
import Conversion from "./Conversion.vue";

export default {
  name: "Home",
  components: { AppHeader, ChooseType, Conversion },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

