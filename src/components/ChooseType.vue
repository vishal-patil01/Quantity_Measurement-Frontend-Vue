<template>
  <div class="units-container">
    <div class="selection-container">
      <p>{{msg}}</p>
      <div class="units">
        <md-content
          v-on:click="selectUnit('length','#0ec098','#edfdf9')"
          id="length"
          class="md-elevation-1"
        >
          <img src="../assets/scale.svg" />
          <p>Length</p>
        </md-content>
        <md-content
          v-on:click="selectUnit('temperature','#fd5160','#ffeef0')"
          id="temperature"
          class="md-elevation-2"
        >
          <img src="../assets/hot.svg" />
          <p>Temperature</p>
        </md-content>
        <md-content
          v-on:click="selectUnit('volume','#7224ff','#e8ddff')"
          id="volume"
          class="md-elevation-3"
        >
          <img src="../assets/beaker.svg" />
          <p>Volume</p>
        </md-content>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseType",
  props: {
    msg: String,
  },
  data: () => ({
    prevSelection: "",
    selected: "length",
  }),
  methods: {
    selectUnit: function (className, primaryColor, secondaryColor) {
      var cssproperty=document.getElementById(className).style;
      if (this.prevSelection.length != 0) {
        document.getElementById(this.prevSelection).setAttribute("style", "filter:grayscale()");
      }
      cssproperty.filter = "none";
      cssproperty.border ="1px solid " + primaryColor;
      cssproperty.color = primaryColor;
      cssproperty.backgroundColor = secondaryColor;
      this.prevSelection = className;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.units-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.selection-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
}

.units {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.md-content {
  width: 226px;
  height: 190px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 7px;
  filter: grayscale();
}

.md-content:nth-child(1):hover {
  background-color: #edfdf9;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0ec098;
  color: #0ec098;
  filter: none !important;
}
.md-content:nth-child(2):hover {
  background-color: #ffeef0;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #fd5160;
  color: #fd5160;
  filter: none !important;
}
.md-content:nth-child(3):hover {
  background-color: #e8ddff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #7224ff;
  color: #7224ff;
  filter: none !important;
}

p {
  margin: 0 24px;
  font: normal normal bold 20px/24px Montserrat;
  text-transform: capitalize;
}

.md-content > p {
  margin-top: 24px;
}
</style>
