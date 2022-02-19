<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo-container">
        <div class="footer-logo"></div>
      </div>
      <div class="footer-navigation">
        <nav>
          <ul class="footer-navigation-list">
            <NavigationFooter v-for="footerMenuData in navigationMenuFooter"
                              :hrefLink="footerMenuData.hrefLink"
                              :menuItem="footerMenuData.menuItem" />
          </ul>
        </nav>
      </div>

      <div class="footer-text">
        <p>
          Первый в России маркетплейс с бесплатной доставкой всегда за один день
        </p>
      </div>

      <div class="footer-links">
        <p>
          <a href="https://t.me/KazanExpress_Helper_Bot/">@KazanExpress_Helper_Bot</a>
        </p>

        <p>
          Следите за нами в <a href="https://www.instagram.com/kazanexpress_business/"><u>Instagram</u></a>
        </p>
      </div>

      <div class="rights">
        <p>
          2021© ООО «Маркетплейс-технологии». ИНН 1615014120. Все права защищены.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import NavigationFooter from "@/components/NavigationFooter";

export default {
  name: 'FooterPage',
  components: {NavigationFooter},
  data() {
    return {
      navigationMenuFooter: [
        {
          hrefLink: "https://business.kazanexpress.ru/seller/signup",
          menuItem: "Стать продавцом"
        },

        {
          hrefLink: "https://docs.google.com/forms/d/e/1FAIpQLScMT2Q_kGex9HG7hNIte9-cB4Kkxe9nMM5dP4wa5-sVR7ap9Q/viewform",
          menuItem: "Предложить свои услуги"
        },

        {
          hrefLink: "https://pvz.kazanexpress.ru/",
          menuItem: "Открыть пункт выдачи заказов"
        },

        {
          hrefLink: "https://docs.google.com/forms/d/e/1FAIpQLSe1M37zsrMs3DiGYF8KD2juVHIUjl0f6Srxf716izYWEmqmaw/viewform",
          menuItem: "Стать поставщиком товаров"
        },
      ],
    };
  }
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [footer] || footer section || - || NOTE || */
.footer
  display flex
  justify-content center
  border-top 1px solid #323131
  margin 0 0 40px 0

  +x960()
    margin 0 0 31px 0

.footer a
  text-decoration none
  color #FAFAFA

.footer a:hover
  color rgba(222, 35, 35, 0.9)

.footer-container
  width 1128px

  +x960()
    width 960px

.footer-logo-container
  padding-left 8px

.footer-logo
  background-image url("../assets/Business.svg")
  background-size contain
  background-repeat no-repeat
  width 140px
  height 21px
  margin 36px auto 0

.footer-navigation
  display flex
  margin 33px auto 0
  padding 0 0 0 85px
  width 900px

  +x640()
    justify-content center
    padding 7px 0 0 23px
  +x320()
    justify-content center
    padding 7px 0 0 23px

.footer-navigation-list
  display flex
  justify-content space-between
  list-style-type none
  font-style normal
  font-weight normal
  font-size 15px
  line-height 20px
  letter-spacing -0.5px

  +x640()
    display block
    text-align center
    margin 0 auto
  +x320()
    display block
    text-align center
    margin 0 auto

.footer-text
  width 500px
  margin 43px auto 0
  font-style normal
  font-weight 500
  font-size 23px
  line-height 32px
  text-align center
  letter-spacing -0.5px
  color #FAFAFA

  +x640()
    margin 24px auto 0
  +x320()
    margin 24px auto 0
    font-size 15px
    line-height 20px
    width 225px

.footer-links
  display flex
  justify-content space-between
  margin 56px auto 0

  +x960()
    display block
    width 500px
    text-align center
  +x640()
    display block
    width 500px
    text-align center
  +x320()
    display block
    width 500px
    text-align center

.footer-links p
  text-transform uppercase
  font-style normal
  font-weight 600
  font-size 13px
  line-height 17px
  letter-spacing -0.02em
  color #FAFAFA

  +x960()
    margin -8px 0 24px
  +x640()
    margin -8px 0 24px
  +x320()
    margin -8px 0 24px

.rights
  text-align center
  margin -19px 0 0 0

  +x960()
    margin 53px 0 0
  +x320()
    display flex
    justify-content center
    margin 48px 0 0

.rights p
  font-style normal
  font-weight normal
  font-size 12px
  line-height 17px
  letter-spacing -0.25px
  color rgba(173, 172, 172, 0.5)

  +x320()
    width 250px

/* || [END] || end code || - || NOTE || */

/* `                                                   ..,;;:::::...,,,,:,,,,,,,,
                                                    .,::,,::.1:.
             ,,..        ;;:;,:::,.                .:,:  ,,. ,..
        .1CCi:t;::,     ,1;::itttti:               ,,,. ,.
       :GCCf1i111ii;.   .   .::11ii;.              ..,.
      .CLffttffLLft1i. .   ,:::ii:,:.    ..... ..     .
      tC1LttffftLL1;::.   ,;1tii1ti;    i111,.,,:.    .:,           ..
     ,ti1t;iii::1fi;;::   :;;;;;ii;.    :;i:,::;;.     ;LCffftff1i1Lt.         .
   ,,;;,;::i111tttttfi:.  .itfftLL1:::. :i: :;:::.      18@@@@@@@0Gf.
itLft;;;;:;i11tfttt1ii, ,1CGGCCCLLCCLt. ,:. .,,:,      .GGG80LG8888:
1t:,:if1;1;;i1i1i::,:;;L088CfLC0fi;1;  ,,.    .,.      ,LCtL00GG08@i
;: ,1GC::;,:;i1tii11itGCCLtfLLCCf;,,:  ,,  .   .,      .ft;i;ifCCGG:
i:tG0GftLtf1:::i111fCGft1,.:tti,.         .     .    .:;1tftttttttti;;:;:.  ....
;it;;:,.:;i;,ii.,1C0GCCi.   .,.                     ,t1...;111LLfftii;;t1i,tCGCf
1;,        .;;iifGGCCCi    ..,,                .  .:,..       ....,,,.,.,ifLffi:
CCCL,:fLfi, :1L0GCLLf;      .,.                    ....,,,::,,,,,,,::1ttiitLfttt
1ii:.C8008GiLGCCLfff;       .,.       ..    ......          ::i;::;:,iLLLLCLLLLf
;11:1C0000GCCLLfftf;        .,.       ..,:,,,;;:;;;;;;;;iii1fLCLLCLt1it1ttttt1t1
:;;;iffGCCLffftttt;..        .      .. .,,.........,,,,,:itLttffttfttt1111111i;;
  .: :tLLfftttt1i, .         ,.    ...  ..,,........... ,i1fii1t1111111t1i11tt;t` */
</style>