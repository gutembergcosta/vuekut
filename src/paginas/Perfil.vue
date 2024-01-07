npm<template>
	<TopoDefault/>		
	<div class="pagina mx-auto mt-3">
		<div class="grid">
			<SidebarInfo/>
			<div class="col">
				<TopoPerfilUser/>
				<NavbarPerfil/>
				<div class="grid">
					<AreaPaginaPerfil/>
					<SidebarPerfil/>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>

	import TopoDefault from '@/blocos/TopoDefault'
	import SidebarInfo from '@/blocos/SidebarInfo'
	import SidebarPerfil from '@/blocos/SidebarPerfil'
	import AreaPaginaPerfil from '@/blocos/AreaPaginaPerfil'
	import TopoPerfilUser from '@/blocos/TopoPerfilUser'
	import NavbarPerfil from '@/blocos/NavbarPerfil'


	export default {
		name: 'Perfil',
		components: {
			TopoDefault,
			AreaPaginaPerfil,
			SidebarInfo,
			SidebarPerfil,
			TopoPerfilUser,
			NavbarPerfil,
		}
	}

</script>

<style>



</style>