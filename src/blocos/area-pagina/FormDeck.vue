<template>

    <div class="bg-white p-3 border-0 shadow-1 border-round-sm mb-4">
        <div class="mb-2" >
            <TextForm 
                v-model="value" 
                autoResize 
                rows="1" 
                :pt="{
                    root: {
                        class: 'w-full'
                    }
                }"
            />
        </div>
        <div class="flex">
            <div class="w-6 flex icones-form-deck pl-1">
                <a class="mr-2 flex align-items-center filtro-img-azul" >
                    <img class="mr-2" src="@/assets/icones/pencil.png"/>
                </a>
                <a class="mr-2 flex align-items-center filtro-img-azul ">
                    <img class="mr-2" src="@/assets/icones/youtube.png"/>
                </a>
                <a class="mr-2 flex align-items-center filtro-img-azul ">
                    <img class="mr-2" src="@/assets/icones/imagem.png"/>
                </a>
            </div>
            <div class="w-6 flex justify-content-end">
                <ActionButton class="bg-azul font-semibold px-4" label="Postar" rounded="true" />  
            </div>
        </div>
    </div>
</template>

<script>

    import TextForm from 'primevue/textarea';
    import ActionButton from 'primevue/button';


	export default {
		name: 'FormDeck',
		components : {
            TextForm,ActionButton
		},
		data(){
		}
	}

</script>

<style scoped lang="scss">



    .icones-form-deck{
		img{
            width: 18px;
            
        }
	}

</style>
