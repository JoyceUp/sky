<template>
<div class="footer">
  <div class="cont b_flex b_between prl b_wrap">
    <div class="new3_pc">
        <div class="asideTitle">
            <span class="textMidSon">联系我们<br>
              <!-- <i>Research Institute</i> -->
            </span>
        </div>
        <div class="fog">
          <p>河南金鑫智能装备有限公司</p>
          <span>Henan JinXin Intelligent Equipment Co., Ltd</span>
          <ul>
            <li><span class="iconfont iconphone"></span>电话:<span>+86-15738819095</span></li>
            <li><span class="iconfont iconyoujian"></span>邮箱:<span>oceanhn@oceanhn.com</span></li>
            <li><span class="iconfont icondiqiu"></span>网址:<span>jxhenan.com</span></li>
            <li><span class="iconfont icondizhi"></span>地址:<span>河南省新乡市凤泉区产业集聚区</span></li>
          </ul>
        </div>
    </div>
    <div class="new3_pc">
        <div class="footer-form">
          <div class="asideTitle">
              <span class="textMidSon">在线留言<br></span>
          </div>
          <FormBox></FormBox>
        </div>
    </div>
  </div>
  <div class="copy">Copyright ©2019 河南金鑫智能装备有限公司 版权所有.</div>
  <goTop></goTop>
</div>
</template>

<script>
import goTop from './goTop.vue'
import req from '../../apis/http.js'
import FormBox from './form'
export default {
  name: 'foot_box',
  components:{
    goTop,
    FormBox
  },
  data () {
    return {
      tipShow:false,
      getName:'',
      getEmail:'',
      getTel:'',
      getCountry:'',
      getMessage:'',
      activeIndex: '1',
      activeIndex2: '1',
      weImg:'',
      phone:'',
      qq:'',
      mail:'',
      company_address:'',
      menuList: [],
      wechat_image:'',//微信图片
      website_icp:''//备案号
    }
  },
  created() {
  },
  methods:{

  },
}
</script>
<style>
.footer .copy{
  font-size: .8rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: .5%;
  color: white;
  background:#212d47 ;
}
.footer .cont{
  background:#0a2248 url("../../assets/img/footer-contact-bg.jpg") no-repeat;
}
.asideTitle {
  margin-bottom: 2rem;
}
.asideTitle .textMidSon {
  color: #fff;
  display: inline-block;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: bottom;
  /* border-bottom: 7px solid #ff8b03; */
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  position: relative;
  padding-bottom: 0.9375rem;
  text-transform: capitalize;
}
.asideTitle {
  margin-bottom: 2rem;
}
.asideTitle .textMidSon:before {
  bottom: 0;
  content: "";
  width: 60%;
  height: 6px;
  background: #ff8b03;
  position: absolute;
}
.cont .fog {
  color: #fff;
}
.cont .fog p {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
}
.cont .fog>span{
  font-size: .9rem;
  font-weight: bold;
}
.cont .fog ul {
  padding: 30px 0;
  line-height: 50px;
  font-size: 1.1rem
}
.cont .fog ul>li .iconfont{margin-right: 1%;font-size: 1.3rem}
.footer-form ::-webkit-input-placeholder { /* WebKit browsers */
  color: #999;
  font-size: 1rem;
  font-family: "Microsoft YaHei";
}

.footer-form ::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #fff;
  font-size:1rem;
  font-family: "Microsoft YaHei";
}

.footer-form  :-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #fff;
  font-size:1rem;
  font-family: "Microsoft YaHei";
}
.footer-form h4 {
  color: #ffffff;
  margin-bottom: 1em;
}
.footer-form>form>input:focus{
  background:rgba(255, 255, 255,1);
}
.footer-form>form>input {
  width: 49.5%;

  box-sizing: border-box;
  padding: .625rem;
  border-radius: .3125rem;
  background: rgba(255, 255, 255, 0.2);
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
  margin-bottom: .87rem;
}
.footer-form textarea{
  width:100%;
  height: 100px;
  box-sizing: border-box;
  padding: .625rem;
  border-radius: .3125rem;
  background: rgba(255, 255, 255, 0.2);
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
  margin-bottom: .87rem;
}
#footer-submit {
  background: #000;
  color: #fff;
  border: 0;
  width: 15%;
  display: block;
  padding: .4rem 3rem;
}
#footer-submit:hover .iconfont{margin-left: 40%}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
input,textarea{outline: none}
  #footer-submit .iconfont{margin-left: 25%}
</style>
