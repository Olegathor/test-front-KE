<!-- || [TEMPLATE] || template section || - || NOTE || -->
<template>
  <div class="root">
    <!-- || [header] || header section || - || NOTE || -->
    <!--    <HeaderPage :handle-close="handleClose"-->
    <!--                :handle-open="handleOpen"-->
    <!--                :is-collapse="isCollapse" />-->
    <HeaderPage />
    <!-- || [main] || main section || - || NOTE || -->
    <main>
      <!--      <Advantage :advantages="advantages" />-->
      <Advantage />

      <Statistic />

      <!--      <Seller :sellers="sellers" />-->
      <Seller />

      <Faq />
    </main>

    <!-- || [footer] || footer section || - || NOTE || -->
    <FooterPage />
  </div>
</template>

<!-- || [SCRIPT] || script section || - || NOTE || -->
<script>
import HeaderPage from "@/views/HeaderPage";
import Advantage from "@/views/Advantage";
import Statistic from "@/views/Statistic";
import Seller from "@/views/Seller";
import Faq from "@/views/Faq";
import FooterPage from "@/views/FooterPage";

export default {
  name: 'Page',
  components: {Faq, Seller, Statistic, Advantage, FooterPage, HeaderPage},
  data() {
    return {
      // activeName: '1',
      // isCollapse: true,
      // advantages: [
      //   {
      //     title1: "Комиссия",
      //     title2: "«Все включено»",
      //     description: "У нас собственная система логистики, хранения и выдачи заказов. Благодаря ей мы можем установить для партнеров самую низкую комиссию по рынку без дополнительных сборов.",
      //     imgLink: "/img/box-a.png"
      //   },
      //
      //   {
      //     title1: "Бесплатная",
      //     title2: "фотостудия",
      //     description: "Наши покупатели должны видеть только красивые и качественные фотографии. Поэтому мы построили  крупнейшую в России фотостудию и бесплатно делаем предметную и модельную съемку товаров.",
      //     imgLink: "/img/cam-2.png"
      //   },
      //
      //   {
      //     title1: "Фирменные",
      //     title2: "пункты выдачи",
      //     description: "Красивые и уютные пункты выдачи заказов продуманы до мелочей и оставляют позитивные впечатления о маркетплейсе. С ними вы можете быть спокойны за сохранение лояльности постоянных покупателей.",
      //     imgLink: "/img/diamond.png"
      //   },
      //
      //   {
      //     title1: "Доставка",
      //     title2: "до 24 часов",
      //     description: "Эффективно выстроили все процессы, связанные с логистикой. Поэтому доставляем заказы за один день в любой пункт выдачи KazanExpress или прямо до двери.",
      //     imgLink: "/img/Car-1.png"
      //   }
      // ],
      // sellers: [
      //   {
      //     imgLink: "/svg/circle-star.svg",
      //     description1: "Поможем",
      //     description2: "разработать",
      //     description3: "бренд",
      //     number: "01"
      //   },
      //
      //   {
      //     imgLink: "/svg/camera.svg",
      //     description1: "Бесплатно сделаем",
      //     description2: "фотографии",
      //     description3: "товаров",
      //     number: "02"
      //   },
      //
      //   {
      //     imgLink: "/svg/bookmarks.svg",
      //     description1: "Дадим",
      //     description2: "нужные знания",
      //     description3: "для развития",
      //     number: "03"
      //   },
      //
      //   {
      //     imgLink: "/svg/delivery.svg",
      //     description1: "Поможем",
      //     description2: "отправить",
      //     description3: "товары на склад",
      //     number: "04"
      //   },
      //
      //   {
      //     imgLink: "/svg/box.svg",
      //     description1: "Поможем",
      //     description2: "подготовить",
      //     description3: "товары к продаже",
      //     number: "05"
      //   }
      // ]
    };
  },

  beforeCreate() {
  },

  async created() {
  },

  beforeMount() {
  },

  mounted() {
  },

  computed: {},

  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  },

  watch: {},
};
</script>

<!-- || [STYLE] || style section || - || NOTE || -->
<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

*
  box-sizing border-box
  padding 0
  margin 0

html
  scroll-behavior smooth
  overflow-x hidden

::-webkit-scrollbar
  display none

body
  font-family 'Inter', sans-serif
  background-color #111111

h1
  font-style normal
  font-weight bold
  font-size 57px
  line-height 73px
  letter-spacing -1.75px
  color #fafafa

  +x960()
    font-size 50px
    line-height 55px
    letter-spacing -1.5px

  +x640()
    font-size 50px
    line-height 55px
    letter-spacing -1.5px

  +x320()
    font-size 25px
    line-height 33px
    letter-spacing -1px

section
  width 1280px
  margin 0 auto
  transition .5s

  +x960()
    width 960px
  +x640()
    width 640px
  +x320()
    width 320px

.container
  display flex
  width 1128px
  transition .5s

  +x960()
    width 900px
  +x640()
    width 592px
  +x320()
    width 288px

/* || [header] || header section || - || NOTE || */
//.header
//  display flex
//  justify-content center
//  align-items center
//  //width 1280px
//  height 70px
//  margin 0 auto
//  border-bottom 1px solid #323131
//  //background-color lightgreen
//  background-color #111111
//  transition .5s
//
//  +x960()
//    width 960px
//  +x640()
//    width 640px
//  +x320()
//    width 320px
//
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
//.el-link--inner
//  color #FAFAFA
//
//.el-link--inner:hover
//  color rgba(222, 35, 35, 0.9)
//  opacity 0.9
//
//.el-submenu__title i
//  color #FAFAFA
//
//.el-menu
//  border-right: solid 1px #111111;

