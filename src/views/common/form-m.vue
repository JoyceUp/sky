<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm footer-form b_flex b_wrap">
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="姓名*"></el-input>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input v-model="ruleForm.tel" placeholder="电话/固话(加区号)*"></el-input>
      </el-form-item>
      <el-form-item prop="machine">
        <el-select v-model="ruleForm.machine" placeholder="请选择想要咨询的设备*">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="footer-submit" @click="submitForm('ruleForm')">立即咨询<span class="iconfont iconjiang-right"></span></el-button>
      </el-form-item>
    </el-form>
    <div class="pop" v-show="PopShow">
      <div class="popbox b_flex b_column b_scenter b_topcenter">
        <el-progress type="circle" :percentage="percent" status="success" class="animated bounceIn success" v-if="proShow"></el-progress>
        <el-progress type="circle" :percentage="100" status="exception"  class="animated bounceIn exception" v-else></el-progress>
        <h3>{{subMessage}}</h3>
        <el-button @click="returnBtn()">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import req from '../../apis/http.js'
  export default {
    name:'FormBox',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空！'));
        }else{
          callback();
        }

      };
     /* var checkOpt = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请选择想要咨询的设备'));
        }else{
          callback();
        }

      };*/
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话不能为空！'));
        }
        setTimeout(() => {
          const reg = /(^(0[0-9]{2,3}\-?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/
          if (!reg.test(value)) {
            callback(new Error('请输入正确的电话！'));
          } else {
            callback();
          }
        }, 500);
      };
      return {
        percent:0,
        subMessage:'',
        proShow:true,
        PopShow:false,
        value: '',
        options: [
          {
          value: '液压榨油机',
          label: '液压榨油机'
        }, {
          value: '螺旋榨油机',
          label: '螺旋榨油机'
        }, {
          value: '棕榈榨油机',
          label: '棕榈榨油机'
        }, {
          value: '棕榈油工程',
          label: '棕榈油工程'
        }, {
          value: '棕榈仁油工程',
          label: '棕榈仁油工程'
        }, {
          value: '椰子油工程',
          label: '椰子油工程'
        }, {
          value: '葵花籽油工程',
          label: '葵花籽油工程'
        }, {
          value: '大豆油工程',
          label: '大豆油工程'
        }, {
          value: '菜籽油工程',
          label: '菜籽油工程'
        }, {
          value: '棉籽油工程',
          label: '棉籽油工程'
        }, {
          value: '玉米油压榨',
          label: '玉米油压榨'
        }, {
          value: '茶籽油工程',
          label: '茶籽油工程'
        }, {
          value: '花生油工程',
          label: '花生油工程'
        }, {
          value: '米糠油工程',
          label: '米糠油工程'
        }, {
          value: '芝麻油工程',
          label: '芝麻油工程'
        }, {
          value: '核桃油工程',
          label: '核桃油工程'
        }, {
          value: '芥菜籽油工程',
          label: '芥菜籽油工程'
        }, {
          value: '亚麻籽油工程',
          label: '亚麻籽油工程'
        }, {
          value: '蓖麻籽油工程',
          label: '蓖麻籽油工程'
        }, {
          value: '花椒籽油工程',
          label: '花椒籽油工程'
        }, {
          value: '乳木果油工程',
          label: '乳木果油工程'
        }, {
          value: '印楝籽油工程',
          label: '印楝籽油工程'
        }, {
          value: '美藤/印加果油工程',
          label: '美藤/印加果油工程'
        }, {
          value: '荷荷巴油工程',
          label: '荷荷巴油工程'
        }, {
          value: '辣木籽油工程',
          label: '辣木籽油工程'
        }],
        ruleForm: {
          name: '',
          tel:'',
          machine:'',
          type:'contact_page'
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur',required:true}
          ],
          tel: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          machine: [
            { required: true, message: '请选择想要咨询的设备', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      returnBtn(){
        this.$router.go(0);
        this.PopShow=false;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData();
            formData.append('name', this.ruleForm.name);
            formData.append('tel', this.ruleForm.tel);
            formData.append('type', this.ruleForm.type);
            formData.append('machine', this.ruleForm.machine);
            console.log(this.ruleForm)
            var url="http://api.jxhenan.com/api/contact";
            const DETAIL= params =>req('post',url,formData);
            let allData=DETAIL();
            allData.then((res)=>{
              var div=document.getElementById('zhezhao')
              if(res.data.id){
                this.PopShow=true;
                this.subMessage='非常感谢，您已经提交成功！'
                this.percent=100;
                this.ruleForm.name='';
                this.ruleForm.tel='';
                this.ruleForm.machine='';
              }else{
                this.subMessage='抱歉提交失败，请重试！'
              }

            }).catch(function(error){
              // console.log(error);
            });
          } else {
            console.log('提交失败，请重试！');
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped>
  .footer-form form input:focus{
    background:rgba(255, 255, 255,1) !important;
  }
  .footer-form .el-select,
  .footer-form .el-form-item{width: 100%;margin-left:0 !important;}
  .aniPop svg{width: 50px !important;}
  .pop{position:fixed;top:0;left: 0;background: rgba(0,0,0,.95);width: 100%;height: 100%;z-index: 9999;}
  .popbox{width: 20%;height: 280px;background: #fff;position:absolute;box-sizing: border-box;padding: 2%;border-radius: 5px;text-align: center;left: 50%;top:50%;margin-left: -10%;margin-top: -140px}
  .popbox>h3{font-size: 1.2rem;padding: 3% 0;}
  .popbox>p{margin-top:10% }
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
  .footer-submit {
    background: #000;
    color: #fff;
    border: 0;
    width: 100% !important;
    display: block;
    padding: 0.7rem 0;
  }
.footer-submit .iconfont{margin-left: 10%}
 .footer-submit:hover .iconfont{margin-left: 20%}
</style>
