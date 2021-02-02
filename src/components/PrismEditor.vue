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
      default: 20,
    },
    animation: {
      type: Boolean,
      default: true,
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
  async created() {
    await this.init();
    this.$emit("afterRender");
  },
  methods: {
    async init() {
      if (this.animation) await this.showStyle(1);
      else {
        await this.write(this.text);
        this.toBottom();
      }
    },
    async showStyle(index) {
      setTimeout(() => {
        if (index > this.text.length) {
          return;
        }
        const v = this.text.substring(0, index);
        this.write(v);
        index++;
        this.$nextTick(() => {
          this.toBottom();
        });
        this.showStyle(index);
      }, this.interval);
    },
    async write(v) {
      if (!v) {
        return;
      }
      this.code = v;
    },
    async toBottom() {
      this.$refs.prismEditor.scrollTop = 10000;
    },
  },
};
</script> 