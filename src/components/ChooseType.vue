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
          <img v-bind:src="require(`../assets/${unit.image}`)" />
          <p>{{mainUnits[index]}}</p>
        </md-content>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import QuantityMeasurementService from "../services/QuantityMeasurementService";

export default {
  name: "ChooseType",
  props: {
    msg: String,
  },

  data: () => ({
    mainUnits: [],
    prevSelection: "",
    selected: String,
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
    fetchMainUnits: async function () {
      await QuantityMeasurementService
        .getMainUnits()
        .then((response) => {
          this.mainUnits = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectUnit: function (selectedId, primaryColor, secondaryColor) {
      var cssproperty = document.getElementById(selectedId).style;
      if (this.prevSelection.length != 0) {
        document.getElementById(this.prevSelection).setAttribute("style", "");
      }
      cssproperty.filter = "none";
      cssproperty.border = "1px solid " + primaryColor;
      cssproperty.color = primaryColor;
      cssproperty.backgroundColor = secondaryColor;
      this.prevSelection = selectedId;
      bus.$emit("changedMainUnit", selectedId);
    },
  },
  async created() {
    await this.fetchMainUnits();
    this.selectUnit(
      this.mainUnits[0],
      this.mainUnitsProperties[0].primaryColor,
      this.mainUnitsProperties[0].secondaryColor
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "../styles/style.scss";
.units-container,
.units,
.md-content {
  @include flex-box;
}

.selection-container,
.md-content {
  flex-direction: column;
}

.units-container {
  padding: 16px;
  margin-top: 4vw;
}

.selection-container {
  text-align: left;
}

.md-content {
  width: 226px;
  height: 190px;
  margin: 24px;
  border-radius: 7px;
  filter: grayscale(100%);
}

.md-content:hover {
  filter: none !important;
  box-shadow: 0px 3px 6px #00000029;
}

.md-content:nth-child(1):hover {
  background-color: #edfdf9;
  border: 1px solid #0ec098;
  color: #0ec098;
}

.md-content:nth-child(2):hover {
  background-color: #ffeef0;
  border: 1px solid #fd5160;
  color: #fd5160;
}

.md-content:nth-child(3):hover {
  background-color: #e8ddff;
  border: 1px solid #7224ff;
  color: #7224ff;
}

p {
  margin: 0 32px;
  font: normal normal bold 20px/24px Montserrat;
  text-transform: capitalize;
}

.md-content > p {
  margin-top: 24px;
}
</style>
