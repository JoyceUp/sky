<template>
  <div>
    <div class="banner">
      <img :src=blockImg>
    </div>
    <div class="prolist prl">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">{{activeTitle || '分类介绍'}}</li>
      </ul>
      <div class="nodata" :class=" detailBox==undefined ? 'showL' : ''"><img :src=noImg></div>
      <div class="container mb-3 mytop b_flex b_wrap" v-if="bigShow" :class=" detailBox==undefined ? 'hiddenL' : ''">
        <div class="new2_pc myz"><img :src=detailBox.product_image></div>
        <div class="new2_pc">
          <h2>{{detailBox.title}}</h2>
          <div class="mycenter">
            <div class="canshu">
              <p v-for="(item,i) of canData" :key="i" v-if="canshuShow"><span>{{item.key}}:</span>{{item.value}}</p>
              <p v-if="canshuHidden">抱歉，暂无数据！</p>
            </div>
            <p class="online b_flex b_wrap">
              <a class="left b_flex b_topcenter" @click="showZhezhao()">
                <span class="iconfont iconbianxie"></span>
                免费获取报价
                <span class="iconfont iconyou"></span>
              </a>
              <a href="" class="right">
                <span class="iconfont iconliuyan"></span>
                在线咨询
                <span class="iconfont iconyou"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="5">
            <leftNav :title='product'></leftNav>
          </el-col>
          <el-col :span="19">
            <div class="grid-content bg-purple rightBox">
              <div class="common-border" v-if="bigShow">
                <h3>{{activeTitle||'详细介绍'}}</h3>
              </div>
              <div class="common-border2" v-else>
                <h3>{{detailBox.title}}</h3>
              </div>
              <div v-html=detailBox.body class="content-right detailB" style="line-height: 30px;font-size: 1.1rem">
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Pop v-show="PopShow"></Pop>
    <div class="zhezhao" v-show="zzShow" id="zhezhao">
      <div class="zhebox animated fadeInDown">
        <i class="el-icon-close" @click="closeBtn()"></i>
        <h3>请填写如下信息获取报价：</h3>
        <FormBox></FormBox>
      </div>
    </div>
  </div>
</template>

<script>
  import FormBox from './common/form'
  import leftNav from './common/leftNav'
  import Pop from './common/pop'
  import req from '../apis/http.js'

  export default {
    name: 'detail',
    components: {
      leftNav,
      Pop,
      FormBox
    },
    data() {
      return {
        zzShow: false,
        PopShow: false,
        jiejue: window.location.href.split("=")[1],
        url: this.$route.query.slug,
        p: this.$route.query.p,
        title: this.$route.query.title,
        product: 'product',
        bigShow: false,
        titleShow: false,
        newProTitle: '',
        blockImg: '',
        detailBox: [],
        canshuShow: true,
        canshuHidden: false,
        noImg: require('../assets/img/nodata.png'),
        canData: [],
        activeTitle: ''    //标题
      }
    },
    created() {
      this.getDetailData()
    },
    watch: {
      '$route'(to, from) { //监听路由是否变化
        if (this.$route.query.url) {
          this.getDetailData()
          location.reload()
        }
      }
    },
    mounted() {
      this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
      })
    },
    methods: {
      showZhezhao() {
        this.zzShow = true;
      },
      closeBtn() {
        this.zzShow = !this.zzShow;
      },
      jump(target) {
        this.$router.push({path: '/detail', query: {url: target, title: 'news'}})
        location.reload()
      },
      getDetailData() {
        if (this.title == 'news') {
          this.bigShow = false;
          this.activeTitle = '行业新闻';
          this.newProTitle = '产品介绍';
        } else if (this.title == 'product') {
          this.activeTitle = '产品介绍';
          this.bigShow = true;
        } else if (this.title == 'solution') {
          this.activeTitle = '工程介绍';
          this.bigShow = true;
        } else if (this.title == 'case') {
          this.activeTitle = '精品案例';
          this.bigShow = true;
        } else if (this.jiejue == 'technical-consulting' || this.jiejue == 'engineering-design' || this.jiejue == 'equipment-manufacturing' || this.jiejue == 'logistics' || this.jiejue == 'Installation-commissioning' || this.jiejue == 'training' || this.jiejue == 'after-sales-service') {
          this.bigShow = false;
        } else if (this.title == 'system_solution') {
          this.activeTitle = '系统解决方案';
          this.bigShow = false;
        } else {
          this.bigShow = true;
        }

        let api_base_url = "http://sky.test/api/v1/";

        let url = api_base_url + "article/" + this.url;

        const DETAIL = params => req('get', url);
        let allData = DETAIL();
        allData.then((res) => {
          if (200 == res.code) {

          }
          var parent = res.data[0].parent
          if (res.data.length != 0) {
            this.detailBox = res.data[0];
            if (this.detailBox.parameter.length != 0) {
              this.canData = this.detailBox.parameter
            } else {
              this.canshuShow = false;
              this.canshuHidden = true;
            }
          }

          var block_url = api_base_url + "blocks";
          const NEWSDETAIL = params => req('get', block_url, {title: parent});
          let detail = NEWSDETAIL();
          detail.then((res) => {
            this.blockImg = res.data[0].image;
          }).catch(function (error) {
            // console.log(error);
          });
        }).catch(function (error) {
          // console.log(error);
        });
      }
    },
  }
