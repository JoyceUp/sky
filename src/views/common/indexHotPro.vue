<template>
  <div class="titles prl">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>热门产品</span>
        <i>HOT PRODUCTS</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <ul class="prolistBox b_flex b_start b_wrap">
      <li v-for="(item,i) of proList" :key=i class="width_pc">
          <a @click="jump(item.url)">
            <img :src=item.thumb :alt=item.title>
          </a>
          <div class="mmap">
            <a  @click="jump(item.url)">查看更多
              <span class="iconfont iconjiang-right"></span>
            </a>
          </div>
          <div class="mb">
            <h5><a  @click="jump(item.url)" class="hvr-shutter-out-horizontal">{{item.title}}</a></h5>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {HOTPRO} from '../../apis/allAxios'
  export default {
    name: "indexHotPro",
    data(){
      return{
        proList:[],
        titleicon:require('../../assets/img/i-titel.png')
      }
    },
    methods:{
      jump(target){
        this.$router.push({path:'/detail',query:{url:target,title:'product'}})
      },
      handleSelect() {
        let proData = HOTPRO();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
        proData.then((res)=>{
          this.proList=res.data;
        }).catch(function(error){
          // console.log(error);
        });

      },
    },
    created() {
      this.handleSelect()
    }
  }
</script>

<style scoped>
.prolistBox li{
  overflow: hidden;
  height: 24rem;
  position: relative;
  cursor: pointer;

}
.prolistBox li>a{height: 20.5rem;display: block;position: relative;}
.prolistBox li>a img{width: 100%;height: 100%;}
.prolistBox li img{width: 100%;}
.mmap {
  position: absolute;
  width: 100%;
  height:20.5rem;
  top:0;
  background: rgba(0,0,0,0);
  text-align: center;
  transition: all .4s;
  -moz-transition: all .4s;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
}
.mmap>a {
  font-size: 1.2rem;
  border: 1px solid #fff;
  border-radius: 2rem;
  color: #fff;
  display: none;
  padding: .5rem 3.5rem .5rem 2rem;
  transition: all .4s;
  -moz-transition: all .4s;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
}
.prolistBox li .mb h5 {
  text-align: center;
  color: #fff;
  font-weight: 100;
  margin: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hvr-shutter-out-horizontal {
  box-sizing: border-box;
  color: #000;
  font-size:1.2rem;
  display: inline-block;
  width: 100%;
  padding: 1rem;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0,0,0,0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before{
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f67524;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.prolistBox li:hover .mmap{
  background: rgba(0,0,0,.6);
  display: block;
  padding-top: 9rem;
  height:20.5rem;box-sizing: border-box;
}
.prolistBox li:hover .mmap>a{
   display:  inline-block;
 }
.prolistBox li:hover a{
  border-color: #f67524;
  color: #f67524;
}
.prolistBox li:hover .mb h5 {
  transition: all .6s;
  box-sizing: border-box;
  white-space: normal;
}
.prolistBox li:hover .hvr-shutter-out-horizontal,
.prolistBox li:focus .hvr-shutter-out-horizontal,
.prolistBox li:active .hvr-shutter-out-horizontal {
  color: white;
}
.prolistBox li:hover .hvr-shutter-out-horizontal:before,
.prolistBox li:focus .hvr-shutter-out-horizontal:before,
.prolistBox li:active  .hvr-shutter-out-horizontal:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
