<template>
  <div id="app"><StyledTyler color="papayawhip" /></div>
</template>

<script>
import StyledTyler from "./components/StyledTyler";

export default {
  name: "App",
  components: {
    StyledTyler
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
