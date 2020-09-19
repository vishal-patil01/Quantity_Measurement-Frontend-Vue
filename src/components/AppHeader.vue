<template>
  <div class="header">
    <div class="app-navigation">
      <div class="app-navigation-item">
        <span class="app-navigation-title">Quanment</span>
      </div>
      <div class="app-navigation-item">
        <span class="app-navigation-history">History</span>
      </div>
    </div>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{msg}}</span>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "../styles/style.scss";
.app-navigation,
.app-navigation-item {
  @include flex-box;
}

.app-navigation {
  padding        : 16px 16px;
  justify-content: space-evenly;
}

.app-navigation-item {
  width: 50%;
}

.app-navigation-title {
  font: normal normal 600 21px/31px Poppins;
}

.app-navigation-history {
  font: normal normal normal 14px/16px Poppins;
}

.md-app {
  max-height     : 600px;
  border         : 1px solid rgba(#000, 0.12);
  justify-content: center;
}

.md-title {
  font: normal normal normal calc(0.75em + 2vmin) Montserrat;
}

.md-toolbar {
  padding        : 5px;
  justify-content: center;
  text-transform : capitalize;
}
</style>
