<template>

	<div class="pagina mx-auto">
		<div class="area-login grid flex align-content-center flex-wrap mx-auto ">
			<LoginLogo/>
			<LoginForm/>	
		</div>
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



</style>