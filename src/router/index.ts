import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)
const originalPush:any = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err: any) => err)
}

const routes: Array<RouteConfig> = [
  // 主页路由
  {
    path:'/',
    children:[
      {path:'/',name:'One',component:() => import(/* webpackChunkName: "风丸" */ '../components/BannerOne.vue')},
      {path:'/one',name:'Tow',component:() => import(/* webpackChunkName: "夜半" */ '../components/BannerTwo.vue')},
      {path:'/tow',name:'Three',component:() => import(/* webpackChunkName: "见行者" */ '../components/BannerThree.vue')}
    ],
    component: () => import(/* webpackChunkName: "HomePage" */ '../view/HomePage.vue')
  },
  // 图鉴路由
  {
    path:'/operators',
    children:[
      {path:'/operator/:id',name:'Role',component:() => import(/* webpackChunkName:"Role"*/ '../components/Roles/Role.vue')},
    ],
    component:()=>import(/* webpackChunkName: "OpertionsPage" */ '../view/Operators.vue')
  },
  // 时装路由
  {
    path:'/outfits',
    name:'Outfits',
    component:()=>import(/* webpackChunkName: "OutfitsPage" */ '../view/Outfits.vue')
  },
  {
    path:'/outfit/:id',
    name:'Outfit',
    component:()=>import(/* webpackChunkName:"OutfitPage" */ '../view/Outfit.vue')
  },
  // 管理路由
  {
    path:'/manage',
    name:'Manage',
    component:()=>import(/* webpackChunkName:"ManagePage" */ '../view/Manage.vue')
  },
  // 其他路由
  {path:'/error',name:'ErrorPage', component:() => import(/* webpackChunkName: "ErrorPage" */ '../view/Error.vue')},
  {path:'*',name:'Error',redirect:'/error'}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
