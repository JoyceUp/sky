<template>
  <el-carousel class="swipbox">
    <el-carousel-item v-for="(item,i) in bannerList" :key="i">
      <img :src=item.image alt="item.title">
    </el-carousel-item>
  </el-carousel>
</template>


<script>
  import {BANNER} from '../../apis/allAxios'
    export default {
        name: "swiper",
      data(){
          return{
            bannerList:[]
          }
      },
      methods:{
        handleSelect() {
          let banData = BANNER();   //vue项目接口管理,所有接口都在apis文件夹中统一管理
          banData.then((res)=>{
            this.bannerList=res.data;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
