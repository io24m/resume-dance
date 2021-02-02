<template>
  <div id="app">
    <MdEditor></MdEditor>
    <PrismEditor
      :text="styleCode"
      v-on:afterRender="prismEditorAfterRender"
    ></PrismEditor>
    <Footer></Footer>
  </div>
</template>

<script>
import PrismEditor from "./components/PrismEditor.vue";
import MdEditor from "./components/MdEditor.vue";
import Footer from "./components/Footer.vue";
import style from "./style";

export default {
  name: "App",
  data() {
    return {
      styleCode: style,
    };
  },
  components: {
    PrismEditor,
    MdEditor,
    Footer,
  },
  methods: {
    prismEditorAfterRender() {
      console.log("prismEditorAfterRender");
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #a3a3a3;
  margin-top: 5px;
} */

html {
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
</style>
