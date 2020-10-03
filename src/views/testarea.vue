<template>
  <div class="site_content">
    <div v-html="text"></div>
  </div>
</template>

<script>
import markdown from "../assets/markdown/testarea.md";

export default {
  name: "me",
  data() {
    return {
      title: "Testarea",
      text: markdown
    };
  }
};
</script>
