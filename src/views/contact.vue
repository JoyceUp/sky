<template>
  <div>
    <div class="banner">
      <img :src=blockImg>
    </div>
    <div class="prolist prl">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">Contact</li>
      </ul>
      <div class="content contactBox">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple leftNav">
              <div class="asideTitle">
                <span class="textMidSon">河南金鑫智能装备有限公司</span>
              </div>
              <ul class="contaList">
                <li><span class="iconfont iconphone"></span>+86-15738819095</li>
                <li><span class="iconfont iconyoujian"></span>oceanhn@oceanhn.com</li>
                <li><span class="iconfont icondizhi"></span>河南省新乡市凤泉区产业集聚区</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="12">
            <mapBox></mapBox>
          </el-col>
        </el-row>
      </div>
      <div class="contform">
        <h2 class="b_flex b_topcenter"><i class="el-icon-edit-outline"></i>联系我们</h2>
        <formBox></formBox>
      </div>
    </div>
  </div>
</template>

<script>
  import mapBox from './common/map'
  import formBox from './common/form'
  import req from '../apis/http.js'
  export default {
    name: 'about',
    components:{
      mapBox,
      formBox
    },
    data () {
      return {
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
        img1:require('../assets/img/ban011.jpg'),
        img2:require('../assets/img/s_banner.jpg'),
        photo:{
          p1:require('../assets/img/p1.jpg'),
          p2:require('../assets/img/p2.jpg'),
          p3:require('../assets/img/p3.jpg'),
          p4:require('../assets/img/p4.jpg'),
          p5:require('../assets/img/p5.jpg'),
          p6:require('../assets/img/p6.jpg'),
        }
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
  .contform{padding: 4% 0  6% 0}
  .contform h2{background: #3c3c83;color: #fff;padding:1.5% 1%;font-size: 1.2rem;}
  .contform h2>i{margin-right: 1%;font-size: 1.6rem}
  .contform>div{border: 1px solid #ccc;border-top:0;padding: 2%}
  .prolist .breadcrumb {
    background: none;
    padding-top: 2rem;
    padding-left: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    border-radius: .25rem;
  }
  .breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    color: #6c757d;
    content: "/";
  }
  .breadcrumb-item+.breadcrumb-item {
    padding-left: .5rem;
    color: #999;
  }
  .content{padding:2% 0; }
  .common-border,
  .common-border2
  {
    padding-bottom: .5rem;
    border-bottom: #ff3f3f 0.01rem solid;
    margin: 2rem 0;
  }
  .common-border2 h3{
    color: #17294e;
    font-size: 1.75rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 10px;
  }
  .common-border h3 {
    color: #17294e;
    font-size: 1.75rem;
    font-weight: normal;
    border-left: 6px solid #ff3f3f;
    padding-left: 20px;
    text-transform: capitalize;
  }
  .rightBox{padding: 0 5%}
  .textMidSon{color: #000}
  .aboutList>li{padding: 5% 10%;cursor: pointer}
  .aboutList>li>i{margin-right: 3%}
  .aboutList>li.active{background: #ff9c00 !important;color: #fff}
  .service>ul>li{width: 50%;box-sizing: border-box;padding-bottom:.5%}
  .service>ul>li:hover{transform: translateX(10px)}
  .service>ul>li:hover a{color: #ff9c00}
  .itemImg img{width: 20%;box-sizing: border-box;display: inline-block;padding: 1% 1.2%}
  .contaList>li{color: #0d2048;font-size: 1rem;font-weight:bold;padding: 2% 0}
  .contaList>li>.iconfont{margin-right: 2%;}
</style>

