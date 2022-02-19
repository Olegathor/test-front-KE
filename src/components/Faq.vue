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
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

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

/* || [END] || end code || - || NOTE || */

/* `                                                                   .
                        ....,,,,.....                               .,:,.
                     .,,::::::::::::::,,..                       ,;1tLttf1:.
                   .,::::::::::::::::::::,.                    .1CGCLCLftCCf:
                  ,:::::::::::iLLLt:;::::,.                     1CGGCCLCttLLf.
                .::::::::;::i;LGGGGfL1;:,.                       :1LLt1LL:it:
               ,::::::::11;11i11tGGCttf:.                          ..  .,.
              .:::::::;tLtittti1itti111;.
              .:::it1:;11iiC00tfi1f;Gft1.
              .::1CLLftCCC1tfftt1LGttft:
               .,tGCCLGGGGGCCCCCGGCCLGC:
                 :fCCLCGGGGGGGGGCCCCGGC:          .,;,
                 .:ittCGGGGGGGGCffttCGL.        :1LLt,
                   ,,iGGCCGGGGGGCCLCGGi       .1CGL;.
                 .:;11GGGCCCCGGGGGCGGt.      :LGGL:......,,:;i1i;.
                iLG0GLCCCCCCCCCCCCGGf,     .iCGGGCLLLLfLLCCCCCLft,
                ;11111fC00GGCCGCCCC00Cft;, ;GGGGGGGGGGGGGCCCLft;,
               .111iiii1f0@0LffCGGC8@@@@@0LfGGGGGGGGGGGGGGCf1;,
        .,;i1ttLGGGC1iiiiit1iiiLGGCG88@@@@GCGGGGGGGGGGGCf1:,
      :1CGGG000000GGGL1iiiiiiiifGGGGCCG0@8CGGGGGGGGGCf1:.
    ,tG00000GG00000GG0GLtiiiiiitGGGGGG0GGCCGGGGGGC1:,
   ,C00000000GG00000GCG00Cf1iii1fLCG00GCCGGGGGGGCf;,..
   t0000000000CG000000CG000GCf1iiii1LGCGGGGGGGGCCGGGC1i:,.
   L0000000000GCG000000CG00000GL1ii1LGGGGGGGGGCt1LGGL1LL1;i;;:,,...
   1000000000000GGG00000C000000GCLCCCCCCCCCGGGL1tG0C1tLf;1CLLLftt1i;;:,,.
   .L0000000000000CG0000GG000GGG000000CG0GLCGL1100GL1ffi;fLLCfCLCtLCffLi:
    ,L0000000000000GG0000G00CG00000000GLCGGLL1i1G0Gttft;;1ffLLCCCfCCffL;.
     ,t0000000000000G000GGGGGGGGGGG00000CCGGtii1G0G1ffi;i1i;;;i11tffLLt:
       ;C0000000000000GGGG00000000GG00000GG0Lii1G0Ltff;;itCLf1;;;;;;;;;.
        .iLGG00000000000000000000000G00000GL1iiiCGtLLt;;;;1CGGL1;;;;;;:
           ,:;i1tfLLLLCCCCCCCCCCLLLLftt11i:.....,,it1:,,,,,;tLCCfi;;::.
                     ............                            .,:::..` */
</style>