<template>
	<section class="f_main">
		父组件
		<hr/>
		<el-form ref="form" label-width="120px" style="width:280px;">
			<el-form-item label="给子组件传值">
				<el-input v-model="val"></el-input>
			</el-form-item>
			<el-form-item label="调用子组件方法">
				<el-button type="primary" @click="click1()">button</el-button>
			</el-form-item>
			
		</el-form>

		
		<Components :valStr="val" ref="c1" v-on:zval = "zvalFn" @list1="listFn()"></Components>
		{{zvalS}}
	</section>
</template>

<script>
import Components from './components.vue'
export default {
	name: "fcomponents",
	components: {
		Components
  },
	data(){
		return {
			val:"",
			zvalS:""
		}
	},
	methods: {
		zvalFn: function(zval){
			this.zvalS = zval;
		},
		click1:function(){
			this.$refs.c1.Fn1();
		},
		listFn:function(){
			alert("我是父组件方法，子组件调用了我")
		}
	},
	mounted() {
    
  }
};
</script>

<style scoped>
.f_main{
	background-color: #cccccc;
	min-height:500px;
}
</style>