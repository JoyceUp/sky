<template>
  <div class="titles prl">
    <h1 class="subh1 b_flex b_scenter b_topcenter">
      <span><img :src=titleicon></span>
      <p>
        <span>合作单位</span>
        <i>COOPERATION</i>
      </p>
      <span><img :src=titleicon></span>
    </h1>
    <div class="coopbox">
      <div class="coboxa">
        <ul class="b_flex b_wrap">
          <li v-for="(item,i) of allList" :key=i><img :src=item.image></li>
        </ul>
      </div>
      <div class="cobox">
        <ul id="myslide">
          <li class="first-c">
            <img :src=s1>
            <span class="aright" @click="handleLeft(coopList2)">&gt;</span>
            <span class="aleft" @click="handleLeft(coopList1)">&lt;</span>
          </li>
          <li v-for="(item,i) of List" :key=i v-if="isShow"><img :src=item.image></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {COOP} from '../../apis/allAxios'
  export default {
    name: "indexCoop",
    data(){
      return{
        allList:[],
        List:[],
        isShow:true,
        isHidden:false,
        coopList1:[],
        coopList2:[],
        titleicon:require('../../assets/img/i-titel.png'),
        s1:require('../../assets/img/s1.jpg'),
      }
    },
    methods:{
      handleLeft(data){
        this.List=data;
      },
      handleSelect() {
        let newsData = COOP();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
        newsData.then((res)=>{
          this.allList=res.data;
          this.coopList1=res.data.slice(0,11);
          this.List=res.data.slice(0,11);
          this.coopList2=res.data.slice(11);
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
  .cobox>ul>li{border-top:1px solid #ccc;
    border-right:1px solid #ccc;
    width:20%;height:140px;
    float:left;
    box-sizing:border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .coboxa{display: none}
  .cobox>ul>li>img{width:90%;height:auto;}
  .cobox>ul>li:nth-child(1) img{width: 100%;height: 100%}
  .cobox>ul>li:first-child{width:40%;height:280px;border-top:none;box-sizing:border-box;position: relative;}
  .cobox>ul>li:nth-child(8){border-left:1px solid #ccc}
  .cobox>ul::after{content:".";display:block;height:0;clear:both;visibility:hidden}
  .cobox>ul{border-bottom:1px solid #ccc}
  .cobox>ul>li>.aleft,.cobox>ul>li>.aright{
    position: absolute;
    border: 1px solid #fff;
    top: 20px;
    width: 45px;
    height: 30px;
    color: #fff;
    text-align: center;
    line-height: 26px;
    font-family: cursive;
    font-weight: bold;
    cursor: pointer;
  }
  .cobox>ul>li:nth-child(2):hover img,
  .cobox>ul>li:nth-child(3):hover img,
  .cobox>ul>li:nth-child(4):hover img,
  .cobox>ul>li:nth-child(5):hover img,
  .cobox>ul>li:nth-child(6):hover img,
  .cobox>ul>li:nth-child(7):hover img,
  .cobox>ul>li:nth-child(8):hover img,
  .cobox>ul>li:nth-child(9):hover img,
  .cobox>ul>li:nth-child(10):hover img,
  .cobox>ul>li:nth-child(11):hover img,
  .cobox>ul>li:nth-child(12):hover img
  {
    opacity: .6;
    -moz-transform:scale(.9) translateY(-10px);
    -webkit-transform:scale(.9) translateY(-10px);
    -o-transform:scale(.9) translateY(-10px);
    transform:scale(.9) translateY(-10px);
    /*IE*/
    filter:FlipH;
  }
  .cobox>ul>li>.aleft:hover,.cobox>ul>li>.aright:hover{
    background: #fff;
    color: #ff8b03;
  }
  .cobox>ul>li>.aleft{right: 56px;}
  .cobox>ul>li>.aright{right: 10px;}
</style>
