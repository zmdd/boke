<template>
    <div class="bigbox">
        <!-- 头部 -->
        <header class="header">
            <h3>个人博客</h3>
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
               
                <el-submenu v-for="(i,index) in head_data" :index="i.onedata.id">
                    <template slot="title">{{i.onedata.cnname}}</template>
                    <el-menu-item  v-for="k in i.twodata" :index='k.id'>{{k.cnname}}</el-menu-item>
                    
                </el-submenu>


            </el-menu>
        </header>
        <main>
            <ul class="list">
                <li>
                    <el-breadcrumb separator="">
                    <el-breadcrumb-item :to="{ path: '/font_list' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{one_name}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{two_name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </li>
            </ul>

            <div class="right">
                <router-view></router-view>
            </div>

            <div class="left">
                <leftcont></leftcont>
            </div>
        </main>




    </div>
</template>

<script>
    import leftcont from "./leftcont"
    export default {
        name:'font_list',
        data() {
            return {
                head_data:[],
                activeIndex: '1',
                tableData: [],
                one_name:'',
                two_name:''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                var _this = this;
                var twoid = keyPath[1]
                // console.log(key, keyPath);
                this.$router.push({path:'/font_list/change_list',query:{
                    twoid:twoid
                }})
                this.head_data.forEach((i)=>{
                   if(i.onedata.id == keyPath[0]){
                       _this.one_name = i.onedata.cnname
                   }
                   i.twodata.forEach((k)=>{
                       if(k.id == keyPath[1]){
                        _this.two_name = k.cnname
                      }
                   })
                })
                // this.$route.query.twoid = twoid;
            }
        },
        components:{
            leftcont:leftcont
        },
        created(){
            var _this = this;
            this.axios.get('/api/front_article/getNav').then((data)=>{
                _this.head_data = data.data.data
                //  console.log(this.head_data)
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
        float: left;
    }
    .left{
        width: 30%;
        float: left;
        padding: 20px;
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