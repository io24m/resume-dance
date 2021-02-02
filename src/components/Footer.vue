<template>
  <div class="footer">
    <a :href="github" target="_blank">github</a>
    <a :href="email" target="_blank">email</a>
  </div>
</template>
<script>
export default {
  dat() {
    return {
      github: "'https://github.com/io24m'",
      email: "'mailto:io24m@outlook.com'",
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