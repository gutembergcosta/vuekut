<template>
	<TopoDefault/>		
	<div class="pagina mx-auto">
		<div class="grid">
			<SidebarInfo/>
			<AreaPagina/>
			<SidebarData/>
		</div>
	</div>
</template>

<script>

	import TopoDefault from '@/blocos/TopoDefault'
	import SidebarInfo from '@/blocos/SidebarInfo'
	import SidebarData from '@/blocos/SidebarData'
	import AreaPagina from '@/blocos/AreaPagina'

	export default {
		name: 'HomeUser',
		components: {
			TopoDefault,AreaPagina,SidebarInfo,SidebarData,
		}
	}

</script>

<style>



</style>