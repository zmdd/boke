<template>
	<div class="load">
	  	<div id="from">
	  		<h4 id="pleaselogin">请登陆</h4>
	  		<ul>
				<li v-focus="name">
					<!-- <label for="username"></label> -->
					<input id="username" type="text" v-model.lazy="name.value" @blur="requiredState(name)" placeholder="邮箱地址">
				</li>
				<li v-focus="pwd">
					<!-- <label for="pwd"></label> -->
					<input id="pwd" type="password" v-model.lazy="pwd.value" @blur="requiredState(pwd)" placeholder="密码">
				</li>
			</ul>
	  		<el-button type="success" id="log" @click="logi">登陆</el-button>
	  	</div>
	</div>
</template>

<script>
export default {
		name: 'login',
		data() {
			return {
				name:{
					value:'',
					reg:/^[a-zA-Z]{4,12}$/,
					msg:'不正确',
					required:true,      // 必填项
					focuestate:false,
					state:false 
				},
				pwd:{
					value:'',
					reg:/\w{4,12}$/,
					msg:'不正确',
					required:false,
					focuestate:false,
					state:false 
				}
			}
		},
		methods:{
			requiredState(data){
				// console.log(data)
				data.focuestate = true;
			},
			logi(){
				if(this.name.state && this.pwd.state && this.name.value!='' && this.pwd.value!=''){
					// console.log(this.name.value)
					console.log(11)
					this.axios.post('/api/back_class',{
						loginname:this.name.value,
						loginpw:this.pwd.value
					}).then((data)=>{
						console.log(data)
						if(data.data.code == '1001'){
							this.$router.push({path:'/back'})
						}
					})
				}
			}
		},
		directives:{
			focus:{
				componentUpdated(el,binding){
					
					let clearP = () => {
						let $p = el.getElementsByTagName('p')[0]
						// console.log($p)
						if($p !== undefined){
							el.removeChild($p)
						}
					}
					// 检验值
					let test = () => {
						clearP()
						if(binding.value.value !== ""){
							if(!binding.value.reg.test(binding.value.value)){
								let $p = document.createElement('p');
								$p.innerHTML = binding.value.msg
								$p.style.color = 'red'
								el.appendChild($p)
								binding.value.state = false
							}else{
								binding.value.state = true
							}
						}
					}
					let requiredFn=()=>{
						clearP()
						if(binding.value.value===""){
							var $p=document.createElement("p");
								$p.innerHTML="不能为空";
								el.appendChild($p)
						}else{
							test()
						}
					}
					
					switch(binding.value.required){
						case true:{
								requiredFn()
						}break;
						default:{
							test()
						}
					
					}

				}
			}
		}
}
</script>

<style>
	#from {
		width: 400px;
		height: 300px;
		border: 1px solid #ccc;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 10px;
	}

	h4 {
		font-weight: normal;
		text-align: center;
		font-size: 24px;
		padding: 10px 0;
		margin:0;
	}
	ul li{
		margin-top: 30px;
	}
	input {
		width: 80%;
		height: 40px;
		display: block;
		margin: 0 auto;
		border-radius: 15px;
		border: none;
		box-sizing: border-box;
		padding: 0 10px;
		outline: none;
		border:1px solid #ccc;
	}

	p {
		width: 70%;
		margin: 3px auto;
		height: 20px;
		line-height: 20px;
		color: #f00;
	}

	#log {
		width: 80%;
		display: block;
		margin: 20px auto;
		background:orange;
		border:0;
		outline: none;
	}

	#pleaselogin {
		padding: 20px 0;
	}

</style>