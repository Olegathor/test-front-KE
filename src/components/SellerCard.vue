<template>
  <div class="group-seller-item">
    <img class="seller-img-item" :src="imgLink" alt="img">
    <div class="item-description-number">
      <p class="seller-item-description">{{ description1 }}</p>
      <p class="seller-item-description">{{ description2 }}</p>
      <p class="seller-item-description">{{ description3 }}</p>
      <p class="seller-item-number">{{ number }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerCard',
  props: ['imgLink', 'description1', 'description2','description3', 'number']
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [seller] || seller section || - || NOTE || */
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

.item-description-number
  +Several(x1280, x1920)
    margin -3px 0 0
  +x960()
    margin -5px 0 0 3px
  +x640()
    margin -5px 0 0
  +x320()
    margin -4px 0 0

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

.seller-img-item
  width 32px
  height 32px
  margin 19px 0 12px 11px

.seller-item-number
  font-style normal
  font-weight normal
  font-size 12px
  line-height 17px
  letter-spacing -0.25px
  color #646363
  padding 11px 11px

/* || [END] || end code || - || NOTE || */

/* `
.                                                     .,,:,,::,,
.                                                  ,;i1iiii1tfffti.
.                                                ,;tft1ii;ittfLfffii1;.
.                                              ;tt11LLf1i;itt1i;1f11tft:
.                                     .       ;f111tLfti;:it1;;i1f1;11t1
.                                     .       i1t1111ii;;::1fffft11i1tii.
.                                     .       iit1;;i;;;:::i11ttttt11t11,
.                                     .      ,1tti:::::::::;iiiiiii;;1tt:
.                                            ,;1i;::::,:,:::iiii,:i: ,,.
.                                                ::::,,,,,::;iiii1;
.                                                .;;::,,,.,,,:;1f1.
.                                     .           ;;;;:::,....,,,.
.                                     .           ;i;;:::::,..
.                                     .           ;iii;;;::,;,
.                                                ,1111111;;tf;
.                                                .:;;iii11tt1:    Panik
.                                                       ...
.                             ..
.                                                      ......
.                                                   ,;;;;;;i111i:
.                                     .           ;1111ii;ittffff1.
.                                     .         .tCLffti;;1ttffttLf.
.                                     .         1CLCLLti;;11ii;ittt:
.                                     .        ,fttt11i;;:iftit1t1;;.
.                                     .        :tiiii;;;::;ttfft11t1.
.                                    ..        ,i;;;;::::::iii1111i:
.                                    .,         :::::::::::;iii;:;;.
.                                    ..         ,::::,,,,::;iii:;i:
.                                     .          ::::,,,,,,::i1tt;
.                                                ,;;;:,,,...,,;ii.
.                                                .;;;;::::,,.
.                                                .i;;;::::,,,
.                                                :111iii;::1i
.                                                :i1111t11ff1,   Kalm
.                                                  ..,,,:::,.
.
.                                     .                                        .
.                                                     ..,,,::,,.
.                                                  .:;iiiii1tttt1;
.                                                ,itt11iiiitffLfffi;:.
.                                              ;1t1tffti;i1tt111t11tffi.
.                                            ,tft11LLf1i;;11i;;;tti111f1
.                                            if111111ii;;:itt1ftt1iit11t
.                                            1i1tiiii;;;::;1tfftttt1ttit.
.                                     .      iit1;;;;::::::iiii111i;1ttt:
.                                     .     ,ffti::::::::::;iii;:;;;,ii:.
.                                     .     ..:ii:::,,,,,::;iii:;i;.
.                                     .         :;:::,,,,,,::;1tfi.
.                                                ;;;;:,,,...,,;i;.
.                                                ,i;;:::::,,...
.                                                ,i;;;::::,,:
.                                                i1111ii;::1i.
.                                               .ii1111111tft:
.                                     .          .:;;;::;ii;:.   Panik`,` */
</style>