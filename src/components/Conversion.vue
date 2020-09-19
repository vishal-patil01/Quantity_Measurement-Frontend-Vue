<template>
  <div class="conversion-container">
    <div class="column">
      <div class="input-container">
        <div class="column">
          <div class="md-layout-item md-medium-size-33 md-small-size-50">From</div>
          <div class="conversion-box">
            <input class="textbox" type="text" v-model="firstTextValue" />
            <select class="selectbox" v-model="selectedFirstUnit" :md-options="subUnits">
              <option
                class="option-box"
                v-for="subUnit in subUnits"
                v-bind:key="subUnit"
              >{{subUnit}}</option>
            </select>
          </div>
        </div>
        <div class="column">
          <div class="md-layout-item md-medium-size-33 md-small-size-50">To</div>
          <div class="conversion-box">
            <input class="textbox" type="text" v-model="secondTextValue" />
            <select class="selectbox" v-model="selectedSecondUnit" :md-options="subUnits">
              <option
                class="option-box"
                v-for="subUnit in subUnits"
                v-bind:key="subUnit"
              >{{subUnit}}</option>
            </select>
          </div>
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
    subUnits: Array,
  },
  data: () => ({
    firstTextValue: "1",
    secondTextValue: "1000",
    selectedFirstUnit: null,
    selectedSecondUnit: null,
  }),
  watch: {
    subUnits: function () {
      this.selectedFirstUnit = this.subUnits[0];
      this.selectedSecondUnit = this.subUnits[1];
    },
  },
  mounted() {
    this.selectedFirstUnit = this.subUnits[0];
    this.selectedSecondUnit = this.subUnits[1];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "../styles/style.scss";
.column,
.md-content {
  flex-direction: column;
}

.conversion-containe,
.md-content,
.input-container {
  @include flex-box;
}

.column,
.md-input,
.md-content {
  max-width: -webkit-fill-available;
}

.conversion-container {
  padding: 16px;
}

.md-content {
  height       : 170px;
  margin       : 8px 24px;
  border-radius: 3px;
  padding      : 12px 24px;
}

.md-field {
  margin     : 0;
  padding-top: 25px;
  min-height : initial;
}

.md-input {
  font-size  : 28px !important;
  font-weight: bold;
}

.textbox {
  height       : 62px;
  max-width    : 350px;
  background   : #ffffff 0% 0% no-repeat padding-box;
  box-shadow   : 0px 3px 6px #00000029;
  border       : 1px solid #e5dafc;
  border-radius: 1px;
  opacity      : 1;
  padding      : 18px 27px;

  text-align    : left;
  font          : normal normal bold 31px/40px Roboto;
  letter-spacing: 0px;
  color         : #000000;
}

.selectbox {
  max-width    : 350px;
  height       : 48px;
  border       : 1px solid #e7dcfe;
  border-radius: 3px;
  padding      : 15px 27px;

  font          : normal normal normal 15px/19px Montserrat;
  text-transform: uppercase;

  -webkit-appearance: none;
  -moz-appearance   : none;
  background        : url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI3cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwIDciIHdpZHRoPSIxMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlLz48ZGVzYy8+PGRlZnMvPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGZpbGw9IiMwMDAwMDAiIGlkPSJDb3JlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDY5LjAwMDAwMCwgLTkuMDAwMDAwKSI+PGcgaWQ9ImFycm93LWRyb3AtZG93biIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY5LjAwMDAwMCwgOS41MDAwMDApIj48cGF0aCBkPSJNMCwwIEw1LDUgTDEwLDAgTDAsMCBaIiBpZD0iU2hhcGUiLz48L2c+PC9nPjwvZz48L3N2Zz4=") white no-repeat calc(100% - 20px) !important;
  /* Better placement regardless of input width */
}

.conversion-box {
  display       : flex;
  flex-direction: column;
  margin        : 5px 25px;
}
</style>
