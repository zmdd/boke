<template>
	<div class="cont_list">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                        label="标题"
                        width="180">
                        <template scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.article_name }}</span>
                        </template>
                        </el-table-column>

                        <el-table-column
                        label="分类"
                        width="180">
                        <template scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.cnname_one }}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                            label="作者"
                            width="180">
                            <template scope="scope">
                                <el-icon name="editer"></el-icon>
                                <span style="margin-left: 10px">{{ scope.row.editer }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="时间"
                        width="180">
                        <template scope="scope">
                            <!-- <el-icon name="time"></el-icon> -->
                            <span style="margin-left: 10px">{{ scope.row.time }}</span>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
</template>

<script>
    export default {
        name:'midd_list',
        data() {
            return {
                head_data:[],
                activeIndex: '1',
                tableData: [],
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created(){
            var _this = this;
            this.axios.get('/api/front_article/getArticleAll').then((data)=>{
                _this.tableData = data.data.data
                console.log(this.head_data)
            })
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
     .el-table tr {
        margin-top: 50px;
        background: none;
        border: none;
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