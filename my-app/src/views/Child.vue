<!--
 * @Author: your name
 * @Date: 2020-02-20 22:02:30
 * @LastEditTime: 2020-02-21 08:00:56
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
                childMsg: 'child msg',
                a:'childMsga',
                b:'childMsgb',
                c:'childMsgc',
            }
        },
        methods:{
            passMsg(){
                this.$emit('showMsg','i from Child')
            },
        },
        // 自动触发 采用生命周期的挂载函数
        mounted(){
            console.log('attrs',this.$attrs);
            bus.$on('msg',(val)=>{
                this.childMsg = val
            })
            //用listens的属性传递给上级需要用到emit方法
            this.$emit('getData','我来自孙子组件')
        }
    }
</script>

<style scoped>

</style>