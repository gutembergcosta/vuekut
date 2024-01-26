<template>

	<div class="col-3 box-area">
		<ListaAmigos/>
		<ListaComunidades/>
    </div>

</template>

<script setup>

	import ListaAmigos from '@/blocos/sidebar-data/ListaAmigos.vue'
	import ListaComunidades from '@/blocos/sidebar-data/ListaComunidades.vue'

</script>

<style scoped lang="scss">
	.box-area{width: 300px;}
	.img-user{
		width: 70px;
		height: 70px;
	}
</style>