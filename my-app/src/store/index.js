/*
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-21 12:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state){
      state.count++
    },
    decrese(state){
      state.count--
    }
  },
  actions: {
    delayAdd(context){
      setTimeout(()=>{
        // 调用add方法
        context.commit('add')
      },1000)
    }
  },
  modules: {
  }
})
