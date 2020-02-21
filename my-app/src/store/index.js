/*
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-21 13:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //定义数据
  state: {
    count:0
  },
  getters:{
    doubleCount(state){
      return state.count*2
    }
  }
  ,
  //定义同步的方法
  mutations: {
    add(state){
      state.count++
    },
    decrese(state){
      state.count--
    }
  },
  //定义异步的方法
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
