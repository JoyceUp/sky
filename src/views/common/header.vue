<template>
  <div>
    <!--<div class="post_top b_flex b_between prl border-bottom b_topcenter">
      <p>
        <span class="iconfont iconyouxiang"></span>oceanhn@oceanhn.com
      </p>
      <p>
        <a href="https://www.jxhenan.com">English</a>
        <a href="http://jxhenan.com">Chinese</a>
      </p>
    </div>-->
    <div class="logoimg b_flex prl b_topcenter">
      <p @click="home()"><img :src=logo></p>
      <p><img :src=phone></p>
    </div>
    <div class="logo_box prl" id="header">
      <img :src=sublogo class="sublogo" @click="home()">
      <!--  手机端导航  -->
      <div class="collapseNav">
        <span class="iconfont iconzhedie" @click="handleClick()"></span>
        <ul class="menu-coll animated bounceInDown" v-if="isShow" id="mobileNav">
          <li  @click="home()">Home</li>
          <li v-for="child1 in menuList"
              :key="child1.id"
              v-if="child1.all_children!=0">
            <span @click="jumpUrl(child1.slug,child1.type)">{{child1.name}}</span>
          </li>
          <li v-for="child1 in menuList"
              :key="child1.id"
              v-if="child1.all_children==0">
            <span @click="jumpNone(child1.slug,child1.type)">{{child1.name}}</span>
          </li>
        </ul>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo b_flex b_between"
        mode="horizontal"
        @select="handleSelect"
        text-color="#fff"
        active-text-color="#ffd04b"
        v-show="navShow"
      >
        <el-menu-item index="1" @click="home()">Home</el-menu-item>
        <!--    p判断一级菜单是否有子节点（有的情况）-->
        <el-submenu class="twoMenu"
          :index="'/'+child1.id"
                    v-for="child1 in menuList"
                    :key="child1.id"
                    v-if="child1.all_children.length!=0">
          <span  slot="title" @click="jump1(child1.slug,child1.type)">{{child1.name}}11</span>
          <!--判断二级菜单是否有子节点（没有的情况）-->
         <!-- <el-menu-item  :index="'/'+child2.id"
                         v-for="child2 in child1.all_children"
                         :key="child2.id"
                         v-if="child2.all_children.length==0">
