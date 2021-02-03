<template>
  <div>
    <div class="menu" v-html="menu"></div>
    <div class="mdEditor" ref="mdEditor">
      <pre class="md" v-text="mdText"></pre>
    </div>
  </div>
</template>
<script>
import marked from "marked";
import each from "@/util";
export default {
  props: {
    text: {
      default: [],
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
      mdText: "",
      md: "",
    };
  },
  computed: {
    menu() {
      return marked(this.md);
    },
    textJoin() {
      return this.text.join("");
    },
  },
  created() {
    this.init().then(() => {
      this.$emit("afterRender");
    });
  },
  methods: {
    async init() {
      if (this.animation) await this.showMd();
      else {
        await this.writeMdText(this.textJoin);
        await this.writeMd(this.textJoin);
        await this.toBottom();
      }
    },
    showMd() {
      let index = 1;
      let me = this;
      return new Promise((resolve) => {
        let renderMd = async function () {
          if (index > me.textJoin.length) {
            resolve();
            return;
          }
          each(
            me.text,
            index,
            (item1) => {
              me.writeMd(item1);
            },
            (item2) => {
              me.writeMdText(item2);
            }
          );
          index++;
          me.$nextTick(() => {
            me.toBottom();
          });
          setTimeout(renderMd, me.interval);
        }.bind(this);
        renderMd();
      });
    },
    writeMdText(mdText) {
      this.mdText = mdText;
    },
    writeMd(md) {
      this.md = md;
    },
    toBottom() {
      if (this.$refs.mdEditor) this.$refs.mdEditor.scrollTop = 10000;
    },
  },
};
</script>
<style scoped>
</style>