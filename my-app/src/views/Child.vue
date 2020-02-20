<!--
 * @Author: your name
 * @Date: 2020-02-20 22:02:30
 * @LastEditTime: 2020-02-21 07:16:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\Child.vue
 -->
<template>
    <div>
        <h3>Child</h3>
        <h5>{{msg}}</h5>
        <h6>{{childMsg}}</h6> 
        <button @click="passMsg">走你!</button>
    </div>
</template>

<script>
    import bus from '../util/bus'
    export default {
        props:{
            msg:{
                type: String,
                default: ''
            }
        },
        data(){
            return {
                childMsg: 'child msg'
            }
        },
        methods:{
            passMsg(){
                this.$emit('showMsg','i from Child')
            },
        },
        // 自动触发 采用生命周期的挂载函数
        mounted(){
            bus.$on('msg',(val)=>{
                this.childMsg = val
            })
        }
    }
</script>

<style scoped>

</style>