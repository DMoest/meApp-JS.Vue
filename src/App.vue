<template>
  <div id="app">
    <siteHeader></siteHeader>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import siteHeader from "@/components/theHeader";

export default {
  name: "app",
  components: { siteHeader },
  data() {
    return {
      rubrik: "Daniel Andersson"
    };
  }
};
</script>

<style lang="scss">
@import "./assets/style/style.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
