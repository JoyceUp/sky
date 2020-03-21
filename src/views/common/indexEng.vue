<template>
  <div class="titles prl">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>工程介绍</span>
        <i>ENGINEERING</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <div class="solution">
      <p>金鑫是<span>油脂工程技术、</span><span>工程服务</span>和<span>油脂工程</span>上下产业链的领先供应商。</p>
      <ul class="solutionBox b_flex b_start b_wrap">
        <li class="width_pc b_flex b_between b_column b_topcenter">
          <div class="imgWrap b_flex b_scenter b_topcenter">
            <img :src=img.a1 >
          </div>
          <div class="word">
            <router-link to="/solution?category_url=oil-and-fats"> <h3>油脂工程</h3> </router-link>
          </div>
          <router-link to="/solution?category_url=oil-and-fats" class="more btn">MORE &gt;</router-link>
        </li>
        <li class="width_pc b_flex b_between b_column b_topcenter">
          <div class="imgWrap  b_flex b_scenter b_topcenter">
            <img :src=img.a2 >
          </div>
          <div class="word">
            <router-link to="/product?category_url=starch-processing-engineering"> <h3>淀粉加工工程</h3> </router-link>
          </div>
          <router-link to="/product?category_url=starch-processing-engineering" class="more btn">MORE &gt;</router-link>
        </li>
        <li class="width_pc b_flex b_between b_column b_topcenter">
          <div class="imgWrap b_flex b_scenter b_topcenter">
            <img :src=img.a3 >
          </div>
          <div class="word">
            <router-link to="/product?category_url=grain-processing-engineering"> <h3>粮食加工工程</h3> </router-link>
          </div>
          <router-link to="/product?category_url=grain-processing-engineering" class="more btn">MORE &gt;</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>


<script>
  export default {
    name: "indexEng",
    data(){
      return{
        img:{
          a1:require('../../assets/img/ocean-solution1.png'),
          a2:require('../../assets/img/ocean-solution3.png'),
          a3:require('../../assets/img/ocean-solution2.png'),
        },
        proList:[],
        titleicon:require('../../assets/img/i-titel.png')
      }
    },
    methods:{

    },
    created() {
    }
  }
</script>

<style scoped>
  .solution>p {
    color: #000000;
    font-size: 1.2rem;
    text-align: center;
  }
  .solution>p>span {
    color: #ff8105;
  }
  .solutionBox{margin: 4% 0}
  .solutionBox .imgWrap {
    height: 200px;
    width: 200px;
    position: relative;
    border-radius: 50%;
    box-sizing: border-box;
    border: 10px solid #ffe3c8;
    background: #ff8105;
  }
  .solutionBox .word {
    height: 45px;
    line-height: 45px;
  }
  .solutionBox h3 {
    color: #333333;
    font-size: 1.3rem;
    text-align: center;
  }
  .solutionBox .btn {
    color: #fff;
    border: none;
    position: relative;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
  }
  .solutionBox .more {
    color: #ffffff;
    padding: .3rem 1.1rem;
    margin-top: .3rem;
    -webkit-border-radius: .3rem;
    -ms-border-radius: .3rem;
    -o-border-radius: .3rem;
    -moz-border-radius: .3rem;
    border-radius: .3rem;
    background: #ff8105;
    display: inline-flex;
  }
  .btn{    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
  .solutionBox .btn:before, .solutionBox .btn:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #ff8105;
    transition: 400ms ease all;
  }
  .solutionBox .btn:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  .solutionBox li:hover .btn:before,
  .solutionBox li:hover .btn:after {
    width: 100%;
    transition: 800ms ease all;
  }
  .solutionBox li:hover .more {
    background: #fff;
    color: #4c4c4c;
  }
  .solutionBox .imgWrap i {
    width: 100%;
    height: 0;
    padding-top: 100%;
    border-radius: 50%;
    background: #FFB830;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50%;
    margin-left: -50%;
    animation: mymoveOne 3s infinite;
    -webkit-animation: mymoveOne 2.5s infinite;
    z-index: -1;
  }
  .solutionBox li:hover img{
    transform: scale(1.1);
  }
</style>