/* || [advantage] || advantage section || - || NOTE || */
//.advantage
//  display flex
//  justify-content center
//  background-color #111111

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

//.rotate-320px-1
//  +x320()
//    margin 322px 0 0
//
//.rotate-320px-2
//  +x320()
//    margin -628px 0 0

//.advantage-item-title-img
//  +x960()
//    display flex
//
//.p1-advantage
//  font-style normal
//  font-weight 600
//  font-size 13px
//  line-height 17px
//  letter-spacing -0.02em
//  text-transform uppercase
//  color #FAFAFA
//
//.img-item
//  display flex
//
//.img-item-2
//  background-image url("../../public/img/cam-2.png")
//  background-size contain
//  background-repeat no-repeat
//  width 98px
//  height 98px
//  margin 15px 0 61px 66px
//
//  +x960()
//    margin 7px 0 42px 206px
//  +x640()
//    margin -26px 0 21px 154px
//  +x320()
//    margin -27px 0 20px 152px
//
//.img-item-3
//  background-image url("../../public/img/diamond.png")
//  background-size contain
//  background-repeat no-repeat
//  width 75px
//  height 75px
//  margin 58px 0 41px 55px
//
//  +x960()
//    margin 8px 0 52px 203px
//  +x640()
//    margin -26px 0 51px 173px
//  +x320()
//    margin -26px 0 51px 174px
//
//.img-item-4
//  background-image url("../../public/img/Car-1.png")
//  background-size contain
//  background-repeat no-repeat
//  width 102px
//  height 102px
//  margin 18px 0 74px 91px
//
//  +x960()
//    margin 1px 0 50px 209px
//  +x640()
//    margin -32px 0 42px 153px
//  +x320()
//    margin -33px 0 43px 153px
//
//.p2-advantage
//  font-style normal
//  font-weight normal
//  font-size 15px
//  line-height 20px
//  letter-spacing -0.5px
//  color #DBD9D9

/* || [statistic] || statistic section || - || NOTE || */
//.statistic
//  width 100%
//
//  +x1280()
//    display flex
//    justify-content center
//  +x960()
//    display flex
//    justify-content center
//  +x640()
//    display flex
//    justify-content center
//  +x320()
//    display flex
//    justify-content center


/* || [seller] || seller section || - || NOTE || */
//.seller
//  display flex
//  justify-content center
//  height 600px
//  margin 32px auto 0
//
//  +x960()
//    margin 11px auto 0
//  +x640()
//    width 592px
//    height 960px
//  +x320()
//    height 880px

//.group-seller-item
//  border 1px solid #323131
//  box-sizing border-box
//  height 164px
//  width 167px
//
//  +x640()
//    height 164px
//    width 296px
//  +x320()
//    height 156px
//    width 144px
//
//.seller-item-description
//  color rgba(250, 250, 250, 0.9)
//  font-style normal
//  font-weight 500
//  font-size 15px
//  line-height 20px
//  letter-spacing -0.5px
//  padding 0 11px
//
//  +x320()
//    font-size 12px
//    line-height 17px
//    letter-spacing -0.25px
//
//.seller-item-img-2
//  background-image url("../../public/svg/camera.svg")
//  background-size contain
//  background-repeat no-repeat
//  width 32px
//  height 32px
//  margin 22px 0 9px 11px
//
//.seller-item-img-3
//  background-image url("../../public/svg/bookmarks.svg")
//  background-size contain
//  background-repeat no-repeat
//  width 32px
//  height 32px
//  margin 20px 0 11px 14px
//
//.seller-item-img-4
//  background-image url("../../public/svg/delivery.svg")
//  background-size contain
//  background-repeat no-repeat
//  width 32px
//  height 32px
//  margin 24px 0 7px 11px
//
//.seller-item-img-5
//  background-image url("../../public/svg/box.svg")
//  background-size contain
//  background-repeat no-repeat
//  width 32px
//  height 32px
//  margin 22px 0 9px 11px
//
//.seller-item-number
//  font-style normal
//  font-weight normal
//  font-size 12px
//  line-height 17px
//  letter-spacing -0.25px
//  color #646363
//  padding 11px 11px

/* || [faq] || faq section || - || NOTE || */
//.faq
//  display flex
//  justify-content center
//  transition .5s
//
//  +x640()
//    height 892px
//  +x320()
//    height 1353px
//
//
//.el-collapse
//  border-top 1px solid rgba(255, 255, 255, 0.15)
//
//.el-collapse-item__header
//  transition .5s
//  color #ffffff
//  background-color #111111
//  border-bottom 1px solid rgba(255, 255, 255, 0.15)
//  font-family Inter
//  font-style normal
//  font-weight 500
//  font-size 23px
//  line-height 32px
//  letter-spacing -0.5px
//  padding-top 25px
//  padding-bottom 22px
//  height 100%
//
//.el-collapse-item__content
//  transition .5s
//  color rgba(219, 217, 217, 0.8)
//  background-color #111111
//  font-family Inter
//  font-style normal
//  font-weight normal
//  font-size 15px
//  line-height 24px
//  letter-spacing -0.5px
//
//.el-collapse-item__arrow
//  margin: 4.5px 8px auto auto
//
//.el-collapse-item__wrap
//  border-bottom 1px solid #323131
//  background-color #323131

/* || [footer] || footer section || - || NOTE || */
//.footer a
//  text-decoration none
//  color #FAFAFA
//
//.footer a:hover
//  color rgba(222, 35, 35, 0.9)

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
