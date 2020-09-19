<template>
  <div>
    <AppHeader msg="Welcome to Quantity Measurement" />
    <ChooseType
      msg="Choose Type"
      v-bind:mainUnits="this.mainUnits"
      v-bind:selected="this.selected"
      v-on:selectUnit="selectUnit($event)"
    />
    <Conversion v-bind:subUnits="this.selectedUnit" />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import ChooseType from "./ChooseType.vue";
import Conversion from "./Conversion.vue";

const length = ["INCH", "CENTIMETER", "YARD", "FEET"];
const temperature = ["FAHRENHEIT", "CELSIUS"];
const volume = ["LITRE", "MILLILITER", "GALLON"];

export default {
  name: "Home",
  components: { AppHeader, ChooseType, Conversion },

  data: () => ({
    mainUnits: ["length", "temperature", "volume"],
    selectedUnit: length,
    selected: "length",
  }),

  methods: {
    selectUnit: function (unitName) {
      switch (unitName) {
        case "length":
          this.selectedUnit = length;
          break;
        case "temperature":
          this.selectedUnit = temperature;
          break;
        case "volume":
          this.selectedUnit = volume;
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

