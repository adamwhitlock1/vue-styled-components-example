<template>
  <div class="hello">
    <p>
      Below is a styled button component. You may pass a valid 'color' prop in
      for text color, 'br' prop for border radius, 'bgc' prop for background
      color, and 'pad' prop for padding.
    </p>
    <styled-button color="orange" br="10px" pad="20px" bgc="brown"
      >I am a styled button.</styled-button
    >

    <hr />

    <styled-button
      :color="dynColor"
      :br="dynBr + 'px'"
      :pad="dynPad + 'px'"
      :bgc="dynBgc"
      >I am a dynamically styled button. Change the fields below to change
      me!</styled-button
    >

    <br /><span>Text Color </span><input type="color" v-model="dynColor" />
    <br /><span>Background Color </span><input type="color" v-model="dynBgc" />
    <br /><span>Padding (will be set in px) </span
    ><input type="number" v-model="dynPad" /> <br /><span
      >Border Radius (will be set in px) </span
    ><input type="number" v-model="dynBr" />
  </div>
</template>

<script>
import { StyledButton } from "../styled-components/StyledButton.js";

export default {
  name: "StyledTyler",
  components: {
    "styled-button": StyledButton
  },
  data() {
    return {
      dynColor: "#ffffff",
      dynBr: 10,
      dynPad: 15,
      dynBgc: "#4ABB00"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 50%;
  text-align: center;
  margin-top: 20px;
}
</style>
