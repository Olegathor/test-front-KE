<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo-container">
        <div class="footer-logo"></div>
      </div>
      <div class="footer-navigation">
        <nav>
          <ul class="footer-navigation-list">
            <li>
              <a href="https://business.kazanexpress.ru/seller/signup">
                Стать продавцом
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScMT2Q_kGex9HG7hNIte9-cB4Kkxe9nMM5dP4wa5-sVR7ap9Q/viewform">
                Предложить свои услуги
              </a>
            </li>
            <li>
              <a href="https://pvz.kazanexpress.ru/">
                Открыть пункт выдачи заказов
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1M37zsrMs3DiGYF8KD2juVHIUjl0f6Srxf716izYWEmqmaw/viewform">
                Стать поставщиком товаров
              </a>
            </li>
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
export default {
  name: 'FooterPage'
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

.footer-navigation-list li
  padding-right 24px

  +x640()
    padding-bottom 24px
  +x320()
    padding-bottom 24px

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