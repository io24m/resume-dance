<template>
  <div class="footer">
    <a href="https://github.com/io24m" target="_blank" :rel="rel">github</a>
    <a href="mailto:io24m@outlook.com" target="_blank" :rel="rel">email</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rel: "noopener noreferrer",
    };
  },
};
</script>
<style scoped>
.footer {
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
}
.footer a {
  color: rgb(42, 161, 152);
  margin-left: 0.5em;
  /* padding-left: .5em; */
}
</style>