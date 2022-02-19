<!-- || [TEMPLATE] || template section || - || NOTE || -->
<template>
  <div class="root">
    <!-- || [header] || header section || - || NOTE || -->
    <HeaderPage />

    <!-- || [main] || main section || - || NOTE || -->
    <main>
      <Advantage />

      <Statistic />

      <Seller />

      <Faq />
    </main>

    <!-- || [footer] || footer section || - || NOTE || -->
    <FooterPage />
  </div>
</template>

<!-- || [SCRIPT] || script section || - || NOTE || -->
<script>
import HeaderPage from "@/views/HeaderPage";
import Advantage from "@/views/Advantage";
import Statistic from "@/views/Statistic";
import Seller from "@/views/Seller";
import Faq from "@/views/Faq";
import FooterPage from "@/views/FooterPage";

export default {
  name: 'Page',
  components: {Faq, Seller, Statistic, Advantage, FooterPage, HeaderPage},
  data() {
    return {};
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

  methods: {},

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

  +x960()
    font-size 50px
    line-height 55px
    letter-spacing -1.5px

  +x640()
    font-size 50px
    line-height 55px
    letter-spacing -1.5px

  +x320()
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

.container
  display flex
  width 1128px
  transition .5s

  +x960()
    width 900px
  +x640()
    width 592px
  +x320()
    width 288px

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
