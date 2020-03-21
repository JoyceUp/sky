<template>
  <div>
    <div class="banner">
      <img :src=blockImg>
    </div>
    <div class="prolist prl">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">{{newProTitle ||'分类介绍'}}</li>
      </ul>
      <div class="container mb-3 mytop b_flex" v-if="bigShow">
        <div class="new2_pc myz"><img :src=detailBox.product_image></div>
        <div class="new2_pc">
          <h2>{{detailBox.title}}</h2>
          <div class="mycenter">
            <p class="online b_flex b_wrap">
              <a href="#online-message" class="left b_flex b_topcenter">
                <span class="iconfont iconbianxie"></span>
                邮件咨询
                <span class="iconfont iconyou"></span>
              </a>
              <a href="" class="right">
                <span class="iconfont iconliuyan"></span>
                在线咨询
                <span class="iconfont iconyou"></span>
              </a>
            </p>
          </div>
        </div></div>
      <div class="content">
        <el-row>
          <el-col :span=leftF>
            <leftNav :title='product'></leftNav>
          </el-col>
          <el-col :span=leftR>
            <div class="nodata" :class=" qitaBox.length != 0 ? '' : 'showL'"><img :src=noImg></div>
            <div class="grid-content bg-purple rightBox">
              <!--产品介绍、工程介绍-->
              <div class="related-solution-box">
                <ul class="b_flex b_start b_wrap qitaNew">
                  <li class="three_pc" v-for="(item,i) of qitaBox" :key="i"  @click="jump(item.url)">
                    <span>
                      <img class="media-object" :src=item.thumb>
                    </span>
                    <div class="textWrap-box">
                      <span class="title">
                        {{item.title}}
                      </span>
                      <div class="desc overflow3">
                        <span>{{item.excerpt}}</span>
                      </div>
                      <span class="more">
                  查看详情 <i class="el-icon-d-arrow-right"></i>
                </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="soluBox">
                <ul>
                  <li class="b_flex b_start" v-for="(item,i) of qitaBox" :key="i" @click="jump(item.url)" :class="[leftR==24?'activeHeigght':'']">
                    <div><img :src=item.thumb></div>
                    <div  class="b_flex b_between b_column">
                      <h3 class="over1">{{item.title}}</h3>
                      <p class="desc overflow">{{item.excerpt}}</p>
                      <a class="more">
                        查看详情<i class="el-icon-d-arrow-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <el-pagination
                @current-change="handleCurrentChange"
                layout="prev, pager, next"
                :class=" qitaBox.length == 0 ? 'hiddenL' : ''"
                :page-size=per_page
                :total=total>
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
  import leftNav from './common/leftNav'
  import req from '../apis/http.js'
  export default {
    name: 'detail',
    components:{
      leftNav
    },
    data () {
      return {
        parentId:this.$route.query.parentId,
        noImg:require('../assets/img/nodata.png'),
        leftF:5,
        leftR:19,
        per_page:0,
        total:0,
        product:'product',
        bigShow:'',
        id:window.location.href.split("=")[1],
        titleShow:false,
        newProTitle:'',
        blockImg:'',
        detailBox:[],
        qitaBox:[],
        activeTitle:'',
        bannerId:''
      }
    },
    created(){
      this.banner();
      this.getDetailData()
    },
    watch:{
      $route: {
        handler:function(to, from){
          this.banner(to.name);
          this.$nextTick(function(){  //页面加载完成后执行
            this.getDetailData()
          })
        },
        // 深度观察监听
        deep: true
      },
    },
    methods:{
      jump(target){
        var id=this.$route.query.slug;
        this.$router.push({path:'/detail',query:{url:target,title:id}})
      },
      banner(id){
        var url="http://api.jxhenan.com/api/blocks";
        const NEWSDETAIL= params =>req('get',url,{title:id||'product'});
        let detail=NEWSDETAIL();
        detail.then((res)=>{
          this.blockImg=res.data[0].image;
        }).catch(function(error){
          // console.log(error);
        });
      },
      getDetailData(){
        var id=this.$route.query.slug
        console.log(id)
        var target=''
        if(id=='product'){
          target='product'
          this.leftR=19;
        }else  if(id=='solution'){
          target='solution'
          this.leftR=19;
        }else  if(id=='case'){
          target='case';
          this.leftR=19;
        }else  if(id=='news'){
          target='news';
          this.leftR=24;
        }
        var url=`http://api.jxhenan.com/api/v1/article?slug=${id}`;
        console.log(url)
        const DETAIL= params =>req('get',url);
        let allData=DETAIL();
        allData.then((res)=>{
          console.log(res)
            this.qitaBox=res.data;
            /*分页*/
            this.per_page=res.meta.pagination.per_page;
            this.total=res.meta.pagination.total;

        }).catch(function(error){
          // console.log(error);
        });
      },
      handleCurrentChange(val){
        var id=window.location.href.split("=")[1];
        var target=''
        if(id=='product'){
          target='product'
        }else  if(id=='solution'){
          target='solution'
        }
        var url="http://api.jxhenan.com/api/articles";
        const DETAIL= params =>req('get',url,{category_url:target||id,page:val});
        let allData=DETAIL();
        allData.then((res)=>{
          // console.log(res.meta.pagination)
          this.qitaBox=res.data;
          /*分页*/
          this.per_page=res.meta.pagination.per_page;
          this.total=res.meta.pagination.total;
        }).catch(function(error){
          // console.log(error);
        });
      },
    }
  }
