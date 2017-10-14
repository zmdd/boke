<template>
	<div>
		<heads></heads>
		<list></list>
		<div class="cont">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

import heads from "./pages/head"
import list from "./pages/list"

export default {
		name: 'login',
		data() {
			return {
				username: "",
				pwd: "",
				useblo: "",
				pwdblo: ""
			}
		},
		components:{
			heads:heads,
			list:list
		}
}
</script>

<style>
 .el-collapse-item__content{
    padding:0
 }
  .list{
      width: 17%;
      height: 701px;
      float: left;
      background: #eee;
    }
.el-collapse-item__header{
  background: #eee;
}
    .backg{
      height: 45px;
      width: 100%;
      /* padding-left: 20px; */
      line-height: 45px;
      background: #E4E8F1;
    }
    .backg:hover{
      background: #888;
    }
    .header{
        width: 100%;
        height: 50px;
        background: #ccc;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left{
       margin-left:30px;
    }
    .right{
       margin-right:30px;
    }
     .cont{
      width: 83%;
      height: 701px;
      float: right;
    }
    .backg{
      height: 45px;
      width: 100%;
      padding:0 20px; 
      line-height: 45px;
      background: #E4E8F1;
    }
    .backg:hover{
      background: #888;
    }
    .bgcolor{
      color: blue;
    }

</style>