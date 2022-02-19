<template>
  <section class="advantage">
    <div class="advantage-wrapper container">
      <div class="advantage-container">
        <h1 id="advantages"
            class="h1-advantage">
          Почему KazanExpress — <br>лучший маркетплейс для бизнеса
        </h1>
        <div class="group-advantage">
          <AdvantageCard v-for="cardData in advantages"
                         :title1="cardData.title1"
                         :title2="cardData.title2"
                         :description="cardData.description"
                         :imgLink="cardData.imgLink" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdvantageCard from "@/components/AdvantageCard";

export default {
  name: 'Advantage',
  components: {AdvantageCard},
  data() {
    return {
      advantages: [
        {
          title1: "Комиссия",
          title2: "«Все включено»",
          description: "У нас собственная система логистики, хранения и выдачи заказов. Благодаря ей мы можем установить для партнеров самую низкую комиссию по рынку без дополнительных сборов.",
          imgLink: "/img/box-a.png"
        },

        {
          title1: "Бесплатная",
          title2: "фотостудия",
          description: "Наши покупатели должны видеть только красивые и качественные фотографии. Поэтому мы построили  крупнейшую в России фотостудию и бесплатно делаем предметную и модельную съемку товаров.",
          imgLink: "/img/cam-2.png"
        },

        {
          title1: "Фирменные",
          title2: "пункты выдачи",
          description: "Красивые и уютные пункты выдачи заказов продуманы до мелочей и оставляют позитивные впечатления о маркетплейсе. С ними вы можете быть спокойны за сохранение лояльности постоянных покупателей.",
          imgLink: "/img/diamond.png"
        },

        {
          title1: "Доставка",
          title2: "до 24 часов",
          description: "Эффективно выстроили все процессы, связанные с логистикой. Поэтому доставляем заказы за один день в любой пункт выдачи KazanExpress или прямо до двери.",
          imgLink: "/img/Car-1.png"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [advantage] || advantage section || - || NOTE || */
.advantage
  display flex
  justify-content center
  background-color #111111

.group-advantage
  display flex
  justify-content space-between
  margin 64px 0 0

  +Several(x1280, x1920)
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

/* || [END] || end code || - || NOTE || */

/* `          ..,,:::;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::1ffLLLLLLLLLLL
             ..,,::;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;::::iiiiiiii;ii11ttttttttt
          .,,,:;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,:;iiiiiiiiiiiii;;;;;;;;;;
        .,..,:;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,t1iiiiiiiiiiiiiiiiiiiiiiiii
           :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  ;C00L1iiiiiiiiiiiiiiiiiiiiiii
          :iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,  :tG0000Gfiiiiiiiiiiiiiiiiiiiiii
::::::,,..;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:. ,tG00000000Liiiiiiiiiiiiiiiiiiiii
;;;;iiii::iiiiiiiiiiiiiiiiiiiii;iiiiiiiiii;.  ;C00000000000C1iiiiiiiiiiiiiiiiiii
11i;::;i;;iiiiiiiiiiiiiiii;;;iiii;iiiiii;,  :f0Ct11fC0000000G1;iiiiiiii;;;;i:;ii
11111i;:;iiiiiiiiiiiiiiiiiiiiiiii:;iii;,  ,tG00i,. .,iL000000L,:iii;;;;itLCf:ii;
1111111i:;iiiiiiiiiiiiiiiiiiii;;iii;:,..,:t0000t,    .:L0000C;,,;;;ifCG88@@L:;;:
11111111i;iiiiiiiiiiiiiiiiiiiiiii;;;:::;ii;f000Gt:.. .:f000L;,::;tG8@@@@88Gt:;;i
11111111i;iiiiiiiiiiiiiiiiiiiiiii,.:,::;;ii;f0000Cft1tLG0Gf::,,iC8@@8@80CC0C;iii
11111111;;iiiiiiiiiiiiiiiiiiii;,.  :;;:;:;ii;1C00000000GLi::,iC8@88@80CG8@@81;;i
1111iii;;iiiiiiiiiiiiiiiiiii;,  ..:iiii;:;iii;itCGGGCLti;:::f8@888@8CC8@@@@@8L1i
1111;;;;;;;;iiiiiiiiiiiiii;.  .iLCt;;ii;;iiiiii;;i;:::,:::;L8@888@0L0@@@@@@@@8Gf
1111111i;;:;iiiiiiiiiiii;,  .1C0000Gt;;iiiiiiiiiii;:;;;;;;G@8888@GC8@@@@@@@8GG08
111111i;;;;:iiiiiiiiiii:.  :LGLLLCG00C1;;iiiiiiiiiiiiii;iG@888@@CC@@@@@@@0CG8@@@
i1111111111;;iiiiiiiii:  .1GL;,..,iL000Li;iiiiiiiiiiii;i0@888@@0C@@@@@@8CC8@@@@@
.,;i11111111;;iiiiiii:  ;L001,    .:f000Gi:iiiiiiiii;;;C@8888@@@@@@@@8GC8@@@@@@@
   .,:;iiiii;:;iiiii:  iGG00L:.    .;G000L,;iiii;::::::C8@@8@@@@@@@@0C0@@@@@@@@@
        ..... .:iiii: .tGGG00L1;,..,iGGGGf.:;iii;,..,. .:f88@@@@@@@CC8@@@@@@@@@@
                :iii;.:;tGGGG00GCLffCGGGL:,:iiii;..f0i    L@@@@@@@@8@@@@@88@@@@@
                 ,:ii;ii;1LGGGGG00GGGGGf;::;ii;;, ;8t.    f@@@@@@@@@@@@@@@8@@@@@
                   ,;iiiii;1LGGGGGGGGLi,:;:;i1tfi .:      C@@@@@@@@@8GLC8@@@@@@@
                    .:iiiii;i1fLCCCCt:,:;;:1C08@0i:::::;;i0@@@@@@@0LiiG@@@@@@@@@
                      ,;iiiiii;iii;:,:;;;;t8@@8@@@88888@@@@@8088G1::f8@@@@@@@@@@
                       .:iiiiiiii;;;;iii;f8@@@@@@@@@@@@@@@@@@8Gi,,t08G0@@@@@@@@@
                         ,;iiiiiiiiiiii;i8@80GG@@@@@@@@@@@@@@8t:1G80G88888@@@@@@
                          .:iiiiiiiiiii;180CC0@@@@@@@@@@@@@@@CL08008@@888@@@@@@@
                            :iiiiiiiiii;;CG88@@@@@8GG0@@@@@@@@@@@@@888@@@@@@@@@@
                            ,iiiiiiii;:::0@@8@@8GGG0@@@@@@888@@@@@@@@@@@@@@@@@@@` */
</style>