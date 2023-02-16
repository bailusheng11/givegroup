<template>
  <div class="app">
    <my-tabbar
      :isWhite="isWhite"
      :tabbarHeight="tabbarHeight"
      :bgColor="bgColor"
      :tbColor="tbColor"
      :boxShadow="boxShadow"
    ></my-tabbar>
    <router-view />
  </div>
</template>
<script>
import myTabbar from "./components/myTabbar.vue";

export default {
  components: { myTabbar },
  data() {
    return {
      tabbarHeight: 130,
      isWhite: false,
      bgColor: " ",
      tbColor: "#fff",
      boxShadow: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll() {
      if (window.scrollY < 80 || window.scrollY === 80) {
        this.tabbarHeight = 120;
        this.isWhite = false;
        this.bgColor = "rgba(0,0,0,0)";
        this.tbColor = "#fff";
        this.boxShadow = "";
      } else if (window.scrollY > 80) {
        this.tabbarHeight = 90;
        this.isWhite = true;
        this.bgColor = "#fff";
        this.tbColor = "#000";
        this.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
      }
    },
  },
};
</script>
<style scoped>
.app {
  padding-top: 500px;
}
</style>
