<template>
  <section class="statistic">
    <div class="statistic-wrapper statistic-background">
      <div id="indicators" class="statistic-container">
        <div class="statistic-container-block">
          <div class="statistic-text">
            <div class="statistic-text-h1">
              <h1>
                Самый быстрорастущий маркетплейс в Европе
              </h1>
            </div>

            <div class="statistic-text-p">
              <p>
                Мы стремительно растем.
              </p>
              <p>
                Успейте занять лидирующие позиции в своей нише на KazanExpress.
              </p>
            </div>
          </div>

          <div class="statistic-circle-text">
            <p class="circle-percent">672%</p>
            <p class="circle-description">Динамика роста <br>компании за год</p>
          </div>
        </div>

        <div class="statistic-graph-text">
          <p class="graph-text-p1">
            Открыли <br><span class="green-graph-text">30 городов</span>
          </p>

          <p class="graph-text-p2">
            <span class="green-graph-text">1 000 000</span> <br>покупателей
          </p>

          <p class="graph-text-p3">
            Вышли на <span class="green-graph-text">25 000 <br>заказов</span> в сутки
          </p>

          <p class="graph-text-p4">
            Переехали на <br><span class="green-graph-text">новый склад</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistic'
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [statistic] || statistic section || - || NOTE || */
.statistic-container-block,
.statistic-graph-text
  display flex
  width 1128px
  transition .5s

  +x960()
    width 900px
  +x640()
    width 592px
  +x320()
    width 288px

.statistic
  width 100%

  +x1280()
    display flex
    justify-content center
  +x960()
    display flex
    justify-content center
  +x640()
    display flex
    justify-content center
  +x320()
    display flex
    justify-content center

.statistic-background
  display flex
  justify-content center
  background url("../assets/Group-1920.svg")
  background-repeat no-repeat
  background-position center top
  height 622px
  margin 43px 0 0
  transition .5s

  +x1280()
    display flex
    justify-content center
    background url("../assets/Group-1920.svg")
    background-repeat no-repeat
    background-position center top
    width 1280px
    height 622px
    margin 43px 0 0
  +x960()
    display flex
    justify-content center
    background url("../assets/Group-960.svg")
    background-repeat no-repeat
    width 960px
    height 660px
    margin 50px 0 0
  +x640()
    display flex
    justify-content center
    background url("../assets/Group-640.svg")
    background-repeat no-repeat
    background-position center top
    width 959px
    height 819px
    margin -23px 0 0
  +x320()
    display flex
    justify-content center
    background url("../assets/Group-320.svg")
    background-repeat no-repeat
    background-position center top
    width 959px
    height 644px
    margin 16px 0 0

.statistic-container-block
  transition .5s

  +x640()
    display block
  +x320()
    display block

.statistic-text
  color #FAFAFA

  +x640()
    margin 486px 0 0
  +x320()
    margin 385px 0 0

.statistic-circle-text
  color #FFFFFF

  +x960()
    margin 0 0 0 46px
  +x640()
    margin -638px 0 0
  +x320()
    margin -520px 0 0

.green-graph-text
  color #50CE61

.statistic-text-h1
  margin 21px 0 0
  transition .5s

  +x960()
    width 600px
    margin 11px 0 0 2px

.statistic-text-p
  font-style normal
  font-weight 500
  font-size 23px
  line-height 32px
  letter-spacing -0.5px
  margin 40px 0 0
  width 420px
  transition .5s

  +x960()
    margin 31px 0 0 2px
  +x640()
    margin 31px 0 0 1px
  +x320()
    width 255px
    font-size 15px
    line-height 24px
    margin 23px 0 0

.circle-percent
  font-style normal
  font-weight 600
  font-size 106px
  line-height 130%
  letter-spacing -0.04em
  margin 133px 48px 0 0
  transition .5s

  +x960()
    font-size 83px
    margin 77px 42px 0 0
  +x640()
    font-size 124.5px
    margin 0 0 0 134px
  +x320()
    font-size 88px
    margin 46px 0 0 33px

.circle-description
  font-style normal
  font-weight 600
  font-size 13px
  line-height 130%
  text-align center
  letter-spacing -0.02em
  text-transform uppercase
  margin -17px 42px 39px 0
  transition .5s

  +x960()
    margin -1px 37px 0 0
  +x640()
    font-size 19.5px
    margin 2px 0 0 1px
  +x320()
    font-size 19.5px
    margin 11px 0 0 4px

.statistic-graph-text
  color #FAFAFA
  font-style normal
  font-weight 600
  font-size 13px
  line-height 130%
  letter-spacing -0.02em
  text-transform uppercase
  padding 136px 0 0 20px

  +x960()
    padding 160px 0 0 22px
  +x640()
    display none
  +x320()
    display none

.graph-text-p1
  margin 0 110px 0 0

.graph-text-p2
  margin 0 96px 0 0

.graph-text-p3
  margin 0 72px 0 0

/* || [END] || end code || - || NOTE || */

/* `                                                       ,1,
                              ......                     .ifL1
                           .;1ttttLLf1,                 ;fffff,
                          :LCLfttfLLLLL:              ,tffffffi
                         ,CCCLf11ff1tff;            ,1Lffffffff.
                         iLttt11ifLLLfft.           :iitffffffLi
                         ;t1111ii1fffff1               ffffft;i1.
                         ,1iiiiii1tt1it,              ifffff,
                          ;1i;;;;i1tff:              .fffff1
                          ,t1ii;:::;i;               ifffff,
                         .,;11iii;:                 .fffff1
                    ..,,.,,.,iftitGi...             ifffff,
                .,,,::::,,,,..;LLLGt::::,,,.       .fffff1
                ;,,,,,,,,,,,,,.,;tfi,::,,::::,     ;fffff,
                ::,,,,,,,,..,:,,.:ft,::,,:,,::.   .fffff1
                ,i:,,,,,,,,..,,,,,,;,:::,:,,,::   ;fffff,
                .1:,,,,,,,,..,,,:,,,::,,,:,,,,:, .fffff1
                 ;;:,,,,,:, ..,,,::,,,:,,:,,,,::.,1tfff:
                 ,1;:,,,,;f:.,,,,,,:,..,,:,..,,::,  ..,
                  ;i::,,,,,:,,:,,:,:::,,,;1:,.,,,:,
                  .;;;:,,,,,,,,,::::::::::LGC;,,,,:.
                   .;;:,,.,,,,,,,,,,,,,,:::;;:,,,,,:
                    ,:::,.....,,,,,,,,,,,:,,,,,,,,,:.
                    ....,....,,,,,,.....,,,,,,,,,,,,.
                    ,,..     .,::;:........,,,,,...
                    :,,......      ............
                    :,...........   ....:,...,.
                    ,,............. ...,1;,,,,.
                                        ..` */
</style>