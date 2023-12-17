<template>
	<div class="area-login grid flex align-content-center flex-wrap mx-auto ">
		<div class="col-8  flex align-content-center flex-wrap mx-auto">
			<div class="w-9 m-auto 	">
				<div>
					<img class="w-full" src="@/assets/img/logo.png"/>
				</div>
				<div>
					<p>Mauris non arcu suscipit, cursus enim id, malesuada augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed mattis velit, id dignissim urna. </p>
				</div>
			</div>
		</div>
		<div class="col-4">
			<div class="login-box bg-white p-4 border-0		">
				<h3 class="fucsia text-center	text-3xl font-bold m-0	">Login</h3>
				<form>
					<div class="mb-3">
						<label class="font-bold block" for="">Login</label>
						<input class="w-full p-3 border-round-sm	border-solid border-round-sm border-1	" type="email">
					</div>
					<div class="mb-3">
						<label class="font-bold block" for="">Senha</label>
						<input class="w-full p-3 border-round-sm	border-solid border-round-sm border-1	" type="password">
						<p class="mt-1 text-sm	text-right	">
							<small class="text-right	"><a class="azul" href="">Esqueci minha senha</a></small>
						</p>
					</div>
					<div>
						<button class="bg-azul w-full p-3 text-base	font-semibold	bg-fucsia-hover	" type="submit">Acessar</button>
					</div>
					<div>
						<p class="mt-1 text-sm	text-right	">
							Não tem uma conta? 
							<a class="azul"  href="">Criar uma conta</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	//import Menu from '@/blocos/Menu'

	export default {
		name: 'Home',
		components: {
				//Menu
		}
	}
</script>

<style scoped>
.area-login{
	height: 100vh;
	width: 90%;

}
</style>