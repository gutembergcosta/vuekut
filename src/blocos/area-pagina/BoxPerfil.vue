<template>
    
    <div class="bg-white p-3 border-0 shadow-1 border-round-sm mb-4">
        <div class="frase-destaque">
            <p class="surface-200 px-4 py-2 border-round-3xl">Frase destaque</p>
        </div>
        <div class="votos flex my-5">
            <div class="_bloco mr-5 fans">
                <span class="text-600 block mb-1">Fãs</span>
                <div class="flex align-content-center">
                    <img class="mr-1" width="18" src="@/assets/icones/star.png"/> 
                    <small>333</small>
                </div>
            </div>
            <div class="_bloco mr-5 ">
                <span class="text-600 block mb-1">Confiável</span>
                <div class="flex align-content-center">
                    <img class="mr-1" width="18" src="@/assets/icones/smile-100.png"/> 
                    <img class="mr-1" width="18" src="@/assets/icones/smile-50.png"/> 
                    <img class="mr-1" width="18" src="@/assets/icones/smile-00.png"/> 
                </div>
            </div>
            <div class="_bloco mr-5 ">
                <span class="text-600 block mb-1">Legal</span>
                <div class="flex align-content-center">
                    <img class="mr-1" width="18" src="@/assets/icones/polegar-100.png"/> 
                    <img class="mr-1" width="18" src="@/assets/icones/polegar-50.png"/> 
                    <img class="mr-1" width="18" src="@/assets/icones/polegar-00.png"/> 
                </div>
            </div>
            <div class="_bloco mr-5 ">
                <span class="text-600 block mb-1">Sexy</span>
                <div class="flex align-content-center">
                    <img class="mr-1" width="18" src="@/assets/icones/heart-100.png"/> 
                    <img class="mr-1" width="18" src="@/assets/icones/heart-50.png"/> 
                    <img class="mr-1" width="18" src="@/assets/icones/heart-00.png"/> 
                </div>
            </div>
        </div>
        <div class="lista">
            <div class="linha grid">
                <div class="_lateral col-3 text-600">
                    Quem sou
                </div>
                <div class="_info mb-4 col-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus faucibus purus, quis semper justo tincidunt quis. Donec quis enim ac lectus cursus iaculis vel sed dolor. Praesent sagittis
                </div>
            </div>
            <div class="linha grid">
                <div class="_lateral col-3 text-600">
                    Relacionamento
                </div>
                <div class="_info mb-4 col-9">
                    Solteiro
                </div>
            </div>
            
            <div class="linha grid">
                <div class="_lateral col-3 text-600">
                    Música
                </div>
                <div class="_info mb-4 col-9 flex flex-wrap">
                    <span class="tag borda-fucsia border-round-3xl border-2 mr-2 mb-2 py-1 px-3">
                        Nome da tag 01
                    </span>
                    <span class="tag borda-fucsia border-round-3xl border-2 mr-2 mb-2 py-1 px-3">
                        Nome da tag
                    </span>
                    <span class="tag borda-fucsia border-round-3xl border-2 mr-2 mb-2 py-1 px-3">
                        Tag
                    </span>
                    <span class="tag borda-fucsia border-round-3xl border-2 mr-2 mb-2 py-1 px-3">
                        Nome da tag
                    </span>
                    <span class="tag borda-fucsia border-round-3xl border-2 mr-2 mb-2 py-1 px-3">
                        Nome da tag
                    </span>
                </div>
            </div>
            <div class="linha grid">
                <div class="_lateral col-3 text-600">
                    Filmes / Séries
                </div>
                <div class="_info mb-4 col-9">
                    Tags
                </div>
            </div>
        </div>
    </div>

</template>

<script setup >

	//import Divider from 'primevue/divider';

    /*
	export default {
		name: 'BoxPerfil',
		components : {
            
		},
		data(){
		}
	}
    */

</script>

<style scoped lang="scss">

    .tag{
        overflow: hidden;
        display: block;
        width: fit-content;
        font-size: 12px;
    }

    .btn-deck{
        width: 25px;
        height: 25px;
        margin-top: 3px;
    }

    .btn-dd-options{
        width: 24px;
        height: 24px;
        
        img{
            display: block;
            margin: 3px auto 0;
            width: 15px;
            height:  fit-content;;
        }
    } 

    .img-user-comentario{
        width: 33px;
        height: 33px;
    }

    .bg-form-texto{
        background:#f0f0f1;
    }

    .icones{
		img{
            width: 17px;
            
        }
	}

    .icone-bookmark{
        width: 18px;
    }
    .icone-send{
        width: 15px;
    }
</style>
