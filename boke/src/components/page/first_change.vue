<template>
  <div>
      
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
          <h3>一级类名修改</h3>
          <p>
            <el-form-item
              label="中文类名"
              prop="cnname_one"
            >
              <el-input type="cnname_one" v-model.number="numberValidateForm.cnname_one" auto-complete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item
              label="英文类名"
              prop="enname_one"
              :rules="[
                { required: true, message: '请输入英文类名'},
              ]"
            >
              <el-input type="enname_one" v-model.number="numberValidateForm.enname_one" auto-complete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
              <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
          </p> 
            
        </el-form>
      
      
      <!-- <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item> -->
  </div>
</template>

<script>
export default {
  name: 'first_change',
  data() {
      return {
        numberValidateForm: {
          enname_one: '',
          cnname_one: '',
          oldenname_one:''
        }
      };
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          var _this = this;
          if (valid) {
            this.axios.post('/api/back_class/amend_class_one',this.numberValidateForm).then((data)=>{
              _this.$message({
                showClose: true,
                message: '恭喜你，插入成功',
                type: 'success'
              });
            })
          } else {
            this.$message.error('插入失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  created(){
    this.numberValidateForm.enname_one = this.$route.query.data.onedata.enname
    this.numberValidateForm.oldenname_one = this.$route.query.data.onedata.enname
    this.numberValidateForm.cnname_one = this.$route.query.data.onedata.cnname
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  margin: 20px 0 0 50px;
}
p{
  margin: 30px 0 0 40px;
}
p span{
  font-size: 14px;
  color: #000000;
  margin-right: 10px;
}
.two{
  margin-top: 50px;
}
.btn{
  margin-top: 40px;
  margin-left: 110px;
}
</style>
