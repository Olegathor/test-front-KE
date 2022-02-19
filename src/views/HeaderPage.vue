<template>
  <header class="header">
    <div class="container navigation">
      <div class="logo"></div>
      <div class="header-navigation">
        <ul class="header-navigation-list">
          <li>
            <a href="#advantages">Преимущества</a>
          </li>

          <li>
            <a href="#indicators">Показатели</a>
          </li>

          <li>
            <a href="#be-a-seller">Партнерство</a>
          </li>

          <li>
            <a href="#questions">Вопросы</a>
          </li>
        </ul>
      </div>

      <a href="https://kazanexpress.ru/">
        <div class="our-product">
          <div class="product-link">
            Наши продукты
          </div>
          <div class="all-products">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="6" height="6" rx="2" />
              <rect x="9" y="1" width="6" height="6" rx="2" />
              <rect x="1" y="9" width="6" height="6" rx="2" />
              <rect x="9" y="9" width="6" height="6" rx="2" />
            </svg>
          </div>
        </div>
      </a>

      <el-menu class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               :collapse="isCollapse"
               background-color="#111111"
               text-color="#FAFAFA"
               active-text-color="#FAFAFA">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-more-outline"></i>
            <span slot="title">Меню</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Меню</span>
            <el-menu-item class="el-menu-item-link" index="1-1">
              <el-link :underline="false"
                       href="#advantages"
                       text-color="#FAFAFA"
                       active-text-color="#FAFAFA">
                Преимущества
              </el-link>
            </el-menu-item>
            <el-menu-item class="el-menu-item-link" index="1-2">
              <el-link :underline="false"
                       href="#indicators">
                Показатели
              </el-link>
            </el-menu-item>
            <el-menu-item class="el-menu-item-link" index="1-3">
              <el-link :underline="false"
                       href="#be-a-seller">
                Партнерство
              </el-link>
            </el-menu-item>
            <el-menu-item class="el-menu-item-link" index="1-4">
              <el-link :underline="false"
                       href="#questions">
                Вопросы
              </el-link>
            </el-menu-item>
            <el-menu-item class="el-menu-item-link" index="1-5">
              <el-link :underline="false"
                       href="https://kazanexpress.ru/">
                Наши продукты
              </el-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      isCollapse: true
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }

  // props: {
  //   handleClose: {},
  //   handleOpen: {},
  //   isCollapse: {}
  // }
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

//*
//  box-sizing border-box
//  padding 0
//  margin 0
//
//html
//  scroll-behavior smooth
//  overflow-x hidden
//
//::-webkit-scrollbar
//  display none
//
//body
//  font-family 'Inter', sans-serif
//  background-color #111111
//
//h1
//  font-style normal
//  font-weight bold
//  font-size 57px
//  line-height 73px
//  letter-spacing -1.75px
//  color #fafafa
//
//  +x960()
//    //color #e00f0f
//    font-size 50px
//    line-height 55px
//    letter-spacing -1.5px
//
//  +x640()
//    //color #1ed760
//    font-size 50px
//    line-height 55px
//    letter-spacing -1.5px
//
//  +x320()
//    //color #b565ff
//    font-size 25px
//    line-height 33px
//    letter-spacing -1px
//
//section
//  width 1280px
//  margin 0 auto
//  transition .5s
//
//  +x960()
//    width 960px
//  +x640()
//    width 640px
//  +x320()
//    width 320px

/* || [header] || header section || - || NOTE || */
.header
  display flex
  justify-content center
  align-items center
  //width 1280px
  height 70px
  margin 0 auto
  border-bottom 1px solid #323131
  //background-color lightgreen
  background-color #111111
  transition .5s

  +x960()
    width 960px
  +x640()
    width 640px
  +x320()
    width 320px

.header a
  text-decoration none
  color #FAFAFA

.header a:hover
  color rgba(222, 35, 35, 0.9)

.navigation
  display flex
  align-items center

.header-navigation
  display flex
  margin 2px auto 0
  padding 0 0 0 166px
  //justify-content space-between
  width 680px
  transition .5s

  +x960()
    display none
  +x640()
    display none
  +x320()
    display none

.header-navigation-list,
.our-product
  display flex
  justify-content space-between
  list-style-type none
  //margin 0 18px 0 0;
  font-style normal
  font-weight 500
  font-size 14px
  line-height 32px
  letter-spacing -0.5px

.our-product
  display flex
  align-items center
  transition .5s
  padding-right 16px
  font-size 16px

  +x960()
    display none
  +x640()
    display none
  +x320()
    display none

.product-link
  margin 0 12px 0 0

.all-products
  display flex
  align-items center

.all-products svg
  fill #FAFAFA

.header-navigation-list li
  padding-right 24px

.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
  min-height 400px

.el-menu-vertical-demo
  margin 0 0 0 auto
  transition .5s

  +x1920()
    display none
  +x1280()
    display none

.el-menu-item-link
  text-decoration none

.el-link--inner
  color #FAFAFA

.el-link--inner:hover
  color rgba(222, 35, 35, 0.9)
  opacity 0.9

.el-menu
  border-right: solid 1px #111111;

.el-submenu__title i
  color #FAFAFA

.logo
  background-image url("../assets/Business.svg")
  background-size contain
  background-repeat no-repeat
  width 140px
  height 21px

