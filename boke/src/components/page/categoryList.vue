<template>
  <div>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
            <el-table
                :data="props.row.twodata"
                style="width: 100%">
                <el-table-column
                  prop="cnname">
                </el-table-column>
                <el-table-column
                  prop="enname">
                </el-table-column>
                <el-table-column>
                  <template scope="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.$index, scope.row,'two')">编辑</el-button>
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row,'two',props.row.onedata.id)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="中文名"
      prop="onedata.cnname">
    </el-table-column>
    <el-table-column
      label="英文名"
      prop="onedata.enname">
    </el-table-column>
     <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row,'one')">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,'one')">删除</el-button>
      </template>
    </el-table-column>
     
  </el-table>
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <span>是否删除</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="clicksure">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    name:'categoryList',
    data() {
      return {
        tableData5: [],
        dialogVisible: false,
        state:"",
        oneId:'',
        enname_one:"",
        twoId:""
      }
    },
    created(){
      var _this=this;
      this.$http.get("/api/back_class/class_list").then(function(data){ 
          
            _this.tableData5 = data.data.data;
            // console.log(_this.tableData5)

      })
    },
     methods: {
      
      handleEdit(index, row,state) {
        // console.log(row)
            if(state=="one"){
              this.$router.push({
                 name:"first_change",
                 query:{
                   data:row
                 }
              })
            }else{
               this.$router.push({
                 name:"second_change",
                 query:{
                   data:row
                 }
               })
            }
        
      },
      handleDelete(index,data,state,ss){
           this.dialogVisible=true;
           this.state=state;
           
            if(state=="one"){
               this.oneId=data.onedata.id;
               this.enname_one=data.onedata.enname;
            }else{
              var _this=this;
              this.twoId=data.id;
              this.oneId=data.parent_id;
              this.tableData5.forEach(function(i) {
                if(i.onedata.id==_this.oneId){
                  _this.enname_one=i.onedata.enname;
                  console.log( _this.enname_one)
                }
              }, this);
            }
        },
        clicksure(){
          if(this.state=="one"){
              var _this=this;
              this.axios.post("/api/back_class/delete_one",{id:this.oneId,enname_one:this.enname_one}).then((data)=>{
                if(data.data.code=="1071"){
                  this.dialogVisible=false;
                  _this.$router.go(0);
                }
              })
          }else{
              var _this=this;
              this.axios.post("/api/back_class/delete_two",{oneId:this.oneId,enname_one:this.enname_one,twoId:this.twoId}).then((data)=>{
                console.log(data.data.code)
                if(data.data.code=="1071"){
                  this.dialogVisible=false;
                  _this.$router.go(0);
                }
              })
          }
        },
        handleClose(done) {
          this.$confirm('确认关闭')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      },
    }
</script>