/*
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-21 14:35:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//挂载element到Vue实例上
Vue.use(ElementUI)

// Vue.config.productionTip = false
// //路由守卫 就是进入路由之前需要做的事情
// router.beforeEach((to, from, next)=>{
//   console.log(to.path);
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
