<template>
  <div class="titles prl chbg">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>为什么选择我们</span>
        <i>WHY CHOOSE US ?</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <ul class="choose  b_flex b_start b_wrap">
      <li class="shos_pc">
        <div>
          <img class="card-img-top" :src=img.cho1>
        </div>
        <div class="card-body">
          <h3 class="card-title">优势</h3>
          <ul>
            <li><a href="">30多年的行业经验</a></li>
            <li><a href="">2000 +员工</a></li>
            <li><a href="">年销售额750亿元</a></li>
          </ul>
        </div>
      </li>
      <li class="shos_pc">
        <div>
          <img class="card-img-top" :src=img.cho2>
        </div>
        <div class="card-body">
          <h3 class="card-title">研究与开发</h3>
          <ul>
            <li><a href="">500 +技术人员</a></li>
            <li><a href="">研发年销售额5%</a></li>
            <li><a href="">国家高新技术企业</a></li>
          </ul>
        </div>
      </li>
      <li class="shos_pc">
        <div>
          <img class="card-img-top" :src=img.cho3>
        </div>
        <div class="card-body">
          <h3 class="card-title">制造工艺</h3>
          <ul>
            <li><a href="">SPS制造系统</a></li>
            <li><a href="">焊接机器人</a></li>
            <li><a href="">数控卧式机</a></li>
            <li><a href="">现场管理</a></li>
          </ul>
        </div>
      </li>
      <li class="shos_pc">
        <div>
          <img class="card-img-top" :src=img.cho4>
        </div>
        <div class="card-body">
          <h3 class="card-title">服务</h3>
          <ul>
            <li><a href="">24小时客户服务</a></li>
            <li><a href="">一站式服务</a></li>
            <li><a href="">全球安装调试</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

</template>


<script>
  export default {
    name: "indexChoose",
    data(){
      return{
        img:{
          a1:require('../../assets/img/ocean-solution1.png'),
          a2:require('../../assets/img/ocean-solution3.png'),
          a3:require('../../assets/img/ocean-solution2.png'),
          cho1:require('../../assets/img/ocean2_24.jpg'),
          cho2:require('../../assets/img/ocean2_26.jpg'),
          cho3:require('../../assets/img/ocean2_28.jpg'),
          cho4:require('../../assets/img/ocean2_30.jpg'),
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
 .chbg{background: #ccc url("../../assets/img/why-choose.jpg") no-repeat;background-size:cover }
 .chbg h1,
 .chbg h1 i{
   color: white !important;
 }
 .choose li{    border-radius: 4px;
   overflow: hidden;}
 .choose li>div:nth-child(1){
   height: 240px;
 }
 .choose li:hover{
   transform: translateY(-10px);
 }
 .choose li:hover .card-body{
   background: #000;
 }
 .choose li:hover img{
   transform: scale(1.1);
 }
 .choose li:hover h3,
 .choose li:hover a
 {color: #ff8105;}
 .choose li>div img{width: 100%;height: 100%}
 .choose{
   border: 0;
   height: 100%;}
 .choose .card-title {
   text-align: left;
   color: white;
 }
 .choose .card-body{padding: 1.25rem;    background: #ff8105;    height: 8.2rem; }
 .card-body h3{font-size: 1.5rem;font-weight: normal;    margin-bottom: .75rem;}
 .card-body ul li a {
   color: #ffffff;
 }
</style>
