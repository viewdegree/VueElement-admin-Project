<!--
 * @Author: your name
 * @Date: 2020-02-20 22:02:19
 * @LastEditTime: 2020-02-21 14:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\Parent.vue
 -->
<template>
    <div>
        <h1>Parent</h1>
        <h5>vuex <span style="color:red">{{count}}</span></h5>
        <h5>getters <span style="color:blue">{{doubleCount}}</span></h5>
        <button @click="add">增加Vuex里的值</button>
        <button @click="delayAdd">延迟增加Vuex里的值</button>
        <!-- 传递$attrs的必须在中间层组件绑定$attrs,而且不能用简写-->
        <m-child :msg="parentMsg"  @showMsg="showMsg" ref="child" v-bind="$attrs" v-on="$listeners"></m-child>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    import MChild from './Child'
    export default {
        computed:{
            ...mapState({
                count:state=>state.text.count
            }),
            //写成解析对象写法,只有属性名与Vuex里的getters名相同时可以用数组字符串代替
            ...mapGetters([
                'doubleCount'
            ])
        },
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
            },
            ...mapMutations({
                add:'add'
            }),
            delayAdd(){
                this.$store.dispatch('delayAdd');
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