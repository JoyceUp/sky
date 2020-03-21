<template>
  <div class="titles prl">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>精品案例</span>
        <i>DISPLAY CASES</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <ul class="case b_flex b_start b_wrap">
        <li v-for="(item,i) of caseList" :key=i class="case_pc">
          <a @click="jump(item.url)">
              <div><img :src=item.thumb></div>
              <div>
                <h3 class="over1">{{item.title}}</h3>
                <p  class="overflow">{{item.excerpt}}</p>
              </div>
          </a>
        </li>
    </ul>
  </div>

</template>


<script>
  import {CASE} from '../../apis/allAxios'
  export default {
    name: "indexCase",
    data(){
      return{
        caseList:[],
        titleicon:require('../../assets/img/i-titel.png')
      }
    },
    methods:{
      jump(target){
        this.$router.push({path:'/detail',query:{url:target,title:'product'}})
      },
      handleSelect() {
        let caseData = CASE();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
        caseData.then((res)=>{
          this.caseList=res.data;
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
.case li img{width: 100%;height:13.5rem;border-radius: 10px}
.case li h3 {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #000;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.case li{cursor: pointer}
.case li p{font-size: 1rem}
.case li:hover{
  box-sizing: border-box;
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);}
</style>
