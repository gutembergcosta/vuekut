<template>
    
    <div class="bg-white p-3 border-0 shadow-1 border-round-sm mb-4">
        <header class="flex flex justify-content-between">
            <div>
                <h4 class="fucsia m-0">Depoimentos</h4>
            </div>
            <div class="area-btn-plus">
                <ButtonBase label="Novo" rounded :pt="{root: { class: 'bg-azul px-4' }}"  />
            </div>
        </header>
        <div class="depoimentos mt-4">
            <div class="bg-white border-0  border-round-sm mb-4">
                <div class="comentario">
                    <header >
                        <div class="flex">
                            <div class="w-10 flex">
                                <a class="img-user-comentario block overflow-hidden surface-200 border-circle mr-2" href="">
                                    <img class="w-full" src="@/assets/img/user.png"/>
                                </a>
                                <div>
                                    <h4 class="m-0">Nome do usuário</h4>
                                    <small class="text-500	">10/10/200</small>
                                </div>
                            </div>
                            <div class="w-2 flex icones flex justify-content-end align-items-center ">
                                <a class="mr-2 flex align-items-center filtro-img-cinza f-right" >
                                    <img class="mr-1" width="50" src="@/assets/icones/heart.png"/>
                                    <small>99</small>
                                </a>
                            </div>
                        </div>
                    </header>
                    <article class="">
                        <div class="texto">
                            <p class="p-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus faucibus purus, quis semper justo tincidunt quis. Donec quis enim ac lectus cursus iaculis vel sed dolor. Praesent sagittis</p>
                        </div>
                        <Divider/>
                    </article>
                    
                   
                </div>
            </div>
        </div>
    </div>

</template>

<script setup >

	import Divider from 'primevue/divider';
    import ButtonBase from 'primevue/button';


</script>

<style scoped lang="scss">

    .img-user{
        width: 42px;
        height: 42px;
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