&lt;!&ndash;            <span @click="jump2(child2.url,child2.type,child1.url)" slot="title">{{child2.name+'111'}}</span>&ndash;&gt;
          </el-menu-item>-->
          <!--判断二级菜单是否有子节点（有的情况）-->
          <div
            class="threeMenu  el-submenu"
            :index="child2.name"
            v-for="child2 in child1.all_children"
            :key="child2.id"
            v-if="child2.all_children.length!=0">
            <span slot="title"  @click="jump2(child2.slug,child2.type,child1.slug)">{{child2.name}}</span>
            <div>
              <!--判断三级菜单是否有子节点（有的情况）-->
              <div v-for="child3 in child2.all_children"
                   :key="child3.id"
                   v-if="child3.all_children.length!=0">
                <span @click="jump2(child3.slug,child3.type,child1.slug)">{{child3.name}}</span>
                <div v-for="child4 in child3.all_children"
                     :key="child4.id"
                     v-if="child4.all_children">
                  <span  slot="title" @click="jump2(child4.slug,child4.type,child1.slug)">{{child4.name}}</span>
                </div>
              </div>
              <!--判断三级菜单是否有子节点（没有的情况）-->
              <div v-for="child3 in child2.all_children"
                   :key="child3.id"
                   v-if="child3.all_children.length==0">
                <span @click="jump2(child3.slug,child3.type,child1.slug)">{{child3.name}}</span>
              </div>
            </div>
          </div>
        </el-submenu>
        <!--判断一级菜单是否有子节点（没有的情况）-->
        <el-menu-item :index="'/'+child1.id"
                      v-for="child1 in menuList"
                      class="twoMenu"
                      :key="child1.id"
                      v-if="child1.all_children.length==0">
          <span @click="jumpNone(child1.slug,child1.type)">{{child1.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import {CATEGORY} from '../../apis/allAxios.js'
export default {
  name: 'head_box',
  data() {
    return {
      navShow:false,
      isShow:false,
      activeIndex: '',
      activeIndex2: '',
      menuList:[],
      num:1,
      logo:require('../../assets/img/logo.png'),
      sublogo:require('../../assets/img/sublogo.png'),
      phone:require('../../assets/img/phone.png')
    };
  },
  methods: {
    jumpUrl(slug,type){
      // this.$router.push('/mnav?active='+url)
      this.$router.push({path:'/mnav',query:{active:slug}})
    },
    jumpNone(slug,type){
      if(type==0){
        this.$router.push('/detail?slug='+slug)
      }
      if(slug=='company-profile'){
        this.$router.push('/company-profile')
      }else if(slug=='contact'){
        this.$router.push('/contact')
      }
    },
    key(){
      return this.$route.path + Math.random();
    },
    jump1(slug,type){
      console.log(slug,type)
      let routeData=''
      if(type==0){
        routeData=this.$router.push({
          path:'/product',
          query:{
            slug:slug
          }
        })
      }
      window.open(routeData.href, '_blank');
    },
    jump2(slug,type,parentId){
      console.log(slug,type,parentId)
      let routeData=''
      if(type==0){
        routeData =this.$router.resolve({path:'/'+parentId,query:{category_url:slug}})
      }else if(type==1){
        routeData =this.$router.resolve('/detail?url='+slug)
        // window.location.reload()
      }
      window.open(routeData.href, '_blank');
    },
    home(){
      console.log(11111)
      this.$router.push("/")
    },
    handleClick(){
        this.isShow=!this.isShow;
    },
    handleSelect() {
      // this.axios({
      //   methods: 'get',
      //   url:'http://sky.test/api/v1/category',
      // }).then((res)=>{
      //   console.log(res)
      // })
      let navData = CATEGORY();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
      console.log(navData);
      navData.then((res)=>{
        if(res.data.length!=0){
          this.navShow=true;
          this.menuList=res.data;
        }
      }).catch(function(error){
        // console.log(error);
      });
      document.addEventListener('mouseup',(e) =>{
        var e = e || window.event;
        var _con = document.getElementById('mobileNav')
        if(_con) {
          this.isShow = false;
         /* if(!_con.contains(e.target)) {
            this.isShow = false;
          }*/
        }
      })
    }
  },
  created() {
    this.handleSelect()
  },

}
</script>
<style scoped>
.logo_box>.sublogo{display: none}
.post_top>p a:first-child::after {
  content: "|";
  display: inline;
  padding: 0 5px;
  color: #444;
}
.post_top .iconfont{margin-right: 5px;}
.post_top{height: 30px;font-size: .8rem;}
.border-bottom {
  border-bottom: 1px solid #dee2e6!important;
}
.el-submenu__title{color: #000;}
.logo_box{display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  width: 100%;
  z-index: 99;
  background:#313e7e;
}
.logoimg{height: 100px;}
.logoimg>p{width: 50%}
.logoimg>p:first-child{text-align: left;cursor: pointer}
.logoimg>p:first-child img{height:auto;}
.logoimg>p:last-child{text-align: right}
.el-menu{background: transparent !important}
.el-menu.el-menu--horizontal{border-bottom:none;margin-right: 10% !important;}
.collapseNav{display: none;position: relative}
.collapseNav span{cursor: pointer}
.menu-coll{width: 100%;background: rgba(49,62,126,1);position: fixed;
  top: 60px;
  left: 0;z-index: 99}
/*移动端*/
@media screen and (max-width: 600px) {
  .sublogo{display: block !important;}
  .logo_box>img{height: 70%}
  .prl{padding: 0 2%}
  .post_top,
  .logoimg,
  .el-menu-demo{display: none !important;}
  .collapseNav{display: block}
  .collapseNav>ul>li,
  .collapseNav>ul>li a
  {color: #fff;text-align: center}
  .logo_box .logoimg{height: 35px !important;}
  .logo_box .logoimg img{height:100%;}
  .collapseNav .iconfont{font-size: 2rem;
    color: #fff;
    border: 1px solid #fff;padding: 4px 6px;border-radius: 4px;opacity: .6}
  .logo_box{height: 60px;box-sizing: border-box}
  .menu-coll{padding: 0 6px;box-sizing: border-box}
  .menu-coll>li>a,
  .menu-coll>li>span
  {display:block;padding: 10px 6px}
.menu-coll>li>ul>li>a{color: #999;font-size: 14px}
  .menu-coll>li>ul{display: flex;flex-wrap: wrap;}
  .menu-coll>li>ul>li{padding: 6px  10px  0px  0px}
}
@media screen and  (min-width: 600px) and (max-width: 992px) {
  .sublogo{display: block !important;}
  .logo_box>img{height: 70%}
  .prl{padding: 0 2%}
  .post_top,
  .logoimg,
  .el-menu-demo{display: none !important;}
  .collapseNav{display: block}
  .collapseNav>ul>li,
  .collapseNav>ul>li a
  {color: #fff;text-align: center}
  .logo_box .logoimg{height: 35px !important;}
  .logo_box .logoimg img{height:100%;}
  .collapseNav .iconfont{font-size: 2rem;
    color: #fff;
    border: 1px solid #fff;padding: 4px 6px;border-radius: 4px;opacity: .6}
  .logo_box{height: 60px;box-sizing: border-box}
  .menu-coll{padding: 0 6px;box-sizing: border-box}
  .menu-coll>li>a{display:block;padding: 10px 6px}
  .menu-coll>li>ul>li>a{color: #999;font-size: 14px}
  .menu-coll>li>ul{display: flex;flex-wrap: wrap;}
  .menu-coll>li>ul>li{padding: 6px  10px  0px  0px}
}
</style>
