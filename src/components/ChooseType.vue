<template>
  <div class="units-container">
    <div class="selection-container">
      <p>{{msg}}</p>
      <div class="units">
        <md-content
          v-for="(unit,index) in mainUnitsProperties"
          :key="mainUnits[index]"
          v-on:click="selectUnit(mainUnits[index],unit.primaryColor,unit.secondaryColor)"
          :id="mainUnits[index]"
        >
          <img :src="require(`../assets/${unit.image}`)" />
          <p>{{mainUnits[index]}}</p>
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
    mainUnits: ["length", "temperature", "volume"],
    mainUnitsProperties: [
      {
        image: "scale.svg",
        primaryColor: "#0ec098",
        secondaryColor: "#edfdf9",
      },
      {
        image: "hot.svg",
        primaryColor: "#fd5160",
        secondaryColor: "#ffeef0",
      },
      {
        image: "beaker.svg",
        primaryColor: "#7224ff",
        secondaryColor: "#e8ddff",
      },
    ],
  }),
  methods: {
    selectUnit: function (className, primaryColor, secondaryColor) {
      var cssproperty = document.getElementById(className).style;
      console.log(this.selected);
      if (this.prevSelection.length != 0) {
        document.getElementById(this.prevSelection).setAttribute("style", "");
      }
      cssproperty.filter = "none";
      cssproperty.border = "1px solid " + primaryColor;
      cssproperty.color = primaryColor;
      cssproperty.backgroundColor = secondaryColor;
      this.prevSelection = className;
    },
  },
  mounted() {
    this.selectUnit(
      this.selected,
      this.mainUnitsProperties[0].primaryColor,
      this.mainUnitsProperties[0].secondaryColor
    );
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
@media (max-width: 982px) {
  .units {
    flex-direction: column;
    align-items: center;
  }
}
</style>
