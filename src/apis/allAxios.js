import req from './http.js'
//定义接口
export const CATEGORY= params =>req('get','/api/v1/category');//获取整体分类
// export const BANNER= params =>req('get','api/blocks',{title:'indexfocus'});//获取轮播图
export const BANNER= params =>req('get','api/v1/blocks',{title:'indexfocus'});//获取轮播图
export const HOTPRO= params =>req('get','api/v1/hot-products',{category_id:4});//获取热门产品
export const CASE= params =>req('get','api/v1/hot-products',{category_id:6,limit:4});//获取热门精品案例
export const NEWS= params =>req('get','api/v1/hot-products',{category_id:7});//获取热门新闻
export const COOP= params =>req('get','api/v1/blocks',{title:'links'});//获取合作单位









