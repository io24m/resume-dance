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
      default: false,
    },
  },
  data() {
    return {
      mdText:"",
    };
  },
  computed: {
    menu() {
      return marked(this.mdText);
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
        await this.write(this.text);
        await this.toBottom();
      }
    },
    showMd() {
      let index = 1;
      let me = this;
      return new Promise((resolve) => {
        let renderMd = async function () {
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
          setTimeout(renderMd, me.interval);
        }.bind(this);
        renderMd();
      });
    },
    async write(v) {
      if (!v) {
        return;
      }
      this.mdText = v;
    },
    async toBottom() {
      this.$refs.mdEditor.scrollTop = 10000;
    },
  },
};
</script>
<style scoped>
</style>