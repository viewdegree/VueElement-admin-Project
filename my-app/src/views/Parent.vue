<!--
 * @Author: your name
 * @Date: 2020-02-20 22:02:19
 * @LastEditTime: 2020-02-21 07:35:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\Parent.vue
 -->
<template>
    <div>
        <h1>Parent</h1>
        <!-- 传递$attrs的必须在中间层组件绑定$attrs,而且不能用简写-->
        <m-child :msg="parentMsg"  @showMsg="showMsg" ref="child" v-bind="$attrs" v-on="$listeners"></m-child>
    </div>
</template>

<script>
    import MChild from './Child'
    export default {
        data(){
            return{
                parentMsg: "from Parent msg"       
            }
        },
        components:{
            MChild,
        },
        methods:{
            showMsg(val){
                this.parentMsg = val;
            }
        },
        mounted(){
            // 这是一个组件
            console.log(this.$children[0].childMsg);
            console.log(this.$refs.child.childMsg);
        }
    }
</script>

<style scoped>

</style>