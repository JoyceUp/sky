// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import qs from 'qs'
import req from './apis/http.js'
import './assets/icon/iconfont.css'
//引入全局css
import animated from 'animate.css' //动画插件
Vue.use(animated);
import './assets/css/common.css'
// 第三方UI框架
import 'element-ui/lib/theme-chalk/index.css'
import { Pagination, Menu, Submenu, MenuItem, MenuItemGroup, Message ,Row, Col,Carousel,CarouselItem,BreadcrumbItem,Form,FormItem,Input,Button,Alert,Progress,Icon,Select,Option,Checkbox} from 'element-ui'
Vue.component(Checkbox.name, Checkbox);
Vue.component(Icon.name, Icon);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Progress.name, Progress);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Pagination.name, Pagination);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Row.name, Row);
Vue.component(Form.name, Form);
Vue.component(Button.name, Button);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Col.name, Col);
Vue.component(Message.name, Message);
Vue.prototype.$message=Message;
Vue.component(Alert.name, Alert);
Vue.prototype.$alert=Alert;

//引入地图组件
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
Vue.use(Vuex);
//将axios配置到全局中
// Vue.prototype.qs=qs;
Vue.config.productionTip = false;
import axios from 'axios'
//配置跨域访问选项
axios.defaults.withCredentials=true;
// Vue.prototype.axios=axios;
Vue.prototype.axios = axios.create({
  headers: {'content-type': 'application/x-www-form-urlencoded'}
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  components: { App },
  template: '<App/>'
});
