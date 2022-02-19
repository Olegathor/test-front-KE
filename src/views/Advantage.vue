<template>
  <section class="advantage">
    <div class="advantage-wrapper container">
      <div class="advantage-container">
        <h1 id="advantages"
            class="h1-advantage">
          Почему KazanExpress — <br>лучший маркетплейс для бизнеса
        </h1>
        <div class="group-advantage">
          <AdvantageCard v-for="cardData in advantages"
                         :title1="cardData.title1"
                         :title2="cardData.title2"
                         :description="cardData.description"
                         :imgLink="cardData.imgLink" />

          <!--              <div class="group-advantage-item rotate-320px-1">-->
          <!--                <div class="advantage-item-title-img">-->
          <!--                  <p class="p1-advantage">Бесплатная <br>фотостудия</p>-->
          <!--                  <div class="img-item">-->
          <!--                    <div class="img-item-2"></div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--                <p class="p2-advantage">-->
          <!--                  Наши покупатели должны видеть только красивые и качественные фотографии. Поэтому мы построили-->
          <!--                  крупнейшую в России фотостудию и бесплатно делаем предметную и модельную съемку товаров.-->
          <!--                </p>-->
          <!--              </div>-->

          <!--              <div class="group-advantage-item rotate-320px-2">-->
          <!--                <div class="advantage-item-title-img">-->
          <!--                  <p class="p1-advantage">Фирменные <br>пункты выдачи</p>-->
          <!--                  <div class="img-item">-->
          <!--                    <div class="img-item-3"></div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--                <p class="p2-advantage">-->
          <!--                  Красивые и уютные пункты выдачи заказов продуманы до мелочей и оставляют позитивные впечатления о-->
          <!--                  маркетплейсе. С ними вы можете быть спокойны за сохранение лояльности постоянных покупателей.-->
          <!--                </p>-->
          <!--              </div>-->

          <!--              <div class="group-advantage-item">-->
          <!--                <div class="advantage-item-title-img">-->
          <!--                  <p class="p1-advantage">Доставка <br>до 24 часов</p>-->
          <!--                  <div class="img-item">-->
          <!--                    <div class="img-item-4"></div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--                <p class="p2-advantage">-->
          <!--                  Эффективно выстроили все процессы, связанные с логистикой. Поэтому доставляем заказы за один день в-->
          <!--                  любой пункт выдачи KazanExpress или прямо до двери.-->
          <!--                </p>-->
          <!--              </div>-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AdvantageCard from "@/components/AdvantageCard";

export default {
  name: 'Advantage',
  components: {AdvantageCard},
  data() {
    return {
      advantages: [
        {
          title1: "Комиссия",
          title2: "«Все включено»",
          description: "У нас собственная система логистики, хранения и выдачи заказов. Благодаря ей мы можем установить для партнеров самую низкую комиссию по рынку без дополнительных сборов.",
          imgLink: "/img/box-a.png"
        },

        {
          title1: "Бесплатная",
          title2: "фотостудия",
          description: "Наши покупатели должны видеть только красивые и качественные фотографии. Поэтому мы построили  крупнейшую в России фотостудию и бесплатно делаем предметную и модельную съемку товаров.",
          imgLink: "/img/cam-2.png"
        },

        {
          title1: "Фирменные",
          title2: "пункты выдачи",
          description: "Красивые и уютные пункты выдачи заказов продуманы до мелочей и оставляют позитивные впечатления о маркетплейсе. С ними вы можете быть спокойны за сохранение лояльности постоянных покупателей.",
          imgLink: "/img/diamond.png"
        },

        {
          title1: "Доставка",
          title2: "до 24 часов",
          description: "Эффективно выстроили все процессы, связанные с логистикой. Поэтому доставляем заказы за один день в любой пункт выдачи KazanExpress или прямо до двери.",
          imgLink: "/img/Car-1.png"
        }
      ]
    }
  }
  // props: {
  //   advantages: {}
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
//  //+Several(x1280, x1920)
//  //  color #ffb300
//
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
//
//.container
//  display flex
//  width 1128px
//  transition .5s
//
//  +x960()
//    width 900px
//  +x640()
//    width 592px
//  +x320()
//    width 288px

/* || [advantage] || advantage section || - || NOTE || */
.advantage
  display flex
  justify-content center
  background-color #111111

.group-advantage
  display flex
  justify-content space-between
  margin 64px 0 0

  +Several(x1280, x1920)
    flex-wrap wrap
  +x960()
    flex-wrap wrap
    margin 47px 0 0
  +x640()
    flex-wrap wrap
    margin 39px 0 0
  +x320()
    flex-wrap wrap
    margin 31px 0 0

.advantage-container
  margin 128px 0 0

  +x960()
    margin 104px 0 0
  +x640()
    margin 97px 0 0
  +x320()
    margin 97px 0 0

.h1-advantage
  transition .5s
  +x960()
    width 600px
  +x320()
    width 255px

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