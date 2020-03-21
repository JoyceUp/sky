<template>
  <div class="titles prl">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>行业新闻</span>
        <i>NEWS</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <div class="newsbox">
      <div class="b_flex b_between subtitle">
        <router-link to="product?category_url=news">业务动态</router-link>
        <router-link to="product?category_url=news">More&gt;</router-link>
      </div>
      <ul class="nbox b_flex b_start b_wrap">
        <li class="new2_pc" v-for="(item,i) of newsList" :key=i>
          <a class="b_flex b_start b_wrap" @click="jump(item.url)">
            <div>
              <img :src=item.thumb>
            </div>
            <div>
              <h4 class="media-heading over1">{{item.title}}</h4>
              <p class="overflow3">{{item.excerpt}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {NEWS} from '../../apis/allAxios'
  export default {
    name: "indexNews",
    data(){
      return{
        newsList:[],
        titleicon:require('../../assets/img/i-titel.png')
      }
    },
    methods:{
      jump(target){
        this.$router.push({path:'/detail',query:{url:target,title:'news'}})
      },
      handleSelect() {
        let newsData = NEWS();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
        newsData.then((res)=>{
          this.newsList=res.data;
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
  .newsbox .subtitle{margin-bottom: 1rem}
.newsbox .subtitle a {
    font-size: 1.8rem;
  }
.newsbox .subtitle a:first-child::before {
  content: "";
  width: 5px;
  margin-right: 10px;
  height: 20px;
  display: inline-block;
  background: #ff0f0f;
}
.newsbox .subtitle a:last-child {
  color: #f67524;
}
  .nbox li{cursor: pointer}
.nbox li:nth-child(odd){border-right: 1px solid #ccc;}
.nbox li>a>div:nth-child(1){width: 33%;margin-right: 2%;border-radius: 10px;overflow: hidden;    height: 150px;}
.nbox li>a>div:nth-child(1) img{width: 100%;height: 100%}
.nbox li>a>div:nth-child(2){width: 65%}
.nbox li>a>div:nth-child(2) h4{font-size: 1.3rem}
.nbox li>a>div:nth-child(2) p{line-height:2rem;margin-top: 2rem;    font-size: 1.1rem;}
.nbox li:hover img{transform: scale(1.1)}
.nbox li:hover h4{color:#f67524}
</style>
