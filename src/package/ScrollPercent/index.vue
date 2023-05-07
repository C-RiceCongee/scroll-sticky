<template>
  <div
    :style="Object.assign(containerStyle, { position: 'relative' })"
    class="container"
    ref="container"
  >
    <div class="stickyContainer" :style="{ top: stickyOffset + 'px' }">
      <slot name="viewElse" class="viewElse" :percent="percent"></slot>
      <canvas class="stickyCanvas" ref="cav"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: "scroll-percent",
  data() {
    return {
      percent: 0,
    };
  },
  props: {
    containerStyle: {
      type: Object,
      default() {
        return {
          height: "5000px",
        };
      },
    },
    stickyOffset: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getContext() {
      const cavRef = this.$refs.cav;
      return cavRef.getContext("2d");
    },
    initCanvas() {
      const cavRef = this.$refs.cav;
      if (!cavRef) return;
      cavRef.width = window.innerWidth;
      cavRef.height = window.innerHeight;
      this.$emit("watchPercent");
    },
    scrollHandler() {
      const container = this.$refs.container;
      const cav = this.$refs.cav;
      const cavHeight = cav.offsetHeight;
      const containerHeight = container.offsetHeight; // default 5000
      const hasScrollTop =
        container.getBoundingClientRect().top - this.stickyOffset; // sticky container start to out !！
      const start = hasScrollTop < 0;
      const end = -hasScrollTop + cavHeight >= containerHeight;

      const percent = (-hasScrollTop ) / (containerHeight-cavHeight)
      if (start && !end) {
        this.$emit("watchPercent", percent);
        this.percent = percent;
      }
    },
    resizeHandler() {
      this.initCanvas();
      this.scrollHandler();
    },
  },
  mounted() {
    this.initCanvas();
    document.addEventListener("scroll", this.scrollHandler);
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
}

.stickyContainer {
  position: sticky;
}
</style>
