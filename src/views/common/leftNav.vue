<template>
  <div>
    <div class="grid-content bg-purple leftNav">
      <div class="asideTitle">
        <span class="textMidSon">产品介绍</span>
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical leftBox"
        @open="handleOpen"
        @close="handleClose">
        <!--判断一级菜单是否有子节点（没有的情况）-->
        <el-menu-item :index="'/'+child1.id"
                      v-for="child1 in navLeft.all_children"
                      :key="child1.id"
                      v-if="!child1.all_children">
          <router-link :to="child1.url">{{child1.name+'0'}}</router-link>
        </el-menu-item>
        <!--    p判断一级菜单是否有子节点（有的情况）-->
        <el-submenu class="twoMenu"
                    :index="'/'+child1.id"
                    v-for="child1 in navLeft.all_children"
                    :key="child1.id"
                    v-if="child1.all_children">
          <span slot="title"  @click="jump2(child1.url,child1.type,navLeft.url)">{{child1.name+'1'}}</span>
          <!--判断二级菜单是否有子节点（没有的情况）-->
          <el-menu-item  :index="'/'+child2.id"
                         v-for="child2 in child1.all_children"
                         :key="child2.id"
                         v-if="!child2.all_children">
            <router-link :to="child2.url" slot="title">{{child2.name+'2'}}</router-link>
          </el-menu-item>
          <!--判断二级菜单是否有子节点（有的情况）-->
          <div
            class="leftSub el-submenu"
            :index="child2.name"
            v-for="child2 in child1.all_children"
            :key="child2.id"
            v-if="child2.all_children"
          >
            <span @click="jump2(child2.url,child2.type,navLeft.url)" slot="title">{{child2.name+'3'}}</span>
            <div>
              <div v-for="child3 in child2.all_children"
                   :key="child3.id"
                   v-if="child3.all_children">
                <span @click="jump2(child3.url,child3.type,navLeft.url)" slot="title">{{child3.name}}</span>
                <div v-for="child4 in child3.all_children"
                     :key="child4.id"
                     v-if="child4.all_children">
                  <span @click="jump2(child4.url,child4.type,navLeft.url)" slot="title">{{child4.name}}</span>
                </div>
              </div>
            </div>

          </div>
        </el-submenu>
      </el-menu>
    </div>
    <div class="grid-content bg-purple leftNav">
      <div class="asideTitle">
        <span class="textMidSon">工程介绍</span>
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical leftBox"
        @open="handleOpen"
        @close="handleClose">
        <!--判断一级菜单是否有子节点（没有的情况）-->
        <el-menu-item :index="'/'+child1.id"
                      v-for="child1 in soluList.all_children"
                      :key="child1.id"
                      v-if="!child1.all_children">
          <router-link :to="child1.url">{{child1.name}}</router-link>
        </el-menu-item>
        <!--    p判断一级菜单是否有子节点（有的情况）-->
        <el-submenu class="twoMenu"
                    :index="'/'+child1.id"
                    v-for="child1 in soluList.all_children"
                    :key="child1.id"
                    v-if="child1.all_children">
          <span @click="jump2(child1.url,child1.type,soluList.url)" slot="title">{{child1.name}}</span>
          <!--判断二级菜单是否有子节点（没有的情况）-->
          <el-menu-item  :index="'/'+child2.id"
                         v-for="child2 in child1.all_children"
                         :key="child2.id"
                         v-if="!child2.all_children">
            <router-link :to="child2.url" slot="title">{{child2.name}}</router-link>
          </el-menu-item>
          <!--判断二级菜单是否有子节点（有的情况）-->
          <div
            class="leftSub el-submenu"
            :index="child2.name"
            v-for="child2 in child1.all_children"
            :key="child2.id"
            v-if="child2.all_children"
          >
            <span @click="jump2(child2.url,child2.type,soluList.url)" slot="title">{{child2.name}}</span>
            <div>
              <div v-for="child3 in child2.all_children"
                   :key="child3.id"
                   v-if="child3.all_children">
                <span  @click="jump2(child3.url,child3.type,soluList.url)">{{child3.name}}</span>
                <div v-for="child4 in child3.all_children"
                     :key="child4.id"
                     v-if="child4.all_children">
                  <span  @click="jump2(child4.url,child4.type,soluList.url)">{{child4.name}}</span>
                </div>
              </div>
            </div>

          </div>
        </el-submenu>
      </el-menu>
    </div>
    <div class="grid-content bg-purple leftNav">
      <div class="asideTitle">
        <span class="textMidSon">精品案例</span>
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical leftBox"
        @open="handleOpen"
        @close="handleClose">
        <!--判断一级菜单是否有子节点（没有的情况）-->
        <el-menu-item :index="'/'+child1.id"
                      v-for="child1 in caseList.all_children"
                      :key="child1.id"
                      v-if="!child1.all_children">
          <router-link :to="child1.url">{{child1.name}}</router-link>
        </el-menu-item>
        <!--    p判断一级菜单是否有子节点（有的情况）-->
        <el-submenu class="twoMenu"
                    :index="'/'+child1.id"
                    v-for="child1 in caseList.all_children"
                    :key="child1.id"
                    v-if="child1.all_children">
          <router-link :to="child1.url" slot="title">{{child1.name}}</router-link>
          <!--判断二级菜单是否有子节点（没有的情况）-->
          <el-menu-item  :index="'/'+child2.id"
                         v-for="child2 in child1.all_children"
                         :key="child2.id"
                         v-if="!child2.all_children">
            <router-link :to="child2.url" slot="title">{{child2.name}}</router-link>
          </el-menu-item>
          <!--判断二级菜单是否有子节点（有的情况）-->
          <div
            class="leftSub el-submenu"
            :index="child2.name"
            v-for="child2 in child1.all_children"
            :key="child2.id"
            v-if="child2.all_children"
          >
            <router-link :to="child2.url" slot="title">{{child2.name}}</router-link>
            <div>
              <div v-for="child3 in child2.all_children"
                   :key="child3.id"
                   v-if="child3.all_children">
                <router-link :to="child3.url" slot="title">{{child3.name}}</router-link>
                <div v-for="child4 in child3.all_children"
                     :key="child4.id"
                     v-if="child4.all_children">
                  <router-link :to="child4.url" slot="title">{{child4.name}}</router-link>
                </div>
              </div>
            </div>

          </div>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
