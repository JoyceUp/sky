<template>
  <div class="titles prl">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>关于我们</span>
        <i>ABOUT US</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <div class="about">
      <div class="leftimg">
        <img :src=oceana>
      </div>
      <div class="about-us-text">
        <p>河南金鑫智能装备有限公司是油脂设备与工程、淀粉设备与工程、发酵设备与工程等领域的专业公司。集团是国家高新技术企业，拥有“博士后科研工作站”，具有压力容器设计和制造资质，通过了ISO9001质量管理体系认证、ISO14000环境管理体系认证、ISO18000职业健康安全管理体系认证、ASME论证、欧洲CE认证。</p>
        <p>河南金鑫智能装备有限公司是油脂设备与工程、淀粉设备与工程、发酵设备与工程等领域的专业公司。</p>
        <p><router-link to="/about">more+</router-link></p>
      </div>
    </div>
  </div>

</template>


<script>
  export default {
    name: "indexAbout",
    data(){
      return{
        caseList:[],
        titleicon:require('../../assets/img/i-titel.png'),
        oceana:require('../../assets/img/oceana.png'),
      }
    },
    methods:{
    },
    created() {
    }
  }
</script>

<style scoped>
.about{position: relative;
  height: 405px;}
.about .about-us-text {
  width: 54%;
  position: absolute;
  right: 7%;
  top: 15%;
  padding: 2% 2% 2% 8%;
  background: #ff8105;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.about .about-us-text p {
  color: #fff;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin-top: 15px;
}
.about .about-us-text p a {
  display: block;
  width: 92px;
  text-align: center;
  height: 35px;
  line-height: 35px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  text-transform: capitalize;
}
.leftimg{position: absolute;top:0;left:7%;z-index: 999}
</style>
