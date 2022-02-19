<template>
  <section class="seller">
    <div class="seller-wrapper seller-background">
      <div class="container">
        <div class="seller-container">
          <h1 id="be-a-seller" class="h1-seller">Стать продавцом</h1>

          <p class="p-seller">
            Открыть свой бизнес с нами легко. <br>Всего пара шагов — и вот у вас уже есть свой магазин, поток
            клиентов
            и продажи.
          </p>

          <div class="group-seller">
            <SellerCard v-for="cardData in sellers"
                        :imgLink="cardData.imgLink"
                        :description1="cardData.description1"
                        :description2="cardData.description2"
                        :description3="cardData.description3"
                        :number="cardData.number" />

            <!--                <div class="group-seller-item">-->
            <!--                  <div class="seller-item-img-2"></div>-->
            <!--                  <p class="seller-item-description">Бесплатно сделаем <br>фотографии <br>товаров</p>-->
            <!--                  <p class="seller-item-number">02</p>-->
            <!--                </div>-->

            <!--                <div class="group-seller-item">-->
            <!--                  <div class="seller-item-img-3"></div>-->
            <!--                  <p class="seller-item-description">Дадим <br>нужные знания <br>для развития</p>-->
            <!--                  <p class="seller-item-number">03</p>-->
            <!--                </div>-->

            <!--                <div class="group-seller-item">-->
            <!--                  <div class="seller-item-img-4"></div>-->
            <!--                  <p class="seller-item-description">Поможем <br>отправить <br>товары на склад</p>-->
            <!--                  <p class="seller-item-number">04</p>-->
            <!--                </div>-->

            <!--                <div class="group-seller-item">-->
            <!--                  <div class="seller-item-img-5"></div>-->
            <!--                  <p class="seller-item-description">Поможем <br>подготовить <br>товары к продаже</p>-->
            <!--                  <p class="seller-item-number">05</p>-->
            <!--                </div>-->
          </div>
          <div class="seller-btn">
            <a href="https://business.kazanexpress.ru/seller/signup">
              <button class="be-seller">
                Стать продавцом
              </button>
            </a>
            <a href="https://business.kazanexpress.ru/seller">
              <button class="info-seller">
                Узнать больше
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SellerCard from "@/components/SellerCard";

export default {
  name: 'Seller',
  components: {SellerCard},
  data() {
    return {
      sellers: [
        {
          imgLink: "/svg/circle-star.svg",
          description1: "Поможем",
          description2: "разработать",
          description3: "бренд",
          number: "01"
        },

        {
          imgLink: "/svg/camera.svg",
          description1: "Бесплатно сделаем",
          description2: "фотографии",
          description3: "товаров",
          number: "02"
        },

        {
          imgLink: "/svg/bookmarks.svg",
          description1: "Дадим",
          description2: "нужные знания",
          description3: "для развития",
          number: "03"
        },

        {
          imgLink: "/svg/delivery.svg",
          description1: "Поможем",
          description2: "отправить",
          description3: "товары на склад",
          number: "04"
        },

        {
          imgLink: "/svg/box.svg",
          description1: "Поможем",
          description2: "подготовить",
          description3: "товары к продаже",
          number: "05"
        }
      ]
    };
  }
  // props: {
  //   sellers: {}
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

/* || [seller] || seller section || - || NOTE || */
.seller
  display flex
  justify-content center
  height 600px
  margin 32px auto 0

  +x960()
    margin 11px auto 0
  +x640()
    width 592px
    height 960px
  +x320()
    height 880px

.seller-background
  display flex
  justify-content center
  background url("../assets/heart-3.png")
  background-repeat no-repeat
  background-position top -15px right 23px
  height 483px
  width 100%

  +x960()
    background url("../assets/heart-960.png")
    background-repeat no-repeat
    background-position top -1px right 1px
  +x640()
    background none
  +x320()
    background none

.h1-seller
  +x960()
    padding-left 2px
  +x640()
    width 420px
  +x320()
    width 160px

.p-seller
  color #FAFAFA
  font-style normal
  font-weight 500
  font-size 36px
  line-height 42px
  letter-spacing -1px
  width 740px
  margin 32px 0 33px

  +x960()
    font-size 23px
    line-height 32px
    letter-spacing -0.5px
    width 460px
    margin 31px 0 33px 2px
  +x640()
    font-size 23px
    line-height 32px
    letter-spacing -0.03em
    width 460px
    margin 31px 0 33px 1px
  +x320()
    font-size 15px
    line-height 24px
    letter-spacing -0.5px
    width 287px
    margin 23px 0 24px 0

.group-seller
  display flex

  +x640()
    flex-wrap wrap
  +x320()
    flex-wrap wrap

.seller-btn
  margin 41px 0 0
  width 400px
  //display flex

  +x960()
    margin 38px 0 0 2px
  +x640()
    margin 32px 0 0
  +x320()
    margin 22px 0 0


.be-seller
  background-color #DE2323
  border-radius 6px
  border 1px solid #DE2323
  font-style normal
  font-weight 500
  font-size 15px
  line-height 20px
  letter-spacing 0.2px
  color #FAFAFA
  width 189px
  height 52px
  cursor pointer

  +x640()
    width 592px
    height 51px
  +x320()
    width 288px
    height 51px

.be-seller:hover
  background-color rgba(222, 35, 35, 0.9)

.info-seller
  background-color #111111
  border-radius 6px
  border none
  font-style normal
  font-weight 500
  font-size 15px
  line-height 20px
  letter-spacing 0.2px
  color #FAFAFA
  width 170px
  height 52px
  margin 0 0 0 16px
  cursor pointer

  +x640()
    width 592px
    margin 15px 0 0
  +x320()
    width 288px
    margin 15px 0 0

.info-seller:hover, .info-seller:focus
  border 1px solid #50CE61
  transition all .4s
  box-shadow 0 0.5em 0.5em -0.4em #50CE61
  transform translateY(t-0 .65em)

.info-seller:active
  background-color rgba(80, 206, 97, 0.6)
  transition all .4s

.be-seller:hover, .be-seller:focus
  border 1px solid #DE2323
  transition all .4s
  box-shadow 0 0.5em 0.5em -0.4em #DE2323
  transform translateY(t-0 .65em)

.be-seller:active
  background-color rgba(222, 35, 35, 0.6)
  transition all .4s

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