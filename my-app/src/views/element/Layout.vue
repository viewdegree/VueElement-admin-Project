<!--
 * @Author: your name
 * @Date: 2020-02-21 14:35:59
 * @LastEditTime: 2020-02-21 15:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VueElement-admin-Project\my-app\src\views\element\Layout.vue
 -->
<template>
    <div>
        <h3>4等分布局</h3>
        <!-- 因为传递的是数字而不是字符串所以需要加:,如果仅仅是传输字符串那么不需要加: -->
        <!-- 24分栏布局,用于布局页面中div中的内容的,小块的内容 -->
        <el-row :gutter="20">
            <el-col :span="6"><div class="content">1</div></el-col>
            <el-col :span="6"><div class="content">2</div></el-col>
            <el-col :span="6"><div class="content">3</div></el-col>
            <el-col :span="6"><div class="content">4</div></el-col>
        </el-row>
        <!-- 页面布局,用于整体布局 -->
        <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    background-color: #000;
    color: #fff;
    overflow: hidden;
}
</style>
