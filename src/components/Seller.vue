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
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
  background-color rgba(222, 35, 35, 0.8)

.be-seller:active
  background-color rgba(222, 35, 35, 0.6)
  transition all .4s

/* || [END] || end code || - || NOTE || */

/* `American Chopper Argument': `
                                    ....
                                  .:1t11i;:,
                                 :11tfffLCLf;
                                ;fttffffLLfft.
;.                              ,tt1t11ii11i1,
11;;i;:,.....                   .ii1111111ttfi
i1ttfLLLLLffftt1:,..    ..:;::,,,:i1111tt11tft:..
.,:;i1tttffffffLCCCfttt1tf1:,,,,...:;ii1tiii1t:.,,,.
    .,:;i111ttfLLLLffffft1,...... ..::iii;;;ii...,,::,
        .,,::;;iii;;;i;;i:....  .....:;:,,........,,,:,.
                ...,,,,,,..............      ......,i1i:
                        ............ .    ........,i11i;
                          ...... ..,,,,....... ..:i1ii;;
                           .......,,,:,...... .;i11ii;i;
                            .......,,,...    .i1111111i:
                ..           ...            .it111111i;.
                it1;,.        ,.            ,tt11iiii;,
                .;tffft1i;:,,,,..           ;ttt1ii;:,
                  .:ifLLLLLLL1,..      ..,:;1fLft1;,.
                     ,;tfLLLLft1i;::;ii1tfLLLfft1;,
                       .itfLLfLftt11111111111ii;;,
                         .:;;;;::,,,,,,,,,,,,,,,.
                                          .,,,:::,,.
                                        ,it1:::::::::.
                                      .:i11;;::,,,,,,:,
                                ..,,:::::::,,,,....,,,:.
                                ,,:;;:::::,,,.........,.
                                   ..:::,,,,,:::,.....,.
                                    ,i;;;;;i1tt1:::;;,,
                                    :;;;1tffftt;:11ii:,,,....
                                  ..,;;;i111111;;1t1i:..,,,,,,,,..
                              .,,::,,i1i;iiiiii;;;;iii,.....,,,,:::,.
                            .,,,,,,.:t11i;;;;::::;ii1i..........,,,,:,.
                          .,,,......,;i;:,,,,,::;;;i;..............,,,,,.
                        .,,,,...      .    .,,::;;:,...................,,,
             .         .,,,,...              .,,,........................,.
         .;iit1:,     ,:,,,,...                .  .... .....................
        .1LGCGCft;,,;i;,,,,....             ....   .   .........    ..  ......
       .1LLCLGLfLffffLLt;,...     ..          ....      ....             ..  ..
       ifffttLftt1tt1ttff1:.  ....  ..       ,:;:,..    ..                   ...
       :i11iiiii;;11ttft1i;:..       ..      .::,.::.                          .
       .,:::::::;;i1t11fi:,.          ..
            .,,,,::;;;1f:              ...........  .. ..........  ..   ........
                      .
                               .,:ii111;
                             .:11ttttfff;
                           .:1t11tffLCCCLi
                           ;fftttttfLLCCCL;
                           ;tttt1ttttt11t11,
                           :1111111iii11tfti
                           :1ii11111tff111ff:
                          .:;;i111111ii1111fi
                    ...,,,,..,;;;;;;ii1;:;;1i,..
                 .,::,,....  .:i;::;111;;i1ti,,,,.
              ..:::,,.....    .,:::iiii;;;ii:...,,
            ..,::,,.......      ..,,,,...........,.
            ..i1i;,.......             ..........,:
           .,i1111:.......            ...........:;
           .i1iiiii:.....           ........... ,i:
           ,tii;;;;;,          ..,,,::,,.......,i1i
          .11i;;;;;;:.        ..,,,:,,,,,.... .;;i1,
         .i1iii;;;;;;,       ....,::,...... ..:;;i1:
         :11iiiiiiii;:       .........      .:;;iii;
         ;1iiiiiiii;:.      ........... ..  .::;;i11,
         .,,,,,,,,,,.. ..   ......................,,.
           .;;i1;.
           ;t111t;                     ..,:;,
           :i111ti                     ,::i,.......       .....
        ....,:ii;:.                    .,,:.    .........,:::::,.
      ,i1i;::::,,,,                      ......      ...,,,,,.,,,.
     :i11iiiiiiii;i.                           ..    .,,,,...  .,,
    ,1iii,..,,::::;.                            .     ,:,,,,....,.
   ,1111:     .. .i:                            ..    ::,.,,,,..,..
   1tti:        .;t1.                           ..    :,,....  ...,,
  .i1tt1:.      :CG0;                           ..    ...        ..,
    ,ii1t1;.    ,L@G;                 .,,,,..    .    .   .....   ..
     :::;itf1:,,;fC:                  :;ii11i;;;:;:,:::::::........
     .;:::itt1:,:;i,                  ,;i11111iiiiii11ttttti,......
     ,;:::,;;;,.,,:i,                  ,,::;::::::::;;;;;;;;:.  ...
     ,::,,....  ...,.                          .,,,,..,,,,.      ..
                                                  .:.           ..
                                                  .:.   ...,,,,,,.
                                                  .,.....,,,:,,,,
                             ,,,.
                          .:;iii;;,
                        .:ii;ii11t1;,
                       ,iiiii11ttttt1;.
                      .i111ii11111ii1;:
                      .;iiiii111iii111i:
                       ,i;;;iii111tt1ii1:
                       .;;iiiii1111111iii.
                       .:,:;;;;;ii111i,:i,          ..,,:,
                      ..:,,:::::;i111i;;i,     :i111111i:,
                   .,:,,...,;;;::;ii1ii;i.   .iffttt111i
                  ,:,........,:::;;;:::..  .,i111ti;;;;:
                .,,...,,,,,..........,. .,;ttii;:::;i;,
               .,..,:;iii1i;:...    .,:;1tfft1;;::::,.
              .,..,;ii111111i,....,:i1ttffft1;,.
              ,...,;;ii111iii,,:i1tffffttt1;,.
             .:...:;;ii1tt1111tffffffft11;:.
             ,,...:;iii1ttttttffffttt1i;:.
            .:,...:;iii1ttttfffttt11i;:,,
            ,:....:;;ii11ttttt11iii;:,..,
           .:,....,,:;iii111ii;;;::,...,.
           ,:......,.,:;;;i;;:,,.......,` */
</style>