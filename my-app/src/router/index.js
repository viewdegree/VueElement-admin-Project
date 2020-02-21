/*
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-21 12:42:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//在单页面应用中只有一个页面但是可以通过切换组件的方式去切换改变页面内容

Vue.use(VueRouter)

const routes = [
  {
    path:'/home/:id',
    name:'home',
    //采用懒加载 表示访问的组件
    component: ()=>import('../views/Home.vue'),
    children:[{
      path: '/child',
      component: ()=>import('../views/Child.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
