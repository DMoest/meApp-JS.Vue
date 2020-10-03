<template>
  <div class="site_content">
    <div v-html="aboutMe"></div>
  </div>
</template>

<script>
import markdown from "../assets/markdown/me.md";

export default {
  name: "me",
  data() {
    return {
      title: "En sida om mig",
      aboutMe: markdown
    };
  }
};
</script>
