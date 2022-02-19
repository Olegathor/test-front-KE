<template>
  <header class="header">
    <div class="container navigation">
      <div class="logo"></div>
      <div class="header-navigation">
        <ul class="header-navigation-list">

          <NavigationMenu v-for="menuData in navigationMenu"
                          :hrefLink="menuData.hrefLink"
                          :menuItem="menuData.menuItem" />
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

            <NavigationBurger v-for="burgerData in navigationBurger"
                              :indexBurger="burgerData.indexBurger"
                              :hrefLink="burgerData.hrefLink"
                              :menuItem="burgerData.menuItem" />
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </header>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu";
import NavigationBurger from "@/components/NavigationBurger";

export default {
  name: 'HeaderPage',
  components: {NavigationBurger, NavigationMenu},
  data() {
    return {
      isCollapse: true,
      navigationMenu: [
        {
          hrefLink: "#advantages",
          menuItem: "Преимущества"
        },

        {
          hrefLink: "#indicators",
          menuItem: "Показатели"
        },

        {
          hrefLink: "#be-a-seller",
          menuItem: "Партнерство"
        },

        {
          hrefLink: "#questions",
          menuItem: "Вопросы"
        },
      ],
      navigationBurger: [
        {
          indexBurger: "1-1",
          hrefLink: "#advantages",
          menuItem: "Преимущества"
        },

        {
          indexBurger: "1-2",
          hrefLink: "#indicators",
          menuItem: "Показатели"
        },

        {
          indexBurger: "1-3",
          hrefLink: "#be-a-seller",
          menuItem: "Партнерство"
        },

        {
          indexBurger: "1-4",
          hrefLink: "#questions",
          menuItem: "Вопросы"
        },

        {
          indexBurger: "1-5",
          hrefLink: "https://kazanexpress.ru/",
          menuItem: "Наши продукты"
        },
      ]
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [header] || header section || - || NOTE || */
.header
  display flex
  justify-content center
  align-items center
  height 70px
  margin 0 auto
  border-bottom 1px solid #323131
  background-color #111111
  transition .5s

  +x960()
    width 960px
  +x640()
    width 640px
  +x320()
    width 320px

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
  padding 0 0 0 166px
  width 680px
  transition .5s

  +x960()
    display none
  +x640()
    display none
  +x320()
    display none

.header-navigation-list,
.our-product
  display flex
  justify-content space-between
  list-style-type none
  font-style normal
  font-weight 500
  font-size 14px
  line-height 32px
  letter-spacing -0.5px

.our-product
  display flex
  align-items center
  transition .5s
  padding-right 16px
  font-size 16px

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

.el-link--inner
  color #FAFAFA

.el-link--inner:hover
  color rgba(222, 35, 35, 0.9)
  opacity 0.9

.el-menu
  border-right: solid 1px #111111;

.el-submenu__title i
  color #FAFAFA

.logo
  background-image url("../assets/Business.svg")
  background-size contain
  background-repeat no-repeat
  width 140px
  height 21px

/* || [END] || end code || - || NOTE || */

/* `                              .:;it1i;:,,..
                               .:i1tfffLLLf1i;,,,.
                             .:;;i1tffLfLLCLti:,,,,.
                           .,,,:iLLLLLffffftti;:,,,,.
                           :,,,;11i;;i11ii:,,,,,,,,,,,
                          ,:..,:;,.,,,:;;::,...,,:,,.,.
                          ;,..,,,:tf1;;;::::::::;;:,..,
                          ,....,;fLLCCCCLt111tt1;;;,,.,
                          ....,i1ttffLCCCLfffft1;;::,.,
                          ....,i11ttfLLLLfffftt1;;:::.,
                          ::..,;tt1tffLCLLLffffti::::,,
                          ;i,.:i1ttt1ttffLLfLL1:,,,,,:.
            .1i:      .....11:;11i;;;::,:;1tt;,,::,,::
            ;0Ct1:..,Lif1,:ifLf11ii11ii;:;ift::;;;;;;:
             :t1ti::,:,::,,,iLfLftt1t1ttfCLCC;i1ttf1i:
              ;11ii:;ii1;f0Ci11fiifLttGGCLLLG1;;i11i;,
              1Lt1111i...;t1::::,,iLftf1itttf1:::::::.
            .iC0GGG00C:...  :1;Gi,,iii;itti;;:::,:;;:
            tftft1iii;:,:;1tfC;:;:;1t1tttttft1;::;::.
            .1fti;i1ttfLLCG00CffCt,:;;i1ffft1ii;;,,,
            .LGCffffffffttffftti:,..,,,:i1tfft1;,;;..
           .;L1tftt1iii111iii:.......,i:,,::::,,:i;...
          ..Lt:1fLfft11it1,;: ........;t,........ .......
         .,.G1,i;;;i11ii:.,,,...........,...... ...... ..,..
        ,,..GG,;;;::;:;i..,:,................,::,..............
       ,....i@1,;111;it, .,::..............;fLLtf1,...............
      ,..... t@;:1iiGG, ...:: .............,f00GGC; ................
     ,....... L8:.18G, ...it1,...............t880G1..................
    ,..........8L1@C.,;iiitt1iiii:........... t808f ..................
   ............,:;i..,,::,:,,,,................f08t ...................
   ,...........    ...  ........................fG; ...............  .,
  ..............................................,i.................;, .,
  ,................................................................Lt...,
 ,............................................................... ;i:...,,
.,.................................................................  ....,,
,.........................................................................,.
,..........................................................................,
...........................................................................,.
  ..........................................................................,
      ......,. ..............................................................,
             ,................................................................,
              ,...............................................................,.
               , ..............................................................,` */
</style>