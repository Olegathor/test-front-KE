<!-- || [TEMPLATE] || template section || - || NOTE || -->
<template>
  <div class="root">
    <!-- || [header] || header section || - || NOTE || -->
    <header class="header">
      <div class="container navigation">
        <div class="logo"></div>
        <div class="header-navigation">
          <ul class="header-navigation-list">
            <li>
              <a href="#advantages">Преимущества</a>
            </li>

            <li>
              <a href="#indicators">Показатели</a>
            </li>

            <li>
              <a href="#be-a-seller">Партнерство</a>
            </li>

            <li>
              <a href="#questions">Вопросы</a>
            </li>
          </ul>
        </div>

        <a href="https://kazanexpress.ru/">
          <div class="our-product">
            <div class="product-link">
              Наши продукты
            </div>
            <div class="all-products">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="6" height="6" rx="2" />
                <rect x="9" y="1" width="6" height="6" rx="2" />
                <rect x="1" y="9" width="6" height="6" rx="2" />
                <rect x="9" y="9" width="6" height="6" rx="2" />
              </svg>
            </div>
          </div>
        </a>

        <el-menu class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse"
                 background-color="#111111"
                 text-color="#FAFAFA"
                 active-text-color="#FAFAFA">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-more-outline"></i>
              <span slot="title">Меню</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Меню</span>
              <el-menu-item class="el-menu-item-link" index="1-1">
                <el-link :underline="false"
                         href="#advantages"
                         text-color="#FAFAFA"
                         active-text-color="#FAFAFA">
                  Преимущества
                </el-link>
              </el-menu-item>
              <el-menu-item class="el-menu-item-link" index="1-2">
                <el-link :underline="false"
                         href="#indicators">
                  Показатели
                </el-link>
              </el-menu-item>
              <el-menu-item class="el-menu-item-link" index="1-3">
                <el-link :underline="false"
                         href="#be-a-seller">
                  Партнерство
                </el-link>
              </el-menu-item>
              <el-menu-item class="el-menu-item-link" index="1-4">
                <el-link :underline="false"
                         href="#questions">
                  Вопросы
                </el-link>
              </el-menu-item>
              <el-menu-item class="el-menu-item-link" index="1-5">
                <el-link :underline="false"
                         href="https://kazanexpress.ru/">
                  Наши продукты
                </el-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </header>

    <!-- || [main] || main section || - || NOTE || -->
    <main>
      <section class="advantage">
        <div class="container">
          <div class="advantage-container">
            <h1 id="advantages" class="h1-advantage">Почему KazanExpress — <br>лучший маркетплейс для бизнеса</h1>
            <div class="group-advantage">
              <div class="group-advantage-item">
                <div class="advantage-item-title-img">
                  <p class="p1-advantage">Комиссия <br>«Все включено»</p>
                  <div class="img-item">
                    <div class="img-item-1"></div>
                  </div>
                </div>
                <p class="p2-advantage">
                  У нас собственная система логистики, хранения и выдачи заказов. Благодаря ей мы можем установить для
                  партнеров самую низкую комиссию по рынку без дополнительных сборов.
                </p>
              </div>

              <div class="group-advantage-item rotate-320px-1">
                <div class="advantage-item-title-img">
                  <p class="p1-advantage">Бесплатная <br>фотостудия</p>
                  <div class="img-item">
                    <div class="img-item-2"></div>
                  </div>
                </div>
                <p class="p2-advantage">
                  Наши покупатели должны видеть только красивые и качественные фотографии. Поэтому мы построили
                  крупнейшую в России фотостудию и бесплатно делаем предметную и модельную съемку товаров.
                </p>
              </div>

              <div class="group-advantage-item rotate-320px-2">
                <div class="advantage-item-title-img">
                  <p class="p1-advantage">Фирменные <br>пункты выдачи</p>
                  <div class="img-item">
                    <div class="img-item-3"></div>
                  </div>
                </div>
                <p class="p2-advantage">
                  Красивые и уютные пункты выдачи заказов продуманы до мелочей и оставляют позитивные впечатления о
                  маркетплейсе. С ними вы можете быть спокойны за сохранение лояльности постоянных покупателей.
                </p>
                <!--                <p class="p2-advantage">-->
                <!--                  Красивые и уютные пункты выдачи заказов продуманы до мелочей и оставляют позитивные впечатления-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  о маркетплейсе. С ними-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  вы можете быть спокойны-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  за сохранение лояльности постоянных покупателей.-->
                <!--                </p>-->
              </div>

              <div class="group-advantage-item">
                <div class="advantage-item-title-img">
                  <p class="p1-advantage">Доставка <br>до 24 часов</p>
                  <div class="img-item">
                    <div class="img-item-4"></div>
                  </div>
                </div>
                <p class="p2-advantage">
                  Эффективно выстроили все процессы, связанные с логистикой. Поэтому доставляем заказы за один день в
                  любой пункт выдачи KazanExpress или прямо до двери.
                </p>
                <!--                <p class="p2-advantage">-->
                <!--                  Эффективно выстроили-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  все процессы, связанные-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  с логистикой. Поэтому-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  доставляем заказы за один день в любой пункт выдачи KazanExpress или прямо-->
                <!--                </p>-->
                <!--                <p class="p2-advantage">-->
                <!--                  до двери.-->
                <!--                </p>-->
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="statistic">
        <div class="statistic-background">
          <div class="statistic-container">
            <div class="statistic-container-block container">
              <div class="statistic-text">
                <div class="statistic-text-h1">
                  <h1 id="indicators">
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

            <div class="container statistic-graph-text">
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

      <section class="seller">
        <div class="seller-background">
          <div class="container">
            <div class="seller-container">
              <h1 id="be-a-seller" class="h1-seller">Стать продавцом</h1>

              <p class="p-seller">
                Открыть свой бизнес с нами легко. <br>Всего пара шагов — и вот у вас уже есть свой магазин, поток
                клиентов
                и продажи.
              </p>

              <div class="group-seller">
                <div class="group-seller-item">
                  <div class="seller-item-img-1"></div>
                  <p class="seller-item-description">Поможем <br>разработать <br>бренд</p>
                  <p class="seller-item-number">01</p>
                </div>

                <div class="group-seller-item">
                  <div class="seller-item-img-2"></div>
                  <p class="seller-item-description">Бесплатно сделаем <br>фотографии <br>товаров</p>
                  <p class="seller-item-number">02</p>
                </div>

                <div class="group-seller-item">
                  <div class="seller-item-img-3"></div>
                  <p class="seller-item-description">Дадим <br>нужные знания <br>для развития</p>
                  <p class="seller-item-number">03</p>
                </div>

                <div class="group-seller-item">
                  <div class="seller-item-img-4"></div>
                  <p class="seller-item-description">Поможем <br>отправить <br>товары на склад</p>
                  <p class="seller-item-number">04</p>
                </div>

                <div class="group-seller-item">
                  <div class="seller-item-img-5"></div>
                  <p class="seller-item-description">Поможем <br>подготовить <br>товары к продаже</p>
                  <p class="seller-item-number">05</p>
                </div>
              </div>
              <div class="seller-btn">
                <!--                <p>-->
                <button class="be-seller">Стать продавцом</button>
                <!--                </p>-->
                <!--                <p>-->
                <button class="info-seller">Узнать больше</button>
                <!--                </p>-->
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq">
        <div class="faq-container">
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
    </main>

    <!-- || [footer] || footer section || - || NOTE || -->
    <footer>
      <div class="footer">
        <!--        <div class="container">-->
        <div class="footer-container">
          <div class="footer-logo-container">
            <div class="footer-logo"></div>
          </div>
          <div class="footer-navigation">
            <nav>
              <ul class="footer-navigation-list">
                <li>
                  <a href="#be-a-seller">Стать продавцом</a>
                </li>
                <li>
                  <a href="">Предложить свои услуги</a>
                </li>
                <li>
                  <a href="">Открыть пункт выдачи заказов</a>
                </li>
                <li>
                  <a href="">Стать поставщиком товаров</a>
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
              Следите за нами в <a href="https://www.instagram.com/kazanexpress/"><u>Instagram</u></a>
            </p>
          </div>

          <div class="rights">
            <p>
              2021© ООО «Маркетплейс-технологии». ИНН 1615014120. Все права защищены.
            </p>
          </div>
        </div>
        <!--        </div>-->
      </div>
    </footer>

    <!--    <div class="block-header">-->
    <!--      <div class="logo-bh">-->
    <!--        <img class="business" src="../assets/Business.png" alt="Logo" />-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="block-1">-->
    <!--      <div class="text-b1">-->
    <!--        <p>-->
    <!--          Почему KazanExpress —<br>-->
    <!--          лучший маркетплейс для бизнеса-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="block-2">-->
    <!--      <div class="card-b2">-->
    <!--        <p>Hi</p>-->
    <!--      </div>-->

    <!--      <div class="card-b2">-->
    <!--        <p>Hi</p>-->
    <!--      </div>-->

    <!--      <div class="card-b2">-->
    <!--        <p>Hi</p>-->
    <!--      </div>-->

    <!--      <div class="card-b2">-->
    <!--        <p>Hi</p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <article class="block-3">-->
    <!--      <div class="img-b3">-->
    <!--        &lt;!&ndash;      <div class="text-b3">&ndash;&gt;-->
    <!--        &lt;!&ndash;        <p>&ndash;&gt;-->
    <!--        &lt;!&ndash;          Самый быстрорастущий&ndash;&gt;-->
    <!--        &lt;!&ndash;          маркетплейс в Европе&ndash;&gt;-->
    <!--        &lt;!&ndash;        </p>&ndash;&gt;-->
    <!--        &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      </div>-->
    <!--    </article>-->
  </div>