</script>
<style scoped>
  .zhezhao {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .65);
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  .zhezhao h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem
  }

  .zhebox {
    width: 35%;
    height: 405px;
    background: #fff;
    position: absolute;
    box-sizing: border-box;
    padding: 2%;
    border-radius: 5px;
    text-align: center;
    left: 50%;
    top: 50%;
    margin-left: -17.5%;
    margin-top: -202.5px;
    position: relative;
  }

  .zhebox > i {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer
  }

  .zhebox > i:hover {
    transform: rotate(360deg)
  }

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

  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    color: #6c757d;
    content: "/";
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: .5rem;
  }

  .mytop .myz {
    width: 39%;
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

  .container > div:last-child {
    width: 59%;
  }

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
    cursor: pointer;
  }

  .online a .iconfont {
    margin: 0 10%;
    font-size: 1rem !important;
  }

  .online a:hover .iconfont {
    margin: 0 5%;
  }

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

  .content {
    padding: 2% 0;
  }

  .common-border,
  .common-border2 {
    padding-bottom: .5rem;
    border-bottom: #ff3f3f 0.01rem solid;
    margin: 2rem 0;
  }

  .common-border2 h3 {
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

  .rightBox {
    padding: 0 5%
  }

  .related-solution-box {
    margin-top: 2.625rem;
    margin-bottom: 3.9375rem;
  }

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

  .qitaNew li > span {
    display: block;
    width: 100%;
    height: 160px;
    border-radius: 0.8rem;
    overflow: hidden
  }

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

  .nodata {
    text-align: center;
    display: none
  }

  .nodata img {
    width: 20%
  }

  .textWrap-box .desc {
    font-size: 14px;
    line-height: 18px;
    height: 55px;
  }

  .textWrap-box .more {
    margin-top: 1.25rem;
    display: inline-block;
    padding: .5625rem .875rem;
    color: #ffffff;
    background: #0e0e0e;
  }

  .qitaNew > li {
    cursor: pointer
  }

  .qitaNew > li:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .qitaNew > li:hover .more {
    background: #ffb400;
  }

  .content-right p img {
    display: block !important;
    margin: 0 auto !important;
  }

  .canshu {
    margin-top: 10px
  }

  .canshu p {
    color: #333;
    text-align: left;
    padding: 10px 0 !important;
  }

  .canshu p span {
    color: #000;
    margin-right: 15px !important;
    font-weight: bold;
  }

  .showL {
    display: block !important;
  }

  .hiddenL {
    display: none !important;
  }
</style>

