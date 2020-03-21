import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);



export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index.vue',
      component:resolve=>require(['@/views/index'],resolve)//首页
    },
    {
      path: '/product',
      name: 'product-solutions',
      component:resolve=>require(['@/views/productList'],resolve)//产品列表
    },
    {
      path: '/detail',
      name: 'detail',
      component:resolve=>require(['@/views/detail'],resolve)//新闻详情
    },
    {
      path: '/solution',
      name: 'solution',
      component:resolve=>require(['@/views/productList'],resolve)//手机端导航
    },
    {
      path: '/system-solutions',
      name: 'system-solutions',
      component:resolve=>require(['@/views/productList'],resolve)//手机端导航
    },
    {
      path: '/contact',
      name: 'contact',
      component:resolve=>require(['@/views/contact'],resolve)//联系我们
    },
    {
      path: '/extension',
      name: 'extension',
      component:resolve=>require(['@/views/extension'],resolve)//联系我们
    },
    {
      path: '/case',
      name: 'case',
      component:resolve=>require(['@/views/productList'],resolve)//招聘列表页
    },
    {
      path: '/news',
      name: 'news',
      component:resolve=>require(['@/views/productList'],resolve)//新闻列表
    },
    {
      path: '/company-profile',
      name: 'company-profile',
      component:resolve=>require(['@/views/about'],resolve)//关于我们
    },{
      path: '/mnav',
      name: 'mnav',
      component:resolve=>require(['@/views/common/mnav'],resolve)//手机端导航
    },
  ]
})