</template>

<!-- || [SCRIPT] || script section || - || NOTE || -->
<script>
export default {
  name: 'Page',
  data() {
    return {
      activeName: '1',
      isCollapse: true
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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

  //+Several(x1280, x1920)
  //  color #ffb300


  +x960()
    //color #e00f0f
    font-size 50px
    line-height 55px
    letter-spacing -1.5px

  +x640()
    //color #1ed760
    font-size 50px
    line-height 55px
    letter-spacing -1.5px

  +x320()
    //color #b565ff
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

/* || [header] || header section || - || NOTE || */
.header
  display flex
  justify-content center
  align-items center
  //width 1280px
  height 70px
  margin 0 auto
  border-bottom 1px solid #323131
  //background-color lightgreen
  background-color #111111
  transition .5s

  +x960()
    width 960px
  +x640()
    width 640px
  +x320()
    width 320px

//padding-left 16px

.header a
  text-decoration none
  color #FAFAFA

.header a:hover
  color rgba(222, 35, 35, 0.9)

.navigation
  display flex
  align-items center

.header-navigation
  display flex
  margin 2px auto 0
  padding 0 0 0 85px
  //justify-content space-between
  width 680px
  transition .5s

  +x960()
    display none
  +x640()
    display none
  +x320()
    display none


//+x640()
//  justify-content center
//  padding 7px 0 0 23px
//+x320()
//  justify-content center
//  padding 7px 0 0 23px

.header-navigation-list,
.our-product
  display flex
  justify-content space-between
  list-style-type none
  //margin 0 18px 0 0;
  font-style normal
  font-weight 500
  font-size 14px
  line-height 32px
  letter-spacing -0.5px

.our-product
  display flex
  align-items center
  transition .5s

  +x960()
    display none
  +x640()
    display none
  +x320()
    display none

.product-link
  margin 0 12px 0 0

.all-products
  display flex
  align-items center

.all-products svg
  fill #FAFAFA

//+x640()
//  display block
//  text-align center
//  margin 0 auto
//+x320()
//  display block
//  text-align center
//  margin 0 auto

.header-navigation-list li
  padding-right 24px

.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
  min-height 400px

.el-menu-vertical-demo
  margin 0 0 0 auto
  transition .5s

  +x1920()
    display none
  +x1280()
    display none

.el-menu-item-link
  text-decoration none

.el-link--inner
  color #FAFAFA

.el-link--inner:hover
  color rgba(222, 35, 35, 0.9)
  opacity 0.9

//.el-submenu__title
//  background-color #111111
//  color #111111
//  border-right #111111

.el-submenu__title i
  color #FAFAFA

.el-menu
  border-right: solid 1px #111111;


//+x640()
//  padding-bottom 24px
//+x320()
//  padding-bottom 24px

// *
.container
  display flex
  //align-items center
  //width calc(60% - 30px)
  //width calc(60.5% - 16px)
  width 1128px
  transition .5s

  +x960()
    width 900px
  +x640()
    width 592px
  +x320()
    width 288px

//margin 0 8px
//padding 8px
//padding-left 8px

//height 72px

.logo
  background-image url("../assets/Business.svg")
  background-size contain
  background-repeat no-repeat
  //width 132px
  //height 18px
  width 140px
  height 21px

/* || [advantage] || advantage section || - || NOTE || */
.advantage
  display flex
  justify-content center
  background-color #111111

//width 1280px
//margin 0 auto

.group-advantage
  display flex
  justify-content space-between
  margin 64px 0 0

  +Several(x1280, x1920)
    //flex-wrap nowrap
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

//width 304px

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

.group-advantage-item
  background-color #1C1C1C
  color #DBD9D9
  margin 0 24px 24px 0
  width 264px
  padding 16px
  border-radius 6px
  transition .5s

  +x960()
    height 266px
    width 436px
    margin 0 2px 24px 2px
    padding-left 18px
    padding-bottom 23px
  +x640()
    height 306px
    width 286px
    margin 0 2px 16px 2px
    padding-left 14px
    padding-bottom 23px
  +x320()
    height 306px
    width 288px
    margin 0 0 16px 0
    padding-left 15px
    padding-bottom 23px


.group-advantage-item:last-child
  margin 0 0 24px 0

  +x320()
    margin 16px 0 0

.rotate-320px-1
  +x320()
    margin 322px 0 0

.rotate-320px-2
  +x320()
    margin -628px 0 0

.advantage-item-title-img
  +x960()
    display flex

.p1-advantage
  font-style normal
  font-weight 600
  font-size 13px
  line-height 17px
  letter-spacing -0.02em
  text-transform uppercase
  color #FAFAFA

.img-item
  display flex

//height 194px

.img-item-1
  background-image url("../assets/box-a.png")
  background-size contain
  background-repeat no-repeat
  width 94px
  height 94px
  margin 26px 0 74px 97px

  +x1280()
    margin 26px 0 74px 86px
  +x960()
    margin 8px 0 43px 181px
  +x640()
    margin -26px 0 43px 154px
  +x320()
    margin -26px 0 43px 155px

//margin 26px 56px 74px 114px

.img-item-2
  background-image url("../assets/cam-2.png")
  background-size contain
  background-repeat no-repeat
  width 98px
  height 98px
  margin 15px 0 61px 66px

  +x960()
    margin 7px 0 42px 206px
  +x640()
    margin -26px 0 21px 154px
  +x320()
    margin -27px 0 20px 152px

.img-item-3
  background-image url("../assets/diamond.png")
  background-size contain
  background-repeat no-repeat
  width 75px
  height 75px
  margin 58px 0 41px 55px

  +x960()
    margin 8px 0 52px 203px
  +x640()
    margin -26px 0 51px 173px
  +x320()
    margin -26px 0 51px 174px

.img-item-4
  background-image url("../assets/Car-1.png")
  background-size contain
  background-repeat no-repeat
  width 102px
  height 102px
  margin 18px 0 74px 91px

  +x960()
    margin 1px 0 50px 209px
  +x640()
    margin -32px 0 42px 153px
  +x320()
    margin -33px 0 43px 153px

.p2-advantage
  font-style normal
  font-weight normal
  font-size 15px
  line-height 20px
  letter-spacing -0.5px
  color #DBD9D9

/* || [statistic] || statistic section || - || NOTE || */
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

//margin 0 auto

.statistic-background
  display flex
  justify-content center
  //background url("../assets/Group-1920.svg") no-repeat center top
  background url("../assets/Group-1920.svg")
  //background-size cover
  background-repeat no-repeat
  background-position center top
  height 622px
  margin 67px 0 0
  transition .5s

  +x1280()
    display flex
    justify-content center
    //background url("../assets/Group-1920.svg") no-repeat center top
    background url("../assets/Group-1920.svg")
    //background-size cover
    background-repeat no-repeat
    background-position center top
    width 1280px
    height 622px
    margin 43px 0 0
  +x960()
    display flex
    justify-content center
    background url("../assets/Group-960.svg")
    //background-size cover
    background-repeat no-repeat
    //background-position center top
    width 960px
    height 660px
    margin 50px 0 0
  +x640()
    display flex
    justify-content center
    background url("../assets/Group-640.svg")
    //background-size cover
    background-repeat no-repeat
    //background-position center top
    background-position top 0px right 149px
    width 959px
    height 819px
    margin -23px 0 0
  +x320()
    display flex
    justify-content center
    background url("../assets/Group-320.svg")
    //background-size cover
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
  //background url("../assets/Group-1920.svg") no-repeat center top
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

//margin 67px 0 0

//.seller-container
//  //overflow hidden

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

//margin 0 0 10px

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

.seller-item-img-1
  background-image url("../assets/circle-star.svg")
  background-size contain
  background-repeat no-repeat
  width 32px
  height 32px
  margin 19px 0 12px 11px

.seller-item-img-2
  background-image url("../assets/camera.svg")
  background-size contain
  background-repeat no-repeat
  width 32px
  height 32px
  margin 22px 0 9px 11px

.seller-item-img-3
  background-image url("../assets/bookmarks.svg")
  background-size contain
  background-repeat no-repeat
  width 32px
  height 32px
  margin 20px 0 11px 14px

.seller-item-img-4
  background-image url("../assets/delivery.svg")
  background-size contain
  background-repeat no-repeat
  width 32px
  height 32px
  margin 24px 0 7px 11px

.seller-item-img-5
  background-image url("../assets/box.svg")
  background-size contain
  background-repeat no-repeat
  width 32px
  height 32px
  margin 22px 0 9px 11px

.seller-item-number
  font-style normal
  font-weight normal
  font-size 12px
  line-height 17px
  letter-spacing -0.25px
  color #646363
  padding 11px 11px

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
  //background-color #111111
  border-radius 6px
  //border none
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
  //border 1px solid #50CE61
  font-style normal
  font-weight 500
  font-size 15px
  line-height 20px
  letter-spacing 0.2px
  color #FAFAFA
  //width 189px
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
  //background-color #111111
  transform translateY(t-0 .65em)

.be-seller:active
  background-color rgba(222, 35, 35, 0.6)
  transition all .4s

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
  //padding 60px 0 0
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
  //justify-content space-between
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
  //margin 0 18px 0 0;
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

//width 1280
//text-align center


/* || [END] || end code || - || NOTE || */

//html, body
//  width 100%
//  height 100%
//  margin-top 0
//  margin-right 0
//  margin-bottom 0
//  margin-left 0
//  overflow-x hidden
//
//body::-webkit-scrollbar
//  width 0
//
//p
//  margin 0
//
//
//.root
//  background-color #111111
//  width 100%
//  height 100%
//
//.block-header
//  display flex
//  max-width 1920px
//  justify-content center
//  align-items center
//
//.logo-bh
//  background-color cornflowerblue
//  margin 0 0 94px 0
//  padding-top 27px
//  padding-bottom 27px
//
//  +Several(x1280, x1440)
//    width 1128px
//
//  +x960()
//    width 928px
//
//  +x640()
//    width 624px
//
//  +x320()
//    width 304px
//
//.business
//  width 132px
//  height 18px
//  vertical-align middle
//
//.block-1
//  background-color blueviolet
//
//  display flex
//  max-width 1920px
//  justify-content center
//  align-items center
//
//
//  font-family Inter
//  font-style normal
//  font-weight bold
//  color #FAFAFA
//
//
//.text-b1
//  background-color indigo
//
//  margin 0
//  height 100%
//
//  +Several(x1280, x1440)
//    font-size 57px
//    line-height 73px
//    letter-spacing -1.75px
//    width 1128px
//
//  +x960()
//    font-size 50px
//    line-height 55px
//    letter-spacing -1.5px
//    width 928px
//
//  +x640()
//    font-size 50px
//    line-height 55px
//    letter-spacing -1.5px
//    width 624px
//
//  +x320()
//    font-size 25px
//    line-height 33px
//    letter-spacing -1px
//    width 304px
//
////flex-basis calc(100% - 888px)
////min-width calc(100% - 320px)
////min-width 936px
////min-height 146px
//
//
//.block-2
//  background-color aquamarine
//
//  display flex
//  flex-wrap wrap
//  text-align left
//  max-width 1920px
//  justify-content center
//  align-items center
//  height 100%
//
//.card-b2
//  border-radius 4px !important
//  padding 16px
//
//  +Several(x1280, x1440)
//    background-color red
//
//    margin 64px 12px
//    flex-basis 232px
//    min-width 232px
//    min-height 368px
//
//  +x960()
//    background-color green
//
//    margin 12px 12px
//    flex-basis 420px
//    min-width 420px
//    min-height 266px
//
//
//  +x640()
//    background-color blue
//
//    margin 8px 8px
//    flex-basis 272px
//    min-width 272px
//    min-height 306px
//
//  +x320()
//    background-color yellow
//
//    margin 8px 16px
//    flex-basis 272px
//    min-width 272px
//    min-height 306px
//
//img
//  margin auto
//
//.block-3
//  //background-color coral
//  //background-image url(../assets/Group-1920.png)
//  height 622px
//  //width fit-content
//  //block-size fit-content
//
//  display flex
//  max-width 1920px
//  justify-content center
//  align-items center
//
////background-size cover
//
//.img-b3
//  //background-color lightgreen
//  background-image url(../assets/Group-1920.png)
//  height 622px
//  ////width fit-content
//  ////block-size fit-content
//  //
//  display flex
//  width 1920px
//  //justify-content center
//  //align-items center
//  //
//  background-size cover

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
