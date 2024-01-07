<template>

	<div class="col">
		<BoxPerfil/>
		<Depoimentos/>
    </div>

</template>

<script>
	import Depoimentos from '@/blocos/area-pagina/Depoimentos.vue'
	import BoxPerfil from '@/blocos/area-pagina/BoxPerfil.vue'

	export default {
		name: 'AreaPagina',
		components : {
			BoxPerfil,Depoimentos
		},
		data(){
		}
	}

</script>

<style lang="scss">
	
</style>