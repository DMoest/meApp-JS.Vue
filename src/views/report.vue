<template>
  <div>
    <div class="site_content-report">
      <div class="multinavigation">
        <span
          class="multinavigation_button"
          :class="{ activeReport: selectedReport === theReport }"
          v-for="(theReport, index) in myReports"
          :key="index"
          @click="selectedReport = theReport"
          >{{ theReport }}
        </span>
      </div>
      <div>

        <div class="site_content">
          <div v-html="require(`@/assets/markdown/${selectedReport}.md`)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "myReports",
  props: {
    theReport: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      myReports: [
        "kmom01",
        "kmom02",
        "kmom03",
        "kmom04",
        "kmom05",
        "kmom06",
        "kmom07"
      ],
      selectedReport: "kmom01",
      markdown: null
    };
  }
};
</script>

<style scoped></style>
