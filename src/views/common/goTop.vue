<template>
  <div class="scrollTop" v-show="showTop" @click="toTop">
    <img :src=top>
  </div>
</template>
<script>
  export default {
    name: 'goTop',
    data (){
      return {
        top:require('../../assets/img/top2.png'),
        scrollTop: 0,
        time: 0,
        dParams: 20,
        scrollState: 0
      }
    },
    computed:{
      showTop: function(){
        let value = this.scrollTop>200?true:false;
        return value;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop);
    },
    methods: {
      toTop(e) {
        if(!!this.scrollState){
          return;
        }
        this.scrollState = 1;
        e.preventDefault();
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let _this = this;
        this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
      },
      gotoTop(distance){
        this.dParams += 20;
        distance = distance>0 ? distance : 0;
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
        if(this.scrollTop < 10){
          clearInterval(this.time);
          this.dParams = 20;
          this.scrollState = 0;
        }
      },
      getScrollTop() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },

  }
</script>
<style scoped>
  .scrollTop {
    position: fixed;
    right: 10px;
    bottom: 80px;
    cursor: pointer;
    animation:top 3s infinite;
  }
  .scrollTop img{width: 50px;}
  @keyframes top {
    0%,
    100% {
      transition-timing-function: cubic-bezier(0.215,.61,.355,1); /*贝塞尔曲线 ： X1 Y1 X2 Y2*/
      transform: translate3d(0,0,0); /*设置只在Z轴上移动*/
    }
    50%{
      transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
      transform: translate3d(0,-20px,0);
    }
    80%{
      transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
      transform: translate3d(0,-10px,0);
    }
  }
</style>
