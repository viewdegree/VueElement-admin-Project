<!--
 * @Author: your name
 * @Date: 2020-02-20 22:02:30
 * @LastEditTime: 2020-02-20 22:28:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\Child.vue
 -->
<template>
    <div>
        <h3>Child</h3>
        <h5>{{msg}}</h5>
        <button @click="passMsg">走你!</button>
    </div>
</template>

<script>
    export default {
        props:{
            msg:{
                type: String,
                default: ''
            }
        },
        methods:{
            passMsg(){
                this.$emit('showMsg','i from Child')
            }
        }
    }
</script>

<style scoped>

</style>