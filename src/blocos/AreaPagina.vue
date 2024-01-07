<template>

	<div class="col">
		<FormDeck/>
		<CardPost/>
    </div>

</template>

<script>
	import CardPost from '@/blocos/area-pagina/CardPost.vue'
	import FormDeck from '@/blocos/area-pagina/FormDeck.vue'

	export default {
		name: 'AreaPagina',
		components : {
			CardPost,FormDeck
		},
		data(){
		}
	}

</script>

<style lang="scss">
	
</style>