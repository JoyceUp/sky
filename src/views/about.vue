<template>
  <div>
    <div class="banner">
      <img :src=blockImg>
    </div>
    <div class="prolist prl">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">Company Profile</li>
      </ul>
      <div class="content">
        <el-row>
          <el-col :span="5">
            <div class="grid-content bg-purple leftNav">
              <div class="asideTitle">
                <span class="textMidSon">Company Profile</span>
              </div>
              <ul class="aboutList">
                <li v-for="(item,i) of aboutData"
                    :key="i"
                    :class=" indexActive === i ? 'active' : ''"
                    @click="returnCom(i)"
                ><i class="el-icon-arrow-right"></i>{{item}}
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content bg-purple rightBox" id="gsjj">
              <div class="common-border">
                <h3>Company Profile</h3>
              </div>
              <div class="content-right" style="line-height: 30px">
                <div class="b_flex b_between">
                  <div class="about_pc4 img_width">
                    <img :src=img1>
                  </div>
                  <div class="about_pc6 lin_30">
                    Henan Ocean Intelligent Technology Co., Ltd. is a professional group company for poultry breeding,
                    feed processing equipment, besides the upstream and downstream related products manufacturing and
                    engineering installation.<br>

                    Founded in 1999, Ocean Group is a high-tech enterprise integrating scientific research, design,
                    manufacturing, installation, commissioning and after-sales service. The group has long established
                    strategic cooperation with Henan University of Technology and Zhengzhou COFCO Research and Design
                    Institute to integrate production, learning and research.<br>

                    Ocean Group has 2 production bases, 2 special research institutes and 3 equipment installation
                    enterprises. Possessing "post-doctoral scientific research workstation", with nationally recognized
                    manufacturing qualifications, passed ISO9001 quality management system certification, ISO14000
                    environmental management system certification, ISO18000 occupational health and safety management
                    system certification, ASME demonstration, European CE certification.<br>

                    As an internationally renowned supplier of feed processing engineering, feed machinery, and
                    aquaculture engineering, Ocean provides customers with complete engineering and mechanical equipment
                    services such as 1-1000T / H feed engineering, large, medium and small poultry breeding projects,
                    which fully meet the needs of users. For more than a decade, Ocean has accelerated the pace of
                    internationalization. Feed engineering, starch engineering, and starch sugar engineering customers
                    have spread all over the world. It has established sales and service networks in Eastern Europe,
                    West Asia, the Middle East, South America, India, Southeast Asia, and Africa.<br>

                    Our main product covering Dry/Wet type fish feed production line, diesel engine fish feed extruder,
                    corn/soybean extrusion line, feather meal extrusion line, poultry feed production line, home use
                    portable feed pellet mill,etc.
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-content bg-purple rightBox" id="fuwu">
              <div class="common-border">
                <h3>Service</h3>
              </div>
              <div class="content-right" style="line-height: 30px">
                <div class=" service">
                  <ul class="b_flex b_start b_wrap">
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>1) floating & skining fish feed pellet
                      machine and production line, 40kg/h-7000kg/h, 0.9-15mm pellet.</a></li>
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>2) dog, cat ect pet food machine and
                      production line, 40kg/h-7000kg/h, all kind shapes.</a></li>
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>3) dry type / wet type feed pellet
                      machine and production line</a></li>
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>4) animal poultry feed pellet machine
                      and production line, 40kg/h-50t/h.</a></li>
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>5) fish meal making machine and
                      production line</a></li>
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>6) soybean, corn puffing machine and
                      production line, 40kg/h-7000kg/h</a></li>
                    <li class="over1"><a href=""><i class="el-icon-star-on"></i>7) stainless steel feed packing machine,
                      <50kg/h</a></li>
                  </ul>
                </div>
              </div>
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
    name: 'about',
    components: {
      leftNav
    },
    data() {
      return {
        indexActive: 0,
        aboutData: ['Company Profile', 'Service'],
        url: this.$route.query.url,
        title: this.$route.query.title,
        product: 'product',
        bigShow: true,
        titleShow: false,
        qitaShow: false,
        newProTitle: '',
        blockImg: '',
        qitaBox: [],
        certiData: [],
        activeTitle: '',    //标题
        img1: require('../assets/img/ban011.jpg'),
        img2: require('../assets/img/s_banner.jpg'),
        photo: {
          p1: require('../assets/img/p1.jpg'),
          p2: require('../assets/img/p2.jpg'),
          p3: require('../assets/img/p3.jpg'),
          p4: require('../assets/img/p4.jpg'),
          p5: require('../assets/img/p5.jpg'),
          p6: require('../assets/img/p6.jpg'),
        }
      }
    },
    created() {
      this.banner();
    },
    methods: {
      returnCom(i) {
        if (i == 0) {
          this.$router.push('/about?#gsjj')
        } else if (i == 1) {
          this.$router.push('/about?#qywh')
        } else if (i == 2) {
          this.$router.push('/about?#qyxc')
        } else if (i == 3) {
          this.$router.push('/about?#fuwu')
        } else if (i == 4) {
          this.$router.push('/about?#zhuanli')
        }
        this.indexActive = i;
      },
      banner() {
        var url = "http://api.jxhenan.com/api/blocks";
        const NEWSDETAIL = params => req('get', url, {title: 'about'});
        let detail = NEWSDETAIL();
        detail.then((res) => {
          this.blockImg = res.data[0].image;
        }).catch(function (error) {
          // console.log(error);
        });
        const CERTI = params => req('get', url, {title: 'certificates'});
        let data = CERTI();
        data.then((res) => {
          this.certiData = res.data;
        }).catch(function (error) {
          // console.log(error);
        });
      },
    },
    watch: {
      '$route'(to, from) {
        var hash = window.location.hash;
        var index = hash.lastIndexOf("#");
        if (index != -1) {
          var id = hash.substring(index + 1, hash.length + 1);
          var div = document.getElementById(id);
          if (div) {
            setTimeout(function () {
              document.documentElement.scrollTop = div.offsetTop + 600
              document.body.scrollTop = div.offsetTop + 600
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
    color: #999;
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

  .textMidSon {
    color: #000
  }

  .aboutList > li {
    padding: 5% 10%;
    cursor: pointer
  }

  .aboutList > li > i {
    margin-right: 3%
  }

  .aboutList > li.active {
    background: #ff9c00 !important;
    color: #fff
  }

  .service > ul > li {
    width: 50%;
    box-sizing: border-box;
    padding-bottom: .5%
  }

  .service > ul > li:hover {
    transform: translateX(10px)
  }

  .service > ul > li:hover a {
    color: #ff9c00
  }

  .itemImg img {
    width: 20%;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 1.2%
  }
</style>

