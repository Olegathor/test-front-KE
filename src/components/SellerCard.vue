<template>
  <div class="group-seller-item">
    <img class="seller-img-item" :src="imgLink" alt="img">
    <div class="item-description-number">
      <p class="seller-item-description">{{ description1 }}</p>
      <p class="seller-item-description">{{ description2 }}</p>
      <p class="seller-item-description">{{ description3 }}</p>
      <p class="seller-item-number">{{ number }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SellerCard',
  props: ['imgLink', 'description1', 'description2','description3', 'number']
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

  //+Several(x1280, x1920)
  //  color #ffb300


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
//padding-left 16px

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
.group-seller-item
  border 1px solid #323131
  box-sizing border-box
  height 164px
  width 167px

  +x640()
    height 164px
    width 296px
  +x320()
    height 156px
    width 144px

.item-description-number
  +Several(x1280, x1920)
    margin -3px 0 0
  +x960()
    margin -5px 0 0 3px
  +x640()
    margin -5px 0 0
  +x320()
    margin -4px 0 0

.seller-item-description
  color rgba(250, 250, 250, 0.9)
  font-style normal
  font-weight 500
  font-size 15px
  line-height 20px
  letter-spacing -0.5px
  padding 0 11px

  +x320()
    font-size 12px
    line-height 17px
    letter-spacing -0.25px

.seller-img-item
  //background-image url("../assets/circle-star.svg")
  //background-size contain
  //background-repeat no-repeat
  width 32px
  height 32px
  margin 19px 0 12px 11px

.seller-item-number
  font-style normal
  font-weight normal
  font-size 12px
  line-height 17px
  letter-spacing -0.25px
  color #646363
  padding 11px 11px

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