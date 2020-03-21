<template>
  <div class="single">
    <div class="banner">
<!--      <img :src=blockImg>-->
      <img :src=extop>
      <div class="exword">
        <h2>专注于油脂设备的研发和生产</h2>
        <p>我们公司出口安装到全球50多个国家，具有丰富的项目设计生产和安装经验，为客户提供定制化的服务，获得客户的一致好评。
        </p>
      </div>
    </div>
    <div class="prolist prl singbox">
      <h2>油脂设备设计. 生产. 安装. 质保一站式服务</h2>
      <span>已经有15452人提交</span>
      <div class="contform">
        <formBox></formBox>
      </div>
      <h1>油脂工程解决方案</h1>
      <ul class="b_flex b_between b_wrap yzbox yz">
        <li v-for="(item,i) of listData.data" :key="i">
          <img :src=item.img>
          <p>{{item.exp}}</p>
        </li>
      </ul>
      <h1>产品安装现场</h1>
      <ul class="b_flex b_between b_wrap yzbox azbox">
        <li v-for="(item,i) of azData.data" :key="i">
          <img :src=item.img>
        </li>
      </ul>
      <h1>我们的服务项目</h1>
      <ul class="b_flex b_start b_wrap servicea">
        <li v-for="(item,i) of serData.data" :key="i" class="over1">
          <i class="el-icon-star-on"></i>
          <span>{{item.exp}}</span>
        </li>
      </ul>
      <h2>获取更多油脂设备方案报价</h2>
      <span>已经有15452人提交</span>
      <div class="contform">
        <formBox></formBox>
      </div>
      <a href="tel://18937656047" class="el-button el-button--warning ipzm"><span class="iconfont iconphone"></span>拨打电话</a>
    </div>
  </div>
</template>

<script>
  import mapBox from './common/map'
  import formBox from './common/form-m'
  import req from '../apis/http.js'
  export default {
    name: 'about',
    components:{
      mapBox,
      formBox
    },
    data () {
      return {
        radio: '0',
        indexActive:0,
        aboutData:['公司介绍','企业文化','企业相册','服务','专利'],
        url:this.$route.query.url,
        title:this.$route.query.title,
        product:'product',
        bigShow:true,
        titleShow:false,
        qitaShow:false,
        newProTitle:'',
        blockImg:'',
        qitaBox:[],
        certiData:[],
        activeTitle:'',    //标题
        extop:require('../assets/img/extop.jpg'),
        listData:{
          'data':[
            {
              'img':require('../assets/singlepage/sing1.jpg'),
              'exp':'棕榈油工程设备'
            },{
              'img':require('../assets/singlepage/sing2.jpg'),
              'exp':'棕榈仁油工程设备'
            },{
              'img':require('../assets/singlepage/sing3.jpg'),
              'exp':'椰子油工程设备'
            },{
              'img':require('../assets/singlepage/sing4.jpg'),
              'exp':'葵花籽油工程设备'
            },{
              'img':require('../assets/singlepage/sing5.jpg'),
              'exp':'大豆油工程设备'
            },{
              'img':require('../assets/singlepage/sing6.jpg'),
              'exp':'菜籽油工程设备'
            },{
              'img':require('../assets/singlepage/sing7.jpg'),
              'exp':'棉籽油工程设备'
            },{
              'img':require('../assets/singlepage/sing8.jpg'),
              'exp':'玉米油压榨设备'
            },{
              'img':require('../assets/singlepage/sing9.jpg'),
              'exp':'茶籽油工程设备'
            },{
              'img':require('../assets/singlepage/sing10.jpg'),
              'exp':'亚麻籽油工程设备'
            },{
              'img':require('../assets/singlepage/sing12.jpg'),
              'exp':'花生油工程设备'
            },{
              'img':require('../assets/singlepage/sing11.jpg'),
              'exp':'芝麻油工程设备'
            },
            ]},
        azData:{
          'data':[
            {
              'img':require('../assets/singlepage/bing1.jpg'),
            },{
              'img':require('../assets/singlepage/bing2.jpg'),
            },{
              'img':require('../assets/singlepage/bing3.jpg'),
            },{
              'img':require('../assets/singlepage/bing4.jpg'),
            },{
              'img':require('../assets/singlepage/bing5.jpg'),
            },{
              'img':require('../assets/singlepage/bing6.jpg'),
            },{
              'img':require('../assets/singlepage/bing7.jpg'),
            },{
              'img':require('../assets/singlepage/bing8.jpg'),
            },{
              'img':require('../assets/singlepage/bing9.jpg'),
            },{
              'img':require('../assets/singlepage/bing10.jpg'),
            }
          ]},
        serData:{
          'data':[
            {
              'exp':'30-5000吨/天PLC控制预压、挤出、脱壳、预处理生产线',
            },{
              'exp':'50-5000吨/天PLC控制溶剂萃取线',
            },{
              'exp':'30-3000Ton/天PLC控制油连续物理/化工炼油线',
            },{
              'exp':'50-1000Ton/天PLC控制防冻/脱蜡/分馏线',
            },{
              'exp':'30-500吨/天PLC控制低温脱溶生产线',
            },{
              'exp':'5-600吨/天PLC控制超细香花生油/冷压生产线',
            },{
              'exp':'20-200吨/天PLC控制花生低温烘干及去红去皮线',
            },{
              'exp':'5-600吨/天PLC控制超细香花生油/冷压生产线',
            },{
              'exp':' 5-50吨/天PLC控制大豆浓缩磷脂/粉体磷脂生产线',
            },{
              'exp':'PLC控制大豆/花生/葵花籽组织蛋白/浓缩蛋白/分离蛋白系',
            },{
              'exp':'30-5000吨/天PLC控制预压、挤出、脱壳、预处理生产线',
            },{
              'exp':'50-5000吨/天PLC控制溶剂萃取线',
            },{
              'exp':'30-3000Ton/天PLC控制油连续物理/化工炼油线',
            },{
              'exp':'50-1000Ton/天PLC控制防冻/脱蜡/分馏线',
            },{
              'exp':'30-500吨/天PLC控制低温脱溶生产线',
            },{
              'exp':'5-600吨/天PLC控制超细香花生油/冷压生产线',
            },{
              'exp':'20-200吨/天PLC控制花生低温烘干及去红去皮线',
            },{
              'exp':'5-600吨/天PLC控制超细香花生油/冷压生产线',
            },{
              'exp':'5-50吨/天PLC控制大豆浓缩磷脂/粉体磷脂生产线',
            },{
              'exp':' PLC控制大豆/花生/葵花籽组织蛋白/浓缩蛋白/分离蛋白系',
            }
          ]}
      }
    },
    created(){
      this.banner();
    },
    methods:{
      banner(){
        var url="http://api.jxhenan.com/api/blocks";
        const NEWSDETAIL= params =>req('get',url,{title:'contact'});
        let detail=NEWSDETAIL();
        detail.then((res)=>{
          this.blockImg=res.data[0].image;
        }).catch(function(error){
          // console.log(error);
        });
        const CERTI= params =>req('get',url,{title:'certificates'});
        let data=CERTI();
        data.then((res)=>{
          this.certiData=res.data;
        }).catch(function(error){
          // console.log(error);
        });
      },
    },
    watch:{
      '$route'(to, from) {
        var hash = window.location.hash;
        var index = hash.lastIndexOf("#");
        if (index != -1) {
          var id = hash.substring(index + 1, hash.length + 1);
          var div = document.getElementById(id);
          if (div) {
            setTimeout(function () {
              document.documentElement.scrollTop=div.offsetTop+600
              document.body.scrollTop=div.offsetTop+600
            }, 500);
          }
        }
      }
    },
    mounted() {
      var hash = window.location.hash;
      var index = hash.lastIndexOf("#");
    },
  }
