<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <h3>增加接口文档</h3>
    <el-form-item label="文章标题" prop="article_name">
        <el-input v-model="ruleForm.article_name"></el-input>
    </el-form-item>
    <el-form-item label="一级类名" prop="oneId">
        <!-- <el-select v-model="ruleForm.oneId" placeholder="请选择"> -->
             <el-select v-model="ruleForm.oneId" placeholder="请选择" @change="chan_two">
                <el-option
                v-for="item in oneFl"
                :key="item.id"
                :label="item.cnname"
                :value="item.id">
                </el-option>
            </el-select>
        <!-- </el-select> -->
    </el-form-item>
    <el-form-item label="二级类名" prop="twoId">
        <el-select v-model="ruleForm.twoId" placeholder="请选择">
                <el-option
                v-for="item in twoFl"
                :key="item.id"
                :label="item.cnname"
                :value="item.id">
                </el-option>
            </el-select>
    </el-form-item>
    <el-form-item label="是否显示" prop="art_show">
        <el-radio class="radio" v-model="ruleForm.art_show" label="1">是</el-radio>
        <el-radio class="radio" v-model="ruleForm.art_show" label="0">否</el-radio>
    </el-form-item>
    <el-form-item label="是否推荐" prop="recommend">
        <el-radio class="radio" v-model="ruleForm.recommend" label="1">是</el-radio>
        <el-radio class="radio" v-model="ruleForm.recommend" label="0">否</el-radio>
    </el-form-item>
    <el-form-item label="作者" prop="editer">
        <el-input v-model="ruleForm.editer"></el-input>
    </el-form-item>
    <el-form-item label="导读" prop="daodu">
        <el-input type="textarea" v-model="ruleForm.daodu"></el-input>
    </el-form-item>
    <el-form-item label="日期" prop="time">
      <div class="block">
        <el-date-picker
          v-model="ruleForm.time"
          type="datetime"
          placeholder="选择日期时间"
          format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item  prop="content">
    
    <!--editor的div为富文本的承载容器-->
    <div id="editor"></div>
      <!-- <button type="">点击</button> -->
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    name:'addInter',
    data() {
      return {
        ruleForm: {
          article_name: '',
          daodu: '',
          backorfont:'',
          editer:'',
          oneId:'',
          twoId:'',
          content:'',
          time:'',
          imgsrc:'',
          recommend:'0',
          art_show:'0',
          enname_one:''
        },
        twoFl:[],
        oneFl:[],
        editor: null,
        rules: {
          article_name: [
            { required: true, message: '请输入接口名称', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          editer: [
            { required: true, message: '请输入接口地址', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          // oneId: [
          //   { required: true, message: '请选择', trigger: 'change' }
          // ],
          // twoId: [
          //   { required: true, message: '请选择', trigger: 'change' }
          // ],
          daodu: [
            { required: true, message: '请输入接口地址', trigger: 'blur' },
            { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var _this = this;
        this.$refs[formName].validate((valid) => {
          
          if (valid) {
            console.log(111)
            // _this.ruleForm.content = this.editor.getContent();
            _this.axios.post("/api/back_article/addArticle",this.ruleForm).then((data)=>{
               if(data.data.code=="3022"){
                //  alert(data.data.msg)
                console.log(data)
               }else if(data.data.code=="3021"){
                  alert(data.data.msg)
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
      },
      chan_two(){
        this.twoFl = [];
        var _this = this;
        this.olddata[1].forEach((i)=>{
          // console.log(_this.oneFl[0].id)
          if(i.parent_id == this.ruleForm.oneId){
            _this.twoFl.push(i)
            // console.log(11)
          }
        })
        // console.log(this.twoFl[0].parent_id)
      }
      // gettext() {
      //   // 获取editor中的文本
      //    console.log(this.editor.getContent())
      // }
    },
    created(){
      this.axios.get('/api/back_article/getClass').then((data)=>{
        // this.ruleForm = data.data.data
        this.oneFl = data.data.data[0]
        this.twoFl = data.data.data[1]
        this.olddata = data.data.data
        // console.log(data.data.data)
      })
    },
    mounted() {
      // 实例化editor编辑器
      this.editor = UE.getEditor('editor');
      // console.log(this.editor)
      // console.log(this.editor.setContent("1223"))
    },
    destroyed() {
      // 将editor进行销毁
      this.editor.destroy();
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
