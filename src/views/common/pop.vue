<template>
    <div class="pop" style="overflow-y:hidden !important;">
      <div class="popbox">
        <h2>抱歉，暂无数据！</h2>
        <p><el-button type="primary" size="small" @click="returnBtn()">确定</el-button></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "pop",
      methods:{
        returnBtn(){
          this.$router.go(-1)
        }
      }
    }
</script>
<style scoped>
.pop{position:fixed;top:0;left: 0;background: rgba(0,0,0,.95);width: 100%;height: 100%;z-index: 9999;}
.popbox{width: 20%;height: 150px;background: #fff;position:absolute;box-sizing: border-box;padding: 2%;border-radius: 5px;text-align: center;left: 50%;top:50%;margin-left: -10%;margin-top: -75px}
.popbox>h2{font-size: 1.2rem;padding: 2% 0;}
.popbox>p{margin-top:10% }
</style>
