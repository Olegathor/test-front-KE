<template>
  <section class="faq">
    <div class="faq-wrapper faq-container">
      <div>
        <h1 id="questions" class="h1-faq">Часто задаваемые вопросы</h1>
      </div>

      <div class="accord-faq">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item name="1">
            <template slot="title">
              <div class="faq-header">
                У меня нет опыта в продажах и в работе с маркетплейсом. Я могу стать продавцом?
              </div>
            </template>

            <div>
              Мы предлагаем брендам продавать свои товары на KazanExpress без лишних хлопот. Вы поставляете товары
              нам, а взамен получаете новый рынок сбыта, прямой договор и стабильную прибыль.
            </div>
          </el-collapse-item>

          <el-collapse-item name="2">
            <template slot="title">
              <div class="faq-header">
                Я боюсь, что мои товары не будут продаваться
              </div>
            </template>

            <div>
              <q>
                Иным людям богатство только и приносит, что страх потерять его.
              </q>
              <br><i>— Антуан де Ривароль, французский писатель</i>
            </div>
          </el-collapse-item>

          <el-collapse-item name="3">
            <template slot="title">
              <div class="faq-header">
                Как часто можно выводить средства и сколько взимается комиссия?
              </div>
            </template>

            <div>
              Чаще, чем вам хочется, меньше, чем вы думаете.
            </div>
          </el-collapse-item>

          <el-collapse-item name="4">
            <template slot="title">
              <div class="faq-header">
                Спустя 10 лет, кто убил Марка?
              </div>
            </template>

            <div>
              Это серкетная информация.
            </div>
          </el-collapse-item>

          <el-collapse-item name="5">
            <template slot="title">
              <div class="faq-header">
                А маркетплейс в один день не обанкротится? Какая вероятность, что это произойдет?
              </div>
            </template>

            <div>
              <q>
                Только взаимный страх делает союз надежным.
              </q>
              <br><i>— Фукидид, древнегреческий историк</i>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Faq',
  data() {
    return {
      activeName: '1',
    };
  }
  // props: {
  //   activeName: {}
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
.faq
  display flex
  justify-content center
  transition .5s

  +x640()
    height 892px
  +x320()
    height 1353px

.faq-container
  height 714px
  transition .5s

  +Several(x1280, x1920)
    margin 48px 0 0 0
  +x960()
    height 836px
    margin -10px 0 12px 1px
  +x640()
    width 592px
    margin 25px 0 0 2px
  +x320()
    width 288px
    margin 18px 0 0 2px

.h1-faq
  margin 0 0 12px -1px
  transition .5s

  +x960()
    width 520px
    font-style normal
    font-weight bold
    font-size 57px
    line-height 73px
    letter-spacing -1.75px
    color #FFFFFF


.accord-faq
  transition .5s
  width 1126px
  margin 40px 0 0

  +x960()
    width 896px
  +x640()
    width 592px
  +x320()
    margin 31px 0 0
    width 288px

.faq-header
  +x320()
    padding 0 40px 0 0

.el-collapse
  border-top 1px solid rgba(255, 255, 255, 0.15)

.el-collapse-item__header
  transition .5s
  color #ffffff
  background-color #111111
  border-bottom 1px solid rgba(255, 255, 255, 0.15)
  font-family Inter
  font-style normal
  font-weight 500
  font-size 23px
  line-height 32px
  letter-spacing -0.5px
  padding-top 25px
  padding-bottom 22px
  height 100%

.el-collapse-item__content
  transition .5s
  color rgba(219, 217, 217, 0.8)
  background-color #111111
  font-family Inter
  font-style normal
  font-weight normal
  font-size 15px
  line-height 24px
  letter-spacing -0.5px

.el-collapse-item__arrow
  margin: 4.5px 8px auto auto

.el-collapse-item__wrap
  border-bottom 1px solid #323131
  background-color #323131

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