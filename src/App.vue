<template>
  <div id="app">
    <headBox v-if="headShow"></headBox>
    <router-view/>
    <footBox v-if="headShow"></footBox>
  </div>
</template>

<script>
  import headBox from './views/common/header'
  import footBox from './views/common/footer'
export default {
  name: 'App',
  components:{
    headBox,
    footBox
  },
  data(){
    return{
      headShow:true
    }
  },
  watch:{
    '$route'(to, from) {
        if(to.name=='extension'){
            this.headShow=false;
        }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
