/*
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-21 14:12:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
//引入text模块
import text from './text'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    text
  }
})
