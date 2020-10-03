<template>
  <div :class="this.class" :key="this.id">
    <h1 class="site_header-title">Daniel Andersson</h1>
    <img
      :key="this.id"
      :alt="this.alt"
      class="site_header-image"
      :src="this.image"
    />
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/theNavigation";

export default {
  name: "siteHeader",
  components: { Navbar },
  data() {
    return {
      id: "siteHeader",
      class: "site_header",
      alt: "bla bla bla",
      image: require("@/assets/images/cover.jpg")
    };
  },
  computed: {
    classIMG() {
      return this.class + "-image";
    }
  }
};
</script>

<style lang="scss"></style>
