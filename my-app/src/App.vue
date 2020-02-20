<!--
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-20 22:59:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\App.vue
 -->
<template>
  <div id="app">
    <button @click="passMsg">传你</button>
    <m-parent></m-parent>
  </div>
</template>
<script>
import bus from './util/bus'
import MParent from './views/Parent'
export default {
  components:{
    MParent
  },
  methods:{
    passMsg(){
      bus.$emit('msg','i am from app');
    }
  }
}
</script>
<style>
</style>
