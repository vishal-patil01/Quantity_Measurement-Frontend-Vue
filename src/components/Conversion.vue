<template>
  <div class="conversion-container">
    <div class="input-container">
      <md-content class="md-elevation-1">
        <md-field>
          <label>Initial Value</label>
          <md-input v-model="initial1"></md-input>
        </md-field>
        <md-autocomplete v-model="selectedFirstUnit" :md-options="subUnits">
          <label>Country</label>
        </md-autocomplete>
      </md-content>
      <md-content class="md-elevation-2">
        <md-field>
          <label>Initial Value</label>
          <md-input v-model="initial2"></md-input>
        </md-field>
        <md-autocomplete v-model="selectedSecondUnit" :md-options="subUnits">
          <label>Country</label>
        </md-autocomplete>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conversion",
  props: {
    msg: String,
  },
  data: () => ({
    initial1: "1",
    initial2: "1000",
    subUnits: ["METER", "CENTIMETER", "MILIMETER"],
    selectedFirstUnit: null,
    selectedSecondUnit: null,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conversion-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
}
.input-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.md-content {
  width: 345px;
  height: 113px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 12px 24px;
}
.md-field {
  margin: 0;
  padding-top: 25px;
  min-height: initial;
}
.md-input {
  font-size: 28px !important;
  font-weight: bold;
}
</style>
