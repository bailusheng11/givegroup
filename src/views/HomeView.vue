<template>
  <div class="homepage">
    <div v-if="isChange" class="img-container">
      <img src="../assets/img/index01.jpg" alt="" />
    </div>
    <div v-else class="video-container">
      <video :style="fixStyle" autoplay loop muted class="fillWidth">
        <source src="../assets/video/video.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- ----------------------------------------------------- -->
    <div v-show="isAside" class="aside animate__animated animate__slideInRight">
      <div class="business">业务咨询</div>
      <div>400</div>
      <span class="phone">
        <span class="left">400电话</span>
        <span class="right">12314562</span>
      </span>
      <div class="online">在线咨询</div>
      <div class="wx">微信咨询</div>
      <div @click="totop" class="to-top">^</div>
    </div>
    <!-- ----------------------------------------------------- -->
    <div class="index-main">
      <div class="index-page01">
        <div class="top" :class="isShow1 ? 'animate__animated animate__fadeInUp' : ''">
          15年品牌服务经验 <br />互联网顶级定制全战略解决方案服务商
        </div>
        <div class="bottom" :class="isShow1 ? 'animate__animated animate__fadeInUp' : ''">
          2005年以来，我们笃信创意与实效的双韧剑，追求创意设计、实用与营销的完美平衡点。通过商业策略、技术实现、<br />
          情感连结融入互联网设计来创造具有活力的品牌视觉及营销体验，结合线上资源来实现有效的价值传播，提升客户对品牌的价值信任，创造有价值的品牌营销体验。
          我们的核心技术团队均来自于国内知名品牌设计公司及中国互联网巨头，经过十余年的积累与沉淀，已完全形成一套集品牌创意及科学广告为一体的业务流程，为企业品牌互联网化提供全面的解决方案。
        </div>
      </div>
      <div class="index-page02">
        <div class="title" :class="isShow2 ? 'animate__animated animate__fadeInUp' : ''">案例展示 /</div>
        <div class="case-list">
          <template v-for="n in 3" :key="n">
            <div class="case-item" :class="isShow3 ? `animate__animated animate__fadeInUp animate__delay-${n}s` : ''">
              <div class="gif-box">
                <img src="../assets/img/hik.gif" alt="" />
              </div>
              <div class="info-box">
                <div>Website design</div>
                <div>杭州海康</div>
                <div>500强</div>
              </div>
            </div>
          </template>
          <template v-for="n in 3" :key="n">
            <div class="case-item" :class="isShow3 ? `animate__animated animate__fadeInUp animate__delay-${n}s` : ''">
              <div class="gif-box">
                <img src="../assets/img/hik.gif" alt="" />
              </div>
              <div class="info-box">
                <div>Website design</div>
                <div>杭州海康</div>
                <div>500强</div>
              </div>
            </div>
          </template>
          <template v-for="n in 3" :key="n">
            <div class="case-item" :class="isShow3 ? `animate__animated animate__fadeInUp animate__delay-${n}s` : ''">
              <div class="gif-box">
                <img src="../assets/img/hik.gif" alt="" />
              </div>
              <div class="info-box">
                <div>Website design</div>
                <div>杭州海康</div>
                <div>500强</div>
              </div>
            </div>
          </template>
          <template v-for="n in 3" :key="n">
            <div class="case-item" :class="isShow3 ? `animate__animated animate__fadeInUp animate__delay-${n}s` : ''">
              <div class="gif-box">
                <img src="../assets/img/hik.gif" alt="" />
              </div>
              <div class="info-box">
                <div>Website design</div>
                <div>杭州海康</div>
                <div>500强</div>
              </div>
            </div>
          </template>
          <div class="more">MORE</div>
        </div>
      </div>
      <div class="index-page03">
        <div class="title">核心服务 /</div>
        <div class="serve-list">
          <template v-for="(item, index) in 4" :key="index">
            <serve-box></serve-box>
          </template>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="tit">Core Advantage</div>
      <div class="list">
        <div class="item">
          <div class="title">品牌策略</div>
        </div>

        <div class="item">
          <div class="title">品牌设计</div>
        </div>

        <div class="item">
          <div class="title">品牌传播</div>
        </div>
      </div>
      <a href="/case" class="more">
        <span>MORE</span>
      </a>
    </div>
    <div class="index-page05">
      <div class="animate__animated animate__fadeInUp">
        <div class="index-page-header">
          <div class="title">品牌智库 /</div>
          <a href="/news" class="more">更多资讯</a>
        </div>
      </div>

      <div class="list">
        <div class="item">
          <div class="left">
            <div class="title">网站开发为什么越来越偏向于定制型？</div>
            <div class="content">
              我们做网站开发的目的是什么？是为人类提供更便捷、高效、增值的服务。随着科技的不断强大和互联网行业的不断攀升，小编大胆预测一下未来10-20年我们的生活将会...
            </div>
            <div class="tags">人工 · 智能 · 添加 · 网站 · 平台</div>
          </div>
          <div class="arrow">
            <img src="../assets/img/right.svg" style="display: block; width: 48px; height: 48px" />
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="title">国庆放假通知</div>
            <div class="content">国庆放假通知</div>
            <div class="tags">人工 · 智能 · 添加 · 网站 · 平台</div>
          </div>

          <div class="arrow"></div>
        </div>
        <div class="item">
          <div class="left">
            <div class="title">网站开发定制服务贵吗</div>
            <div class="content">
              在回答网站开发定制服务贵吗这个问题之前，建议您先了解一下所需要开发的网站属于什么行业，什么类型，还有功能需求是什么，因为这些因素都会影响到你想要开发定...
            </div>
            <div class="tags">人工 · 智能 · 添加 · 网站 · 平台</div>
          </div>

          <div class="arrow"></div>
        </div>
      </div>
    </div>
    <footer class="page-footer">
      <div class="container maxwidth">
        <div class="page-footer-box1">
          <a href="/" class="logo">
            <img
              src="https://oss.givegroup.cn/uploads/images/202205/983e7fb9790404da19c954c3c08dd36f.png"
              class="img"
              alt=""
            />
          </a>
          <nav class="nav">
            <a href="/case" class="item">成功案例</a> <a href="/about" class="item">关于我们</a>
            <a href="/news" class="item">品牌智库</a> <a href="/service" class="item">服务项目</a>
            <a href="/contact" class="item">联系我们</a>
          </nav>
        </div>
        <div class="page-footer-box2">
          <div class="item-l">
            <div class="item">
              <div class="wx">
                <div class="ewm">
                  <img
                    src="https://oss.givegroup.cn/uploads/images/202009/565bc9813cf1a3d9d437015dda289fe1.jpg"
                    class="img"
                    alt=""
                  />
                </div>
                <div class="text">微信公众号</div>
              </div>
            </div>
            <div class="item">
              <div class="phone-box">
                <div class="icon">
                  <i class="iconfont icon-tel"></i>
                </div>
                <div class="tit">商务咨询热线</div>
                <div class="tel">400-9158-965</div>
              </div>
            </div>
            <div class="item">
              <div class="email-box">
                <div class="icon">
                  <i class="iconfont icon-email"></i>
                </div>
                <div class="tit">公司邮箱</div>
                <div class="email">service@givegroup.cn</div>
              </div>
            </div>
          </div>
          <div class="item-r">
            <div class="tit">友情链接</div>
            <div class="list">
              <a href="http://www.yunyicd.com" target="_blank" class="item">App开发</a
              ><a href="https://www.givetech.cn/" target="_blank" class="item">杭州网站建设</a>
            </div>
            <div class="text">
              <p>我们很乐意倾听您的声音！</p>
              <p>即刻与我们取得联络，成为日后肩并肩合作的伙伴。</p>
            </div>
          </div>
        </div>
        <div class="page-footer-box3">
          <div class="hot">
            <p>热门搜索：网站建设,网站制作,高端网站建设<a href="https://www.givegroup.cn/sitemap.xml">XML</a></p>
          </div>
          <div class="clearfy">
            <p>www.givegroup.cn 版权所有</p>
            <p><a href="http://beian.miit.gov.cn" target="_blank">沪ICP备19005601号</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ServeBox from "../components/ServeBox.vue";

