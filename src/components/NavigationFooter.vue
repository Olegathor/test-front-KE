<template>
  <li>
    <a :href="hrefLink">
      {{ menuItem }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'NavigationFooter',
  props: ['hrefLink', 'menuItem']
};
</script>

<style lang="stylus">
@import "../utils/utils.styl"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* || [footer] || footer section || - || NOTE || */
.footer-navigation-list li
  padding-right 24px

  +x640()
    padding-bottom 24px
  +x320()
    padding-bottom 24px

/* || [END] || end code || - || NOTE || */

/* `                                                   ..,;;:::::...,,,,:,,,,,,,,
                                                    .,::,,::.1:.
             ,,..        ;;:;,:::,.                .:,:  ,,. ,..
        .1CCi:t;::,     ,1;::itttti:               ,,,. ,.
       :GCCf1i111ii;.   .   .::11ii;.              ..,.
      .CLffttffLLft1i. .   ,:::ii:,:.    ..... ..     .
      tC1LttffftLL1;::.   ,;1tii1ti;    i111,.,,:.    .:,           ..
     ,ti1t;iii::1fi;;::   :;;;;;ii;.    :;i:,::;;.     ;LCffftff1i1Lt.         .
   ,,;;,;::i111tttttfi:.  .itfftLL1:::. :i: :;:::.      18@@@@@@@0Gf.
itLft;;;;:;i11tfttt1ii, ,1CGGCCCLLCCLt. ,:. .,,:,      .GGG80LG8888:
1t:,:if1;1;;i1i1i::,:;;L088CfLC0fi;1;  ,,.    .,.      ,LCtL00GG08@i
;: ,1GC::;,:;i1tii11itGCCLtfLLCCf;,,:  ,,  .   .,      .ft;i;ifCCGG:
i:tG0GftLtf1:::i111fCGft1,.:tti,.         .     .    .:;1tftttttttti;;:;:.  ....
;it;;:,.:;i;,ii.,1C0GCCi.   .,.                     ,t1...;111LLfftii;;t1i,tCGCf
1;,        .;;iifGGCCCi    ..,,                .  .:,..       ....,,,.,.,ifLffi:
CCCL,:fLfi, :1L0GCLLf;      .,.                    ....,,,::,,,,,,,::1ttiitLfttt
1ii:.C8008GiLGCCLfff;       .,.       ..    ......          ::i;::;:,iLLLLCLLLLf
;11:1C0000GCCLLfftf;        .,.       ..,:,,,;;:;;;;;;;;iii1fLCLLCLt1it1ttttt1t1
:;;;iffGCCLffftttt;..        .      .. .,,.........,,,,,:itLttffttfttt1111111i;;
  .: :tLLfftttt1i, .         ,.    ...  ..,,........... ,i1fii1t1111111t1i11tt;t` */
</style>