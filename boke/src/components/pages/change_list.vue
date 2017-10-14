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
        data() {
            return {
                allData:[],
                tableData: [],
                twoid:"",
                one_name:'',
                two_name:''
            }
        },
        created() {
            this.twoid=this.$route.query.twoid;
            var _this = this;
            this.axios.get("/api/front_article/getArticleAll").then((data) => {
                _this.allData = data.data.data;
                // console.log(_this.allData)
                // _this.one_name = 
                _this.tableData=[];
                _this.allData.forEach((v,i)=>{
                    // console.log(v)
                    // _this.one_name = v.cnname_one;
                    // _this.two_name = v.cnname_two;
                    if(v.twoId==_this.twoid){
                        _this.tableData.push(v)
                    }
                })
                // console.log(_this.allData,_this.tableData)
            })
        },
        // 监听路由 当切换内容时刷新路由
        watch:{
            $route(){
                this.twoid=this.$route.query.twoid;
                this.tableData=[];
                this.allData.forEach((v,i)=>{
                    if(v.twoId==this.twoid){
                        this.tableData.push(v)
                    }
                })
            }
        }
    }
</script>
<style>
    .el-table:after,
    .el-table:before {
        position: static;
    }
    
    .el-table__header thead {
        /* background:rgba(255, 255, 255, .5); */
    }
    
    .el-table tr {
        margin-top: 50px;
        background: none;
        border: none;
    }
    
    table tbody tr td {
        margin-top: 50px;
        border: none;
        border: none;
    }
    
    .el-table td,
    .el-table th.is-leaf {
        border: none;
        padding: 0;
        margin-top: 20px;
    }
    
    .table {
        border: none;
    }
    
    .el-table {
        position: static;
    }
    
    .el-table {
        border: none;
    }
</style>