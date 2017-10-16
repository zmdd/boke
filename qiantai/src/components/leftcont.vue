<template>
    <div>
        <div class="top">
            <h3>全站搜索</h3>
            <input type="text"> <input type="button" value="搜索">
        </div>
        <div class="middle">
            <h3>点击排行</h3>
        </div>
        <div class="bottom">
            <h3>点击排行</h3>
        </div>
    </div>
</template>

<script>
   
    export default {
        name:'leftcont',
        data() {
            return {
                head_data:[],
                activeIndex: '1',
                tableData: [],
            };
        }
    }
</script>


<style >
    
    .header{
        height: 60px;
        background: #314158;
        line-height: 60px;
        display: flex;
    }
    h3{
        color: #0F76CF;
        margin:0 30px;
    }
    main{
        width: 100%;
        height: 100%;

    }
    .list{
        color: #ccc;
        padding: 10px 20px;
        display: flex;
        /* background: #FFFDDE; */
        background: rgba(0,0,0,.7)
    }
    .list li{
        padding-right: 5px;
    }
    .right{
        width: 60%;
        /* padding-bottom: 450px; */
    }
    .left{
        width: 30%;
    }
    .cont_list{
        padding: 30px;
        border: none;
    }
    .el-table{
        background: none;
        border-left: none;
        border: none ;
    }
    .el-menu--horizontal .el-submenu{
        width: 150px;
    }
</style>