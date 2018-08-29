<template>
	<section class="z_main">
		子组件{{valStr}}
		<el-form ref="form" label-width="120px" style="width:280px;">
			<el-form-item label="传值给父组件">
				<el-input v-model="zval"></el-input>
				<el-button type="primary" @click="clickD()">button</el-button>
			</el-form-item>
			<el-form-item label="调用子组件方法">
				<el-button type="primary" @click="$emit('list1')">button</el-button>
			</el-form-item>

			
		</el-form>
	</section>
</template>

<script>
export default {
	name: "zcomponents",
	props:{
		valStr: String
	},
	data(){
		return {
			zval:""
		}
	},
	methods: {
		Fn1(){
			alert("我是子组件方法，父组件调用了我")
		},
		clickD () {
			console.log(11)
			this.$emit('zval', this.zval)
		}
	},
	mounted() {
    
  }
};
</script>

<style scoped>
.z_main{
	background-color: #FFF;
	min-height:200px;
	width:700px;
	margin:0 auto;
}
</style>