/* || [advantage] || advantage section || - || NOTE || */
//.group-advantage-item
//  background-color #1C1C1C
//  color #DBD9D9
//  margin 0 24px 24px 0
//  width 264px
//  padding 16px
//  border-radius 6px
//  transition .5s
//
//  +x960()
//    height 266px
//    width 436px
//    margin 0 2px 24px 2px
//    padding-left 18px
//    padding-bottom 23px
//  +x640()
//    height 306px
//    width 286px
//    margin 0 2px 16px 2px
//    padding-left 14px
//    padding-bottom 23px
//  +x320()
//    height 306px
//    width 288px
//    margin 0 0 16px 0
//    padding-left 15px
//    padding-bottom 23px
//
//
//.group-advantage-item:last-child
//  margin 0 0 24px 0
//
//  +x320()
//    margin 16px 0 0

/* || [statistic] || statistic section || - || NOTE || */

/* || [seller] || seller section || - || NOTE || */
/* || [faq] || faq section || - || NOTE || */
/* || [footer] || footer section || - || NOTE || */
//.footer a
//  text-decoration none
//  color #FAFAFA
//
//.footer a:hover
//  color rgba(222, 35, 35, 0.9)
//
//.footer-navigation-list li
//  padding-right 24px
//
//  +x640()
//    padding-bottom 24px
//  +x320()
//    padding-bottom 24px
//
//.footer-links p
//  text-transform uppercase
//  font-style normal
//  font-weight 600
//  font-size 13px
//  line-height 17px
//  letter-spacing -0.02em
//  color #FAFAFA
//
//  +x960()
//    margin -8px 0 24px
//  +x640()
//    margin -8px 0 24px
//  +x320()
//    margin -8px 0 24px
//
//.rights p
//  font-style normal
//  font-weight normal
//  font-size 12px
//  line-height 17px
//  letter-spacing -0.25px
//  color rgba(173, 172, 172, 0.5)
//
//  +x320()
//    width 250px


/* || [END] || end code || - || NOTE || */

/* `                                 ;;.                    ;;.
                                    ,t;i,                 ,;;;:
                                    :t::i,              ,;i;:,:,
                                    11;:;i;.          .;i;:::,,:
                                   ,1;i11i11iii;;;;::;;:,:,..,,:.
                                 .:1ttt11i;iii1111ii;:.,:,. .,::.
                             ,i1tfftfffti;;ii;iiiiiii;:,,.  ,:;,
                            ;Lfffttttft1;;;i111i;;iii11i:..,:,;;
                           .fLLLt:,,;t1i;;1tttt1ii;iii1111i;:,:1;
                           1C00Ci. .i1t111ii;;:,:;;iii11111i;,,it.
                          ,C00Ct1i1tttftti:. :.  ,ii11111111i;:;1,
                          t0GGGfffftffftt1i;::,:i1tfffttttt11iii1;
                         ,CCGC;,...,;fLftt1tt11111tfLLftffftt11i11.
                         iGLGt       tLfftttfffLffffffLfffttt1ii11i
                         iGLf;.    .:i1tt11ffffffLfffftt1111ii;iiit;
                         1GLt:..  ..:iii1111ttttt1ttt1111111i;;i;i1t
                         ;GLLt,     .,::::,:i11111t11ttfttt1i;;;;iit:
                         .LCLft;.........,:i1111ttttttttt11i;;;;;;i1i
                          ,LLfff1iiiiiiii111111111tttt11iii;;;;::;;it;
                           tfffftttt1111iiiiii1ttttt111iii;;;:::;;;iti
                          :Ltttttt1111iiiiiii1tttt111111iii;:::;iii1t1
                          ;Lftt11111111iiiiiiii;iii11111ii;;;ii111t1f1
                          tLffftt1ii;ii;;;;;;;;ii11111111ii1tttttttttf
                          fCLfftt11ii;;;;;;ii11t11111tttttffffffftttt1
                         ,LCLLfft111iiiiiii11t111ttt11tttffttfffftt11:
                      .:1fLLLffttt11iiiiii111111111ttft1tffffffftt1ii;
                    ,1fLLCLLffttt111iiiii11111111t1tttfftfffffftt1i;;i
                 .:tffLCCCCLfftt1111i1i1111111t1t1111ttffffttt11ii;;;i
                ,fLffLGGCGCLfftt111ii11111t1tttttttt11tfffftt111i;;;;1
               :fftfCGGLCCLLftt111ii1ii1111111tt11tttt1tttttttttti;;;t.
               :11tLGGLfffffttt1111iiiiiiii11111111i1111tttttffft1;;;1.
           .,;i111tCCLfftt11t11111i1ii1iiiiiii1i1ii11111ttttttfft1;:;:
         ,:;iiiii1tLLfttftt1iiiiiiiiiiiiiiiii1iii11111i111ttttttti;;;,
         ;;:;;;::1ffffffLLfftt111111iii1iiiii1ii111111ii11ttttttti;;i,
         .:::::iLGftffLLLLLLfttttttt1iii11tttttt11iiiii111ttttttti;;;
           ...;1tt1tfLLLLLLLfftt11t1ttfLCCLLLftt111iiii1111tttttt1ii.
                   1CLLLLLLLfftttffLGGGGCLLCLft1t11iii111t111ttttt1,
                   ,ttfffLLLLLfffLLGGLCCff11fttt11iiii11111111tt1t,
                       ..:;itf1tfffttt;1ti;::11i;;;iiiii111111111i
                             ..:1t1;::...:;, :1tfi,;ii;ii1111ii;i.
                                 ..,;;:.....;11tLL;:,:::;;;iiii;:
                                     ,;... .:,:i;1i,         ...
                                              ....,` */
</style>