</script>
<style scoped>
  .ipzm{color: #fff}
  .ipzm .iconfont{color: #fff;margin-right: 5%}
  .servicea>li{font-size: 1.8rem;padding: 1% 0}
  .servicea>li>i{color: #ff9907}
  .servicea>li,
  .azbox>li img{width: 100%}
  .azbox>li{padding: .5%;box-sizing: border-box}
  .yzbox>li{width: 50%;text-align: center}
  .yzbox>li>p{font-size: 2rem;font-weight: bold;margin: 10% 0;}
  .singbox>h2{font-size: 2rem;margin: 3% 0;}
  .singbox>h1{font-size: 3rem;margin: 3% 0 6% 0;text-align: center}
  .singbox>span{font-size:1.5rem;color: #666}
  .banner{position: relative;}
  .banner>div.exword{width:80%;position: absolute;top:50%;left:50%;background: rgba(0,0,0,.7);color: #fff;padding:5% 3%;box-sizing: border-box;margin-top: -15%;margin-left: -40%}
  .banner>div.exword>h2{font-size: 4rem;margin-bottom:3%;text-align: center}
  .banner>div.exword>p{font-size: 1.6rem;text-align: center}
  .contform{padding: 4% 0}
  .contform h2{background: #3c3c83;color: #fff;padding:1.5% 1%;font-size: 1.2rem;}
  .contform h2>i{margin-right: 1%;font-size: 1.6rem}
  .contform>div{border-top:0;}
@media only screen and (max-width: 767px) {
  .banner>div.exword{
    width: 90%;
    margin-left: -45%;
  }
  .yz>li img{width: 85%}
  .contform>div{padding: 0 !important;}
  .banner>div.exword>h2{
    font-size: 3rem;
    margin-bottom: 5%;
    text-align: center;
  }
  .yzbox>li>p,
  .singbox>h2{font-size: 2.2rem}
  .servicea>li, .azbox>li img{
    width: 100%;
    height: 100%;
  }
}
</style>

