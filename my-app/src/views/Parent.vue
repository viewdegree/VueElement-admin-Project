<!--
 * @Author: your name
 * @Date: 2020-02-20 22:02:19
 * @LastEditTime: 2020-02-20 22:28:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\Parent.vue
 -->
<template>
    <div>
        <h1>Parent</h1>
        <m-child :msg="parentMsg"  @showMsg="showMsg"></m-child>
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
        }
    }
</script>

<style scoped>

</style>