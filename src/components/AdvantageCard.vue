<template>
  <div class="group-advantage-item">
    <div class="advantage-item-title-img">
      <div class="advantage-title">
        <p class="p1-advantage">{{ title1 }}</p>
        <p class="p1-advantage">{{ title2 }}</p>
      </div>
      <div class="img-item-wrapper">
        <img class="img-item" :src="imgLink" alt="img">
      </div>
    </div>
    <div class="p2-advantage-wrapper">
      <p class="p2-advantage">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageCard',
  props: ['title1', 'title2', 'description', 'imgLink']
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [advantage] || advantage section || - || NOTE || */
.group-advantage-item
  background-color #1C1C1C
  color #DBD9D9
  margin 0 24px 24px 0
  width 264px
  padding 16px
  border-radius 6px
  transition .5s
  height 400px

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
    margin 0

.group-advantage-item:hover
  background-color #373743

.advantage-item-title-img
  +x960()
    display flex
    justify-content space-between
  +x640()
    display flex
    justify-content space-between
  +x320()
    display flex
    justify-content space-between

.advantage-title
  display block

.p1-advantage
  font-style normal
  font-weight 600
  font-size 13px
  line-height 17px
  letter-spacing -0.02em
  text-transform uppercase
  color #FAFAFA

.img-item-wrapper
  display flex
  align-items center
  height 150px

  +x960()
    align-items flex-start
  +x640()
    align-items flex-start
  +x320()
    align-items flex-start

.img-item
  width 94px
  height 94px
  margin 0 auto

.p2-advantage-wrapper
  display flex
  height 185px

  +x960()
    height 76px
  +x640()
    height 116px
  +x320()
    height 116px

.p2-advantage
  display flex
  font-style normal
  font-weight normal
  font-size 15px
  line-height 20px
  letter-spacing -0.5px
  color #DBD9D9
  align-items flex-end

/* || [END] || end code || - || NOTE || */

/* `                                   ,       .:.        ..,,,,,..   ..:,     :
                                       .       ,        .,,,:::;:::,     :.    :
                                       .      ..        ::,,,,::,.,;,    .:    :
                                       .      ..        .,::,,,,,,,::     :.   :
                                       .      ,, ...      .,,,:;::;:.     ,,   :
                                       .       .   ...,.      .,,,,       :.   :
                                       .          .,::::...,,..,         .,    :
                                       .        .:,:;;::::,:::::,...,....      :
                                       .         ,:,:;:::.  . .;;::,:.         :
                                       .          ....,,.....  ::,, .          :
                                       .        .,.,,,,. ....  .,:.,.          :
                                       .         ,,..   ..      ,,,,,.         :
                                       .          .              .,,,:.        :
                                       .              ..         .....,        :
                                       .          .:;iii;i;;iiiii11i;,  ....   :
                                       .        .i11ii1fLt1tf1t1ttt1tt1,   ... :
                                       .       :f111i1tL0Lf1ttfi1iiiii1L;    ..:
                                       .      :L;ittiti1fLCLLLGtf1tfi11;C:     :
                                       .      L1LtfCffC0000GCLfC0LCCf1t;1L     :
                                       .     :LiLLG8GL0GLLLff1L0f1G@Ct1;:f;    :
                                       .     :LifLttt;1fG1f0C1fLL;1t1i:,;Li    :
                                       .     .Cit1;1t11tLtfLGCfi1;:::,,;i:.    :
                                       .      fL;i11i1iitt11t;;;,...,:;1t,,,   :
                                       .      ,Lt;f1:::i1i;;:,.......,:it1,,:, ;
                                       .       ,Ct;11iii;:;,,. ......,,:;t:,.. ;
                                       .        ,C1:::1i,:;...........,:ii;,   ;
                                       .         :C;:,:i,::..........,,:i;1,   ;
                                       .        .,Gi:,.:,,..........,,,,::t, . ;
                                               .,,,,,:i111iiiiiii;,.      .,...;
                                                 :1tfLCCCCCGGGCCCCCLt;. .      :
                                               :fCCCCG088808000800GGG0Gi.      :
                                          .   iGCGGGGGG88888888888888008;      :
                                             :0G08800888@@@@@@@@@@@8@@G00.     :
                                             L08@8@@@@@@@@@@@@@@@@@@880C81     :
                                        .    GG0@@@888@@@@@@@@@@@8@@@@0CG0     :
                                             GGG80G0G08@@@@@@@@@@800GLtfCf     :
                                             t0LGGG008088@@@@800Ltii;;iL:..    :
                                             .00fCG1;itG0GGGLLf;,,...,iGL:,.   :
                                              ,GLfCfi;1Lf1i:,.,....   .;Ci...  :
                                               :8Li;itfi,:,.. .        ,11i    :
                                              .;CC1. ,i. ..            .:;1,.. ;
                                       .       .        . . .,.    .  .:.      :
                                       .  ...:,.   ......,,.:t;...,..;i:.     .;
                                       .    ,i;,,....,,,:;i1tt1i;i:;1:.........:
                                       ::,...   ...,,,:1tfftffftfLCLi.,,,..    :
                                       :;:::;;;;::,,:iLfffft111ttfffCt;it1:,,,.;
                                       ,.......,::ifCGLfffCGfttt11ttfC1it1:... :
                                       ,.........,:tGLtt11LL1i1tttttfL1:,,,,...:
                                       . .. .....,,tfftttttiii1ttffLCC1;,,,,,,,i
                                       :;;:,,,,,,,,tf1ttt11i1tffttffff;,:::,,. :
                                       ,i1;,...;ffi;1;:ii:::iitfff1i;:::,...,,,;
                                       ......:;;i1:,t,.,:,.,,,,;1i;,:,,,::,....;
                                       . .,,,,.....,,..,,...,,::;tti......:tf;.:
                                       ,...    .....::.....,,,,:;ff;,......,;:,;
                                       .          ...;,......,:;,,t.,,.        :
                                       .          ...,:,.,::;i:...;1..,,...... :` */
</style>