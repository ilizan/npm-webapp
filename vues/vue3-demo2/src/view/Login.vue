<template>
	<section>
		login
	</section>
</template>

<script>
export default {
	name: "login",
	data(){
		return {

		}
	},
	methods: {

	},
	mounted() {
		let user = {
			id:1,
			username:'name'
		}
		sessionStorage.setItem("user", JSON.stringify(user));
		this.$router.push({ path: "/" })
  }
};
</script>

<style scoped>
</style>