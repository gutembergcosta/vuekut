<template >
	<div class="pagina mx-auto">
		<!--
		<Topo/>
		<div>
			<h1>Exemplo</h1>
			<font-awesome-icon icon="phone" />
			<font-awesome-icon icon="moon" />
		</div>
		-->
		<router-view />
	</div>
</template>

<script>
	//import Topo from '@/paginas/blocos/Topo.vue'
	export default {
		name: 'Exemplo',
		components : {
			//Topo,
		}
	}
</script>

