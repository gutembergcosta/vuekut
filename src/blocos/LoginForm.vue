<template>

	<div class="col-4">
		<div class="login-box bg-white p-4 border-0	shadow-2 border-round-lg">
			<h3 class="fucsia text-center mb-3	text-3xl font-bold mt-0	">Login</h3>
			<form>
				<div class="mb-3">
					<label class="font-bold block mb-1" for="">Login:</label>
					<span class="w-full">
						<InputText 
							v-model="email" 
							:pt="{
								root: { class: 'w-full border-round-md border-500 pd-login' }
							}"
						/>
					</span>
				</div>
				<div class="mb-3">
					<label class="font-bold block mb-1" for="">Senha:</label>
					<span class="w-full input-login">
						<Password 
							v-model="senha" 
							toggleMask
							:feedback="false"
							:pt="{
								input: { class: 'w-full border-round-md border-500 pd-login' }
							}" 
						/>
					</span>
					<p class="mt-1 text-sm	text-right	">
						<small class="text-right	"><a class="azul" href="">Esqueci minha senha</a></small>
					</p>
				</div>
				<div>
					<BtnDefault 
						type="button" 
						label="Acessar" 						
						:loading="loading" 
						@click="load" 
						:pt="{ 
							root: { class: 'bg-azul w-full p-3 text-base font-semibold	bg-fucsia-hover borda-fucsia-hover border-round-md pd-login' } 
						}"
					/>
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

</template>

<script>

	import InputText from 'primevue/inputtext';
	import Password from 'primevue/password';
	import BtnDefault from 'primevue/button';

	export default {
		name: 'LoginForm',
		components : {
			InputText,
			Password,
			BtnDefault
		},
		data(){
			return {
				email : '',
				senha : '',
			}
		}
	}

</script>

<style lang="scss">
	.pd-login{
		padding: 0.8rem 0.5rem;
	}
</style>