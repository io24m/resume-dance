<template>
  <div class="prismEditor" ref="prismEditor" style="overflow: hidden">
    <div style="display: none" v-html="divStyle"></div>
    <pre v-html="highlightCode"></pre>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    interval: {
      type: Number,
      default: 40,
    },
    animation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      code: "",
    };
  },
  computed: {
    divStyle() {
      return `<style>${this.code}</style>`;
    },
    highlightCode() {
      return Prism.highlight(this.code, Prism.languages.css);
    },
  },
  created() {
    this.init().then(() => {
      this.$emit("afterRender");
    });
  },
  methods: {
    async init() {
      if (this.animation) await this.showStyle();
      else {
        await this.write(this.text);
        await this.toBottom();
      }
    },
    showStyle() {
      let index = 1;
      let me = this;
      return new Promise((resolve) => {
        let renderStyle = async function () {
          if (index > me.text.length) {
            resolve();
            return;
          }
          const v = me.text.substring(0, index);
          me.write(v);
          index++;
          me.$nextTick(() => {
            me.toBottom();
          });
          setTimeout(renderStyle, me.interval);
        }.bind(this);
        renderStyle();
      });
    },
    async write(v) {
      if (!v) {
        return;
      }
      this.code = v;
    },
    toBottom() {
      if (this.$refs.prismEditor) this.$refs.prismEditor.scrollTop = 10000;
    },
  },
};
</script> 