</script>
<style scoped>
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
  .nodata{text-align: center;display: none}
  .nodata img{width: 20%}
  .mytop .myz {
    width: 40%;
    height: 360px;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 1rem;
    -ms-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -o-border-radius: 1rem;
    padding: 0;
    box-sizing: border-box;
  }
  .mytop .myz img {
    width: 100%;
    height: 100%;
  }
  .container>div:last-child{width: 60% !important;}
  .mytop .new2_pc {
    height: 360px;
  }
  .mytop .new2_pc h2 {
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 15px;
  }
  .mycenter {
    position: relative;
  }
  .mycenter p:last-child {
    padding-top: 2rem;
  }
  .mytop .new2_pc p {
    color: #333;
    text-align: left;
  }
  .online a {
    font-size: 1rem !important;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    align-items: center;
  }
  .online a .iconfont{margin:0 10%;font-size: 1rem !important;}
  .online a:hover .iconfont{margin:0 5%;}
  .mytop .new2_pc p:last-child a {
    padding: 13px 13px;
    border-radius: 5px;
    color: #fff;
    margin-right: 10px;
  }
  .mytop .new2_pc p:last-child a:first-child {
    background: #17294e;
  }
  .mytop .new2_pc p:last-child a:last-child {
    background: #ff1010;
  }
  .mytop .new2_pc p:last-child a {
    width: 25%;
    padding: 13px 13px;
    border-radius: 5px;
    color: #fff;
    margin-right: 10px;
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
  .related-solution-box .related-solution-title {
    text-align: center;
  }
  .related-solution-title h2 {
    font-size: 2rem;
    font-weight: normal;
    width: 255px;
    margin: 0 auto 40px auto;
    padding-bottom: 10px;
    border-bottom: 7px solid #ff9c00;
  }
  .qitaNew li>span{display: block;width: 100%;height:160px;border-radius: 0.8rem;overflow: hidden}
  .qitaNew li img {
    width: 100%;
    height: 100%;
  }
  .related-solution-box .textWrap-box .title {
    margin-top: .5rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .textWrap-box .desc {
    font-size: 1rem;
    line-height: 18px;
    height: 55px;
  }
  .soluBox .more,
  .textWrap-box .more {
    margin-top: 1.25rem;
    display: inline-block;
    padding: .5625rem .875rem;
    color: #ffffff;
    background: #0e0e0e;
  }
  .soluBox .more{width: 20%;text-align: center}
  .soluBox .more i{margin-left: 1rem;}
  .qitaNew>li{cursor: pointer}
  .qitaNew>li:hover{transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);}
  .soluBox li:hover .more,
  .qitaNew>li:hover .more{
    background: #ffb400;
  }
  .content-right p img {
    display: block !important;
    margin: 0 auto !important;
  }
/*.soluBox>ul>li{height: }*/
  .soluBox>ul>li{cursor: pointer;padding: 3% 0;height: 11.5rem;}
  .soluBox>ul>li + li{border-top: 1px solid #ccc;}
  .soluBox>ul>li>div:nth-child(1){width: 30%;border-radius: 10px;overflow: hidden}
  .soluBox>ul>li>div:nth-child(1) img{width: 100%;height: 100%}
  .soluBox>ul>li>div:nth-child(2){width:70%;box-sizing: border-box;padding-left: 2%;}
  .soluBox li:hover img{transform: scale(1.1)}
  .activeHeigght{height: 200px !important;}
  .showL{display: block !important;}
  .hiddenL{display: none !important;}
</style>
