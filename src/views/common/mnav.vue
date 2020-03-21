<template>
    <div class="mobile_nav">
        <div class="left">
          <ul  class="nav1">
            <li @click="home()"><span>Home</span></li>
            <li v-for="(child1,i) in menuList"
                :key="child1.id"
                v-if="child1.all_children">
              <span :class=" indexActive === i ? 'active' : ''" @click="returnCom(child1.url,i)"
              >{{child1.name}}</span>
              <ul class="nav2" :class=" indexActive === i ? 'ablock' : ''">
                <span @click="jump2(child1.url,child1.type,child1.url)">{{child1.name}}</span>
                <li v-for="child2 in child1.all_children"
                    :key="child2.id"
                    v-if="child1.all_children">
                  <span @click="jump2(child2.url,child2.type,child1.url)">{{child2.name}}</span>
                  <ul class="nav3">
                    <li v-for="child3 in child2.all_children"
                        :key="child3.id"
                        v-if="child2.all_children">
                      <span @click="jump2(child3.url,child3.type,child1.url)">{{child3.name}}</span>
                      <ul class="nav4">
                        <li v-for="child4 in child3.all_children"
                            :key="child4.id"
                            v-if="child3.all_children">
                          <span @click="jump2(child4.url,child4.type,child1.url)">{{child4.name}}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
  import  head_box from './header';
  import {CATEGORY} from '../../apis/allAxios.js'
  export default {
    name: 'mnav',
    components:{
      head_box
    },
    data() {
      return {
        indexActive:0,
        isShow:false,
        activeIndex: '',
        activeIndex2: '',
        menuList:[],
      };
    },
    methods: {
      jump2(url,type,parentId){
        if(type==0){
          this.$router.push({path:'/'+parentId,query:{category_url:url}})
        }else if(type==1){
          this.$router.push('/detail?url='+url)
        }

      },
      home(){
        this.$router.push("/")
      },
      handleClick(){
        this.isShow=!this.isShow;

      },
      handleSelect() {
        let navData = CATEGORY();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
        navData.then((res)=>{
          this.menuList=res.categories;
        }).catch(function(error){
          // console.log(error);
        });

      },
      returnCom(data,i) {
        this.indexActive = i;
        const returnEle = document.querySelector(data);
        if (!!returnEle){
          returnEle.scrollIntoView(true);
        }
      },
    },
    created() {
      this.handleSelect()
    }

  }
</script>

<style scoped>
  @media screen and (min-width:300px) and (max-width: 992px) {
    .mobile_nav{height: 1200px}
    .mobile_nav .nav1 li span
    {
      font-size: 1.8rem;
    }
    .mobile_nav .nav1>li>span{cursor: pointer; width: 30%;
      padding: 2.5% 3%;
      text-align: center;
      box-sizing: border-box;
      border-left: 4px solid #fff;}
    .mobile_nav .nav1>li{display: flex;justify-content: flex-start}
    .mobile_nav .nav1>li>ul{
      background: #eaeaea;
      position: absolute;
      display: none;
      top: 60px;
      left: 30%;
      padding:0 3%;
      width: 70%;box-sizing: border-box}
    .ablock{display: block !important;}
    .mobile_nav .nav1>li>span.active {
      border-left: 4px solid #313e7e;
      background: #eaeaea !important;
      color: #313e7e;
    }
    .mobile_nav .nav2>span{
      font-size: 2.2rem !important;
      font-weight: bold;width: 100%;display: block;padding: 4% 0;text-align: center;border-bottom: 1px solid #ccc;margin-bottom: 4%}
    .mobile_nav .nav3,
    .mobile_nav .nav2{display: flex;justify-content: flex-start;flex-wrap: wrap}
    .mobile_nav .nav2>li>span{    color: #ff8b03;
      font-size: 1.9rem;
      margin: 5% 0;
      display: block;}
    .mobile_nav .nav2>li>ul>li{width: 50%;box-sizing: border-box;margin-top: 1%}
    .mobile_nav .nav4>li,
    .mobile_nav .nav3>li{padding:2% 0 2% 1%;}
    .mobile_nav .nav3>li>span{color: #000;font-size: 1rem;}
    .mobile_nav .nav4>li>span{color: #666;font-size: .9rem;}
  }
</style>
