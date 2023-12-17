<template>

	<div class="area-login grid flex align-content-center flex-wrap mx-auto ">
		<LoginLogo/>
		<LoginForm/>	
	</div>
	
</template>

<script>

	import LoginForm from '@/blocos/LoginForm'
	import LoginLogo from '@/blocos/LoginLogo'

	export default {
		name: 'Login',
		components: {
			LoginLogo,
			LoginForm
		}
	}

</script>

<style>

.area-login{
	height: 100vh;
	width: 90%;
}

</style>