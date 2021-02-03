<template>
  <div id="app">
    <MdEditor v-if="showMdEditor" :text="mdText" :animation="true"></MdEditor>
    <PrismEditor
      :text="styleCode"
      :animation="true"
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
import md from "./md";

export default {
  name: "App",
  data() {
    return {
      styleCode: style,
      mdText: md,
      showMdEditor: false,
    };
  },
  components: {
    PrismEditor,
    MdEditor,
    Footer,
  },
  methods: {
    prismEditorAfterRender() {
      this.showMdEditor = true;
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
a {
  color: rgb(42, 161, 152);
  margin-left: 0.5em;
  /* padding-left: .5em; */
}
</style>
