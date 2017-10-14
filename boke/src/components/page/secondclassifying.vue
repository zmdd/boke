<template>
  <div>
      <h3>一级类名选择</h3>
      <p>
          <span>中文类名</span>
          <el-select v-model="ruleForm2.oneId" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.cnname"
                :value="item.id">
              </el-option>
          </el-select>
      </p>
      <h3 class="two">二级类名设置</h3>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="中文类名" prop="cnname_two">
          <el-input type="cnname_two" v-model="ruleForm2.cnname_two" auto-complete="off" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="enname_two">
          <el-input type="rules2.enname_two" v-model="ruleForm2.enname_two" auto-complete="off" style="width:200px"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'secondclassifying',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入英文类名'));
      } else {
        if(/^[a-zA-Z]{4,12}$/.test(this.ruleForm2.enname_two)){
          var _this = this;
          // this.axios.post('/api/back_class/add_two_class',this.ruleForm2).then((data)=>{
          //     _this.$message({
          //       showClose: true,
          //       message: '恭喜你，插入成功',
          //       type: 'success'
          //     });
          // })
          callback()
        }else{
          callback(new Error('英文类名格式错误'));
        }
      }
    };
    return {
      input:'',
      ruleForm2: {
        enname_two: '',
        cnname_two: '',
        oneId:''
      },
       options:[],
       value: '',
       rules2: {
          enname_two: [
            { validator: validatePass, trigger: 'blur' }
          ]
      }
    }
  },
  
  methods: {
 submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/back_class/add_two_class",this.ruleForm2).then((data)=>{
              switch(data.data.code){
                  case "1030":{
                    alert(data.data.msg);
                    break;
                  }
                  case "1031":{
                    alert(data.data.msg);
                    break;
                  }
                  case "1032":{
                    alert(data.data.msg);
                    break;
                  }
              }
            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },

  created(){
    var _this = this;
    this.axios.get('/api/back_article/getClass').then((data)=>{
      _this.options = data.data.data[0]
    })
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