import req from '../../apis/http.js'
export default {
  name: 'leftNav',
  props:["title"],
  data() {
    return{
      indexActive:0,
      navLeft:[],
      caseList:[],
      soluList:[],
      activeTitle:''
    }
  },
  created() {
    this.tabsBox();
  },
  methods: {
    jump1(url,type){

      if(type==0){
        this.$router.push('/'+url+'?category_url='+url)
      }
    },
    jump2(url,type,parentId){
      console.log(url,type,parentId)
      if(type==0){
        this.$router.push({path:'/'+parentId,query:{category_url:url}})
      }else if(type==1){
        this.$router.push('/detail?url='+url)
        window.location.reload()
      }

    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    tabsBox(){
      if(this.title=='product'){
        this.activeTitle='产品介绍'
      }
      var url="http://sky.test/api/v1/category";
      const leftNav= params =>req('get',url);
      let data=leftNav();
      data.then((res)=>{
        this.navLeft=res.data;
        var iIndex = this.navLeft.findIndex((value,index,arr)=>{
          return value.url==this.title
        });
        this.navLeft=res.categories[iIndex]
        this.caseList=res.categories[2];
        this.soluList=res.categories[1];
      }).catch(function(error){
        // console.log(error);
      });
    },
  },
}
</script>
<style scoped>
  .leftNav .el-menu-vertical
  {background: #fff !important;border:none}
  .asideTitle {
    margin-bottom: 2rem;
  }
  .asideTitle .textMidSon {
    font-size: 1.5rem !important;
  }
  .asideTitle .textMidSon {
    display: inline-block;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    color: #282828;
    vertical-align: bottom;
    font-size: 2.5rem;
    font-family: Arial,Helvetica,sans-serif;
    position: relative;
    padding-bottom: 0.9375rem;
    text-transform: capitalize;
  }
  .asideTitle .textMidSon:before {
    bottom: 0;
    content: "";
    width: 60%;
    height: 6px;
    background: #ff8b03;
    position: absolute;
  }
  .leftNav ul li span{cursor: pointer}
  .leftNav ul li div span,
  .leftNav ul li span,
  .leftNav ul li a
  {color: #000 !important;}
  .leftNav ul div>div>span,
  .leftNav ul div>div>a
  {font-size: .9rem;
    color: #666 !important;
    padding: 2% 0 2% 19%;
    display: block;}
  .leftNav ul div>div>span:hover,
  .leftNav ul div>div>a:hover
  {transform: translateX(10px);color: #ff8b03 !important;}
  .leftSub>span,
  .leftSub>a
  {padding: 5% 0 5% 12%;display: block}
  .leftBox .is-opened{background: #ff8b03;}
  .leftBox .is-opened>.el-submenu__title>a{color: #fff !important;}
  .leftSub:hover{
    background: -webkit-linear-gradient(left, #FFB830 0%, #f5f5f5 5%, #f5f5f5 90%, #f5f5f5 100%); /* Safari 5.1-6.0 */
    background: -o-linear-gradient(left, #FFB830 0%, #f5f5f5 5%, #f5f5f5 90%, #f5f5f5 100%); /* Opera 11.1-12.0 */
    background: -moz-linear-gradient(left, #FFB830 0%, #f5f5f5 5%, #f5f5f5 90%, #f5f5f5 100%); /* Firefox 3.6-15 */
    background: linear-gradient(left, #FFB830 0%, #f5f5f5 5%, #f5f5f5 90%, #f5f5f5 100%); /* 标准语法 */
  }
  .grid-content{margin-bottom: 30px !important;}
</style>
