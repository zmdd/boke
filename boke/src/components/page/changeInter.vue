<template>
  <div>     
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <h3>修改接口文档</h3>
    <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="接口地址" prop="url">
        <el-input v-model="ruleForm.url"></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="backorfont">
        <el-select v-model="ruleForm.backorfont" placeholder="请选择">
            <el-option label="后台接口" value="back"></el-option>
            <el-option label="前台接口" value="font"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="请求类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择">
            <el-option label="get" value="get"></el-option>
            <el-option label="post" value="post"></el-option>
            <el-option label="formdata" value="formdata"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="请求参数" prop="sendparams">
        <el-input type="textarea" v-model="ruleForm.sendparams"></el-input>
    </el-form-item>
     <el-form-item label="返回数据" prop="getparams">
        <el-input type="textarea" v-model="ruleForm.getparams"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

</div>
</template>

<script>
  export default {
    name:'changeInter',
    data() {
      return {
        ruleForm: {
          title: '',
          url:'',
          type: '',
          sendparams: '',
          getparams: '',
          backorfont:''
        },
        rules: {
          title: [
            { required: true, message: '请输入接口名称', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          url: [
            { required: true, message: '请输入接口地址', trigger: 'blur' },
            { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          sendparams: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          getparams: [
            { required: true, message: '请输入接口发送参数', trigger: 'blur' }
          ],
          backorfont: [
            { required: true, message: '请输入接口返回参数', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
             this.axios.post("/api/apilist/",this.ruleForm).then((data)=>{
               if(data.data.code=="2000"){
                 alert(data.data.msg)
               }else if(data.data.code=="2001"){
                  alert(data.data.msg)
               }
             })
          } else {
            console.log('error submit!!');
            return false;
          }
          })
      },

      
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      this.ruleForm = this.$route.query.data
    }
  }
</script>
<style scoped>
 h3{
    margin-bottom: 20px;
    padding-left: 30px;
    font-size: 20px;
  }
  .el-input,.el-textarea{
    width: 600px;
  }
</style>
