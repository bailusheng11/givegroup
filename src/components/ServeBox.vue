<template>
  <div class="serve-box">
    <img src="../assets/img/tuimg1.gif" alt="" />
    <div class="title">网站建设</div>
    <div class="serve-list">
      <div>> 品牌响应式网站建设</div>
      <div>> 企业官网网站建设</div>
      <div>> 电商平台网站建设</div>
      <div>> 活动平台网站建设</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.serve-box {
  margin-top: 50px;
  text-align: center;
  img {
    margin: 0 0 24px;
  }
  .title {
    position: relative;
    font-size: 26px;
    margin: 0 0 28px;
    padding: 0 0 24px;
  }
  .title:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 0;
    width: 32px;
    height: 1px;
    background-color: #ed263b;
    margin-left: -16px;
  }
  .serve-list {
    padding: 0 83px;
    text-align: left;
    line-height: 200%;
    color: #666;
  }
}
</style>
