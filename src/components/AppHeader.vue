<template>
  <div class="header">
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
<style scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
  justify-content: center;
}
.md-title{
  font: normal normal normal x-large Montserrat;
}
.md-toolbar {
  padding: 5px;
  justify-content: center;
  text-transform: capitalize;
}
</style>
