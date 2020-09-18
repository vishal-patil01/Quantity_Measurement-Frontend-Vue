<template>
  <div class="conversion-container">
    <div class="column">
      <div class="input-container">
        <div class="column">
          <div class="md-layout-item md-medium-size-33 md-small-size-50">From</div>
          <md-content>
            <md-field>
              <label>Initial Value</label>
              <md-input v-model="initial1"></md-input>
            </md-field>
            <md-autocomplete v-model="selectedFirstUnit" :md-options="subUnits">
              <label>SubUnits</label>
            </md-autocomplete>
          </md-content>
        </div>
        <div class="column">
          <div class="md-layout-item md-medium-size-33 md-small-size-50">To</div>
          <md-content>
            <md-field>
              <label>Initial Value</label>
              <md-input v-model="initial2"></md-input>
            </md-field>
            <md-autocomplete v-model="selectedSecondUnit" :md-options="subUnits">
              <label>SubUnits</label>
            </md-autocomplete>
          </md-content>
        </div>
      </div>
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
<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables.scss";
@import "~vue-material/src/theme/engine";

.md-layout-item {
  margin: 0 27px !important;
  transition: 0.3s $md-transition-stand-timing;
  text-align: left;
  font: normal normal medium 18px/22px Montserrat;
  &:after {
    display: block;
  }
}
.column {
  display: flex;
  flex-direction: column;
  max-width: -webkit-fill-available;
}
.conversion-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.input-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.md-content {
  width: fit-content;
  height: 170px;
  margin: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 12px 24px;
  max-width: -webkit-fill-available;
}
.md-field {
  margin: 0;
  padding-top: 25px;
  min-height: initial;
}
.md-input {
  font-size: 28px !important;
  font-weight: bold;
  max-width: -webkit-fill-available;
}
</style>
