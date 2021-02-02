<template>
  <div>
    <div class="menu" v-html="menu"></div>
    <div class="mdEditor" ref="mdEditor">
      <pre class="md" v-html="mdText"></pre>
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
      md: `[简书](http://jianshu.com)
[简书](http://jianshu.com)`,
    };
  },
  computed: {
    menu() {
      return marked(this.md);
    },
    mdText() {
      return "开始编写markdown文档......\r" + this.md;
    },
  },
  created() {
      
  },
};
</script>
<style scoped>

</style>