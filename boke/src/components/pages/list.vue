<template>
    <div class="list">
       <el-collapse v-model="activeNames" @change="">
           <el-collapse-item title="文章管理" name=""> 
              <router-link tag="div" to="/back/form" class="backg">添加文章</router-link>  
              <router-link tag="div" to="/back/table" class="backg">文章列表</router-link> 
           </el-collapse-item> 
          <el-collapse-item title="分类管理" name="2">
              <router-link tag="div" to="/back/firstclassifying" class="backg">增加一级分类</router-link>  
              <router-link tag="div" to="/back/secondclassifying" class="backg">增加二级分类</router-link> 
              <router-link tag="div" to="/back/categoryList" class="backg">分类列表</router-link>
          </el-collapse-item>
          <el-collapse-item title="接口管理" name="3">
              <router-link tag="div" to="/back/addInter" class="backg">增加接口文档</router-link>  
              <router-link tag="div" to="/back/frontInter" class="backg">前台接口列表</router-link> 
              <router-link tag="div" to="/back/backInter" class="backg">后台接口列表</router-link>
          </el-collapse-item>
          <el-collapse-item title="留言板管理" name="4">
              <router-link tag="div" to="/back/intro" class="backg">个人简介留言</router-link>  
              <router-link tag="div" to="/back/blogs" class="backg">博客留言</router-link> 
          </el-collapse-item>
      </el-collapse> 
    </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        activeNames: ['1']
      };
    }
}
</script>

<style scoped>
   .el-collapse-item__content{
    padding:0
 }
  .list{
      width: 17%;
      height: 701px;
      float: left;
      background: #eee;
    }
.el-collapse-item__header{
  background: #eee;
}
    .backg{
      height: 45px;
      width: 100%;
      /* padding-left: 20px; */
      line-height: 45px;
      background: #E4E8F1;
    }
    .backg:hover{
      background: #888;
    }
    .header{
        width: 100%;
        height: 50px;
        background: #ccc;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left{
       margin-left:30px;
    }
    .right{
       margin-right:30px;
    }
     .cont{
      width: 83%;
      height: 701px;
      float: right;
    }
    .backg{
      height: 45px;
      width: 100%;
      padding:0 20px; 
      line-height: 45px;
      background: #E4E8F1;
    }
    .backg:hover{
      background: #888;
    }
    .bgcolor{
      color: blue;
    }
</style>
