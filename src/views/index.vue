<template>
  <div class="box">
    <div class="h_box">
      <swiperBox></swiperBox>
      <hotProBox></hotProBox>
      <indexEng></indexEng>
      <indexChoose></indexChoose>
      <caseBox></caseBox>
      <aboutBox></aboutBox>
      <newsBox></newsBox>
      <coopBox></coopBox>
    </div>
  </div>
</template>
<script>
  import  swiperBox from './common/swiper';
  import  hotProBox from './common/indexHotPro';
  import  indexEng from './common/indexEng';
  import  indexChoose from './common/indexChoose';
  import  caseBox from './common/indexCase';
  import  aboutBox from './common/indexAbout';
  import  newsBox from './common/indexNews';
  import  coopBox from './common/indexCoop';
  export default {
    name: 'index',
    components:{
      swiperBox,
      hotProBox,
      indexEng,
      indexChoose,
      caseBox,
      aboutBox,
      newsBox,
      coopBox
    },
    data () {
      return {
        height:{
          top:''
        },
        animate:{
          animate1:''
        },
        index:0,
      }
    },
    mounted(){
    },
    created(){},
    methods:{}
  }

</script>
<style scoped>

</style>
