<template>
  <div>
       <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          label="标题"
          width="180">
          <template scope="scope">
            
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="前后端分类"
          width="180">
          <template scope="scope">
            
            <span style="margin-left: 10px">{{ scope.row.backorfont }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="时间"
          width="180">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
        <div class="block" style="margin-top:30px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="nowpage"
            :page-sizes="[2, 4, 10, 15]"
            :page-size="everyrows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="olddata.length">
          </el-pagination>
        </div>
  </div>
    
</template>

<script>
  export default {
    name:'backInter',
    data() {
      return {
        tableData: [{
          title:'',
          id:'',
          url:'',
          type:'',
          time:'',
          sendparams:'',
          getparams:'',
          backorfont:''
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        everyrows:2,
        nowpage:1,
        olddata:[]
      }
    },
    methods: {
      handleEdit(index, row) {
        // console.log(index, row);
        this.$router.push({name:'changeInter',query:{data:row}})
        // this.$router.push({path:'changeInter',query:{data:row}})
      },
      handleDelete(index, row) {
        console.log(index, row);
        var _this = this;
        this.axios.post("/api/apilist/delete",{id:row.id}).then((data)=>{
          console.log(data.data.code)
          _this.$router.go(0)
        })
      },
      // clicksure(){
      //         var _this=this;
      //         this.axios.post("/api/apilist/delete",{id:this.id}).then((data)=>{
      //           if(data.data.code=="2032"){
      //             // this.dialogVisible=false;
      //             _this.$router.go(0);
      //           }
      //         })

      //   },
      //       handleClose(done) {
      //   this.$confirm('确认关闭')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.everyrows = val;
        this.tableData = this.olddata.slice(0,this.everyrows)
      },
      handleCurrentChange(val) {
        this.nowpage = val;
        this.tableData = this.olddata.slice((this.nowpage-1)*this.everyrows,this.nowpage*this.everyrows)
        console.log(`当前页: ${val}`);
      }
      },
      
    
    created(){
      this.axios.get('/api/apilist/list?type=back').then((data)=>{
        
        this.olddata = data.data.data
        this.tableData = this.olddata.slice(0,this.everyrows)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }

</style>
