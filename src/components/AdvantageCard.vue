<template>
  <div class="group-advantage-item">
    <div class="advantage-item-title-img">
      <div class="advantage-title">
        <p class="p1-advantage">{{ title1 }}</p>
        <p class="p1-advantage">{{ title2 }}</p>
      </div>
      <div class="img-item-wrapper">
<!--        <div class="img-item-1"></div>-->
        <img class="img-item" :src="imgLink" alt="img">
      </div>
    </div>
    <div class="p2-advantage-wrapper">
      <p class="p2-advantage">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageCard',
  props: ['title1', 'title2', 'description', 'imgLink']
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

//*
//  box-sizing border-box
//  padding 0
//  margin 0

//html
//  scroll-behavior smooth
//  overflow-x hidden
//
//::-webkit-scrollbar
//  display none

//body
//  font-family 'Inter', sans-serif
//  background-color #111111

//h1
//  font-style normal
//  font-weight bold
//  font-size 57px
//  line-height 73px
//  letter-spacing -1.75px
//  color #fafafa


  //+x960()
  //  font-size 50px
  //  line-height 55px
  //  letter-spacing -1.5px
  //
  //+x640()
  //  font-size 50px
  //  line-height 55px
  //  letter-spacing -1.5px
  //
  //+x320()
  //  font-size 25px
  //  line-height 33px
  //  letter-spacing -1px

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

//.header a
//  text-decoration none
//  color #FAFAFA
//
//.header a:hover
//  color rgba(222, 35, 35, 0.9)
//
//.all-products svg
//  fill #FAFAFA
//
//.header-navigation-list li
//  padding-right 24px
//
//.el-submenu__title i
//  color #FAFAFA

/* || [advantage] || advantage section || - || NOTE || */
.group-advantage-item
  background-color #1C1C1C
  color #DBD9D9
  margin 0 24px 24px 0
  width 264px
  padding 16px
  border-radius 6px
  transition .5s
  height 400px
  //display flex
  //align-items flex-end

  +x960()
    height 266px
    width 436px
    margin 0 2px 24px 2px
    padding-left 18px
    padding-bottom 23px
  +x640()
    height 306px
    width 286px
    margin 0 2px 16px 2px
    padding-left 14px
    padding-bottom 23px
  +x320()
    height 306px
    width 288px
    margin 0 0 16px 0
    padding-left 15px
    padding-bottom 23px


.group-advantage-item:last-child
  margin 0 0 24px 0

  +x320()
    margin 0

.group-advantage-item:hover
  background-color #373743

.advantage-item-title-img
  +x960()
    display flex
    justify-content space-between
  +x640()
    display flex
    justify-content space-between
  +x320()
    display flex
    justify-content space-between

.advantage-title
  display block

.p1-advantage
  font-style normal
  font-weight 600
  font-size 13px
  line-height 17px
  letter-spacing -0.02em
  text-transform uppercase
  color #FAFAFA

.img-item-wrapper
  display flex
  align-items center
  height 150px

  +x960()
    align-items flex-start
  +x640()
    align-items flex-start
  +x320()
    align-items flex-start

.img-item
  //background-image url("../../public/img/box-a.png")
  //background-size contain
  //background-repeat no-repeat
  width 94px
  height 94px
  margin 0 auto
  //margin 26px 0 74px 97px

  //+x1280()
  //  margin 26px 0 74px 86px
  //+x960()
  //  margin 8px 0 43px 181px
  //+x640()
  //  margin -26px 0 43px 154px
  //+x320()
  //  margin -26px 0 43px 155px

.p2-advantage-wrapper
  display flex
  height 185px

  +x960()
    height 76px
  +x640()
    height 116px
  +x320()
    height 116px

.p2-advantage
  display flex
  //align-items flex-end
  font-style normal
  font-weight normal
  font-size 15px
  line-height 20px
  letter-spacing -0.5px
  color #DBD9D9

  //box-align end
  align-items flex-end

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