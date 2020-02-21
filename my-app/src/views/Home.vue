<!--
 * @Author: your name
 * @Date: 2020-02-21 08:32:51
 * @LastEditTime: 2020-02-21 12:15:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\Home.vue
 -->
<template>
    <div>
        我是home组件
        <h1>{{$route.params.id}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>