export default {
  name: "homVideo",
  components: { ServeBox },
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",
      isAside: false,
      isChange: false,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      n: 1,
      timer: "",
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll, true);
    this.start();
  },
  computed: {
    getIndex(n) {
      return "case_" + n;
    },
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    },
    handleScroll() {
      if (window.scrollY < 2000 || window.scrollY === 2000) {
        this.isChange = false;
      } else if (window.scrollY > 2000) {
        this.isChange = true;
      }

      if (window.scrollY > 80 || window.scrollY === 80) {
        this.isAside = true;
      } else {
        this.isAside = false;
      }
      if (window.scrollY > 400) {
        this.isShow2 = true;
      }
      if (window.scrollY > 530) {
        this.isShow3 = true;
      }
    },
    start() {
      let _this = this;
      _this.timer = setTimeout(() => {
        if (window.scrollY > -1) {
          _this.isShow1 = true;
          console.log(2);
        }
      }, 200);
    },
    totop() {
      document.documentElement.scrollTop = 0;
    },
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}
.homepage {
  position: relative;

  .video-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    height: 525px;
    overflow: hidden;
    /* background-color: red; */
  }
  .fillWidth {
    transform: translateY(-15%);
    width: 100%;
  }
  .img-container {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(-6%);
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .aside {
    position: fixed;
    z-index: 99;
    right: 0;
    top: 80px;
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    align-items: right;
    justify-content: flex-end;
    text-align: right;
    div {
      background: #ed263b;
      text-align: center;
      font-size: 12px;
      color: #fff;
      margin-bottom: 1px;
      text-align: center;
      width: 80px;
      height: 66px;
      border-radius: 5px 0 0 5px;
      padding: 10px 10px 10px 0;
      box-sizing: border-box;
    }
    div:hover {
      width: 100px;
      transition: width 0.3s ease-in-out;
    }
    div:last-child {
      color: #000;
      background-color: #ddd;
    }
    .phone {
      position: absolute;
      top: 67px;
      right: 0;
      z-index: 99;
      background: #ed263b;
      text-align: left;
      font-size: 12px;
      color: #fff;
      margin-bottom: 1px;
      text-align: left;
      width: 240px;
      height: 66px;
      border-radius: 5px 0 0 5px;
      box-sizing: border-box;
      transform: translateX(67%);

      .left {
        display: inline-block;
        width: 80px;
        height: 66px;
        border-right: 1px solid #000;
        padding: 10px 10px 10px 0;
        box-sizing: border-box;
      }
    }
    .phone:hover {
      transform: translateX(0);
      transition: transform 0.5s ease-in-out;
    }
    /*  */
  }
  .index-main {
    background-color: #fff;
    /* margin-top: 500px; */
    .index-page01 {
      margin: 0 269px;
      padding: 80px 0;
      text-align: center;
      .top {
        font-size: 32px;
        height: 96px;
        line-height: 150%;
        margin-bottom: 30px;
        /* -webkit-backface-visibility: hidden; */
      }
      .bottom {
        font-size: 16px;
        height: 128px;
        line-height: 200%;
        color: #666;
      }
    }
    .index-page02 {
      padding: 0 45px;
      /* background-color: skyblue; */
      .title {
        font-size: 40px;
        padding: 0 0 0 117px;
        margin-bottom: 40px;
      }
      .case-list {
        display: flex;
        flex-flow: row wrap;
        position: relative;
        .case-item {
          overflow: hidden;

          .gif-box {
            img {
              width: 475px;
              height: 398px;
              vertical-align: top;
            }
          }

          .info-box {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background-color: #ed263b;
          }
          &:hover {
            .gif-box {
              transform: scale(1.1);

              transition: scale 0.3;
            }
            .info-box {
              z-index: 1;
              -webkit-animation: fadeinout 1s linear forwards;
              animation: fadeinout 1s linear forwards;
            }
          }
          @-webkit-keyframes fadeinout {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fadeinout {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        }

        .more {
          margin: 48px 593px 0;
          text-align: center;
          font-size: 18px;
          width: 250px;
          line-height: 50px;
          color: #ed263b;
          overflow: hidden;
          position: relative;
          z-index: 1;
          cursor: pointer;
          justify-content: center;
          border: 1px solid #ed263b;
        }
        .more::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;
          z-index: -1;
          margin: -15px 0 0 1px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ed263b;
        }
        .more:hover {
          color: #fff;
          transition: color 0.3s ease-in-out;
          &::before {
            content: "";
            margin: -15px 0 0 1px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #ed263b;
            transform: scale(20);
            transition: transform 0.3s ease-in-out;
            transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
          }
        }
      }
    }
    .index-page03 {
      margin: 0 76px;
      padding: 120px 0;
      /* background-color: #a5ac3d; */
      .title {
        font-size: 40px;
      }
      .serve-list {
        display: flex;
        flex-flow: row wrap;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 200px 0;
    background-color: rgba(0, 0, 0, 0);
    .tit {
      font-size: 96px;
      margin-bottom: 20px;
    }
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 80px;
      .item {
        margin-right: 50px;
        /* color: rgb(128, 30, 30); */
        .title {
          font-size: 36px;
        }
      }
    }
    .more {
      color: #fff;
      background-color: #ed263b;
      transition: background-color 0.3s;
      font-size: 18px;
      width: 250px;
      line-height: 50px;
      overflow: hidden;
      position: relative;
      z-index: 1;
      transition: color 0.3s, border-color 0.3s;
      cursor: pointer;
      justify-content: center;
      border: 1px solid #ed263b;
      text-align: center;
    }
  }
  .index-page05 {
    background-color: #fff;
    padding: 120px 76px;
    color: #000;
    .index-page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 40px;
      border-bottom: 1px solid #666;
      .title {
        font-size: 40px;
      }
      .more {
        color: #666;
        font-size: 14px;
      }
    }
    .list {
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        padding: 24px 0;
        border-bottom: 1px solid #eee;
        .left {
          .title {
            font-size: 22px;
            margin-bottom: 6px;
          }
          .content {
            margin-bottom: 24px;
            color: #666;
          }
        }
      }
      .item:hover {
        .arrow {
          animation-name: rightarrow;
          animation-direction: alternate;
          animation-timing-function: linear;
          animation-delay: 0;
          animation-duration: 0.5s;
          animation-iteration-count: infinite;
        }
      }
      @keyframes rightarrow {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    }
  }
  .page-footer {
    background-color: #292a2e;
    color: #eee;
    .container {
      padding: 0 80px;
      .page-footer-box1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 0 40px;
        border-bottom: 1px solid #666;
        .nav {
          .item {
            margin-left: 70px;
          }
        }
      }
      .page-footer-box2 {
        padding: 50px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #666;
        .item-l {
          display: flex;
          font-size: 14px;
          .item {
            padding-right: 60px;

            .tit {
              margin: 20px 0;
            }
            .wx {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .ewm {
                padding: 14px;
                margin-bottom: 16px;
                border: 1px solid #666;
                img {
                  width: 110px;
                  height: 110px;
                }
              }
              .text {
              }
            }
            .phone-box {
              .tel {
                font-size: 36px;
              }
            }
            .email-box {
              font-size: 18px;
            }
          }
        }
        .item-r {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .tit {
            font-size: 14px;
          }
        }
      }
      .page-footer-box3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding: 10px 0;
        .clearfy {
          display: flex;
        }
      }
    }
  }
}
</style>
