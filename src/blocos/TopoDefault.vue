<template>

	<div class="pagina mx-auto pt-2">
        <div class="grid">
			<div class="col-3 flex flex-wrap align-content-center h-full">
				<div class="area-logo mr-3">
					<img class="w-full" src="@/assets/img/logo.png"/>
				</div>
				
			</div>
			<div class="col-5 flex flex-wrap align-content-center justify-content-center h-full">

				<div class="busca flex flex-wrap align-content-center ">
					<span class="p-input-icon-left">
						<i class="pi pi-search" />
						<InputText v-model="value1" placeholder="Search" />
					</span>
				</div>
			</div>
			<div class="col-4">
				<div class="flex justify-content-end flex-wrap align-content-center h-full">
					<a class="ml-2 azul flex justify-content-center flex-wrap align-content-center w-2rem h-2rem fucsia-hover text-sm bg-white border-circle" href="">
						<font-awesome-icon icon="pen-to-square" />
					</a>
					<a class="ml-2 azul flex justify-content-center flex-wrap align-content-center w-2rem h-2rem fucsia-hover text-sm bg-white border-circle" href="">
						<font-awesome-icon icon="user-group" />
					</a>
					<a class="ml-2 azul flex justify-content-center flex-wrap align-content-center w-2rem h-2rem fucsia-hover text-sm bg-white border-circle" href="">
						<font-awesome-icon icon="users-viewfinder" />
					</a>
					<a class="ml-2 azul flex justify-content-center flex-wrap align-content-center w-2rem h-2rem fucsia-hover text-sm bg-white border-circle" href="">
						<img class="w-9 " src="@/assets/img/user.png"/>
					</a>
				</div>
			</div>
		</div>
    </div>

</template>

<script>

	import InputText from 'primevue/inputtext';

	export default {
		name: 'TopoDefault',
		components : {
			InputText
		},
		data(){
		}
	}

</script>

<style scoped lang="scss">
	.area-logo{width: 180px;}
</style>