<template>
  <div
    class="tabbar animate__animated animate__fadeInDown"
    :style="{ height: tabbarHeight + 'px', color: tbColor, backgroundColor: bgColor, boxShadow: boxShadow }"
  >
    <div>
      <a href="/">
        <img v-if="isWhite" src="../assets/img/logo.png" alt="" />
        <img v-else src="../assets/img/fff_logo.png" alt="" />
      </a>
    </div>
    <div @click="homeclick">网站首页</div>
    <div class="success" @click="aboutclick">
      <div class="top">成功案例</div>
      <div class="bottom">
        <div class="bottom-content">
          <div>成功案例1</div>
          <div>成功案例2</div>
          <div>成功案例3</div>
        </div>
      </div>
    </div>
    <div>关于我们</div>
    <div>品牌智库</div>
    <div>服务项目</div>
    <div>联系我们</div>
    <div class="contact">
      <div class="icon">电话</div>
      <div>
        <div>400-9158-965</div>
        <div>24小时客服热线</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
    tabbarHeight: {
      type: Number,
      default: 130,
    },
    tbColor: {
      type: String,
      default: "#fff",
    },
    bgColor: {
      type: String,
      default: " ",
    },
    boxShadow: {
      type: String,
      default: " ",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    homeclick() {
      this.$router.replace("/");
    },
    aboutclick() {
      // this.$router.replace("/about");
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  transition: height 0.3s ease-in-out;
  .success {
    position: relative;
    width: 100px;
    height: 130px;
    text-align: center;
    line-height: 130px;
    /* background-color: #c29b9b; */
    .top {
      width: 100%;
      height: 100%;
    }
    .bottom {
      display: none;
      width: 500px;
      height: 100px;
      background-color: #600;
      position: absolute;
      z-index: -199;
      top: 130px;
      left: 50%;
      transform: translateX(-50%);
      .bottom-content {
        display: flex;
      }
    }
    &:hover,
    .bottom {
      .bottom {
        display: block;
      }
    }
  }

  .success:hover {
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin-right: 20px;
    }
  }
}
</style>
