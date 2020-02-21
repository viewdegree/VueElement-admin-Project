<!--
 * @Author: your name
 * @Date: 2020-02-20 21:37:18
 * @LastEditTime: 2020-02-21 08:00:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\App.vue
 -->
<template>
  <div id="app">
    <button @click="passMsg">传你</button>
    <m-parent :msga="a" :msgb="b" :msgc="c" @getData="getData"></m-parent>
  </div>
</template>
<script>
import bus from './util/bus'
import MParent from './views/Parent'
export default {
  components:{
    MParent
  },
  data(){
    return{
      a:'parentMsga',
      b:'parentMsgb',
      c:'parentMsgc', 
    }
  },
  methods:{
    passMsg(){
      bus.$emit('msg','i am from app');
    },
    getData (val) {
      console.log(val);
    },
  },
  // mounted(){
  //   console.log('listeners', this.$listeners);
  // }
}
</script>
<style>
</style>
