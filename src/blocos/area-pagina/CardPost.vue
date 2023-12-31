<template>
    
    <div class="bg-white p-3 border-0 shadow-1 border-round-sm mb-4">
        <header >
            <div class="flex">
                <div class="w-10 flex">
                    <a class="img-user block overflow-hidden surface-200 border-circle mr-2" href="">
                        <img class="w-full" src="@/assets/img/user.png"/>
                    </a>
                    <div>
                        <h4 class="m-0">Nome do usuário</h4>
                        <small class="text-500	">10/10/200</small>
                    </div>
                </div>
                <div class="w-2 flex justify-content-end" >
                    <a class="btn-dd-options border-round-sm border-1 border-circle flex justify-content-end align-content-center text-600	border-400	" >
                        <font-awesome-icon icon="ellipsis" class="m-auto"  />
                    </a>
                </div>
            </div>
        </header>
        <article class="my-3">
            <div class="featured-image">
                <img class="w-full" src="@/assets/img/miniatura.png" alt="">
            </div>
            <div class="texto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus faucibus purus, quis semper justo tincidunt quis. Donec quis enim ac lectus cursus iaculis vel sed dolor. Praesent sagittis</p>
            </div>
        </article>
        <footer>
            <Divider/>
            <div class="flex">
                <div class="w-6 flex">
                    <a  class="mr-2 flex align-items-center">
                        <font-awesome-icon icon="heart" class="mr-1 text-500" />
                        <small>99</small>
                    </a>
                    <a class="mr-2 flex align-items-center">
                        <font-awesome-icon icon="comment"  class="mr-1 text-500"/>
                        <small>99</small>
                    </a>
                    <a class="mr-2 flex align-items-center">
                        <font-awesome-icon icon="paper-plane" class="mr-1 text-500" />
                        <small>99</small>
                    </a>
                </div>
                <div class="w-6 flex justify-content-end">
                    <a class="mr-2 flex align-items-center">
                        <font-awesome-icon icon="bookmark" class="mr-1 text-500" />
                    </a>
                </div>
            </div>
            <Divider/>
            <div class="mb-4 mt-2 px-1 bg-form-texto border-round-lg	" >
                <div class="flex p-3 justify-content-between align-content-center area-deck">
                    <div class="w-11 flex align-content-center h-full">
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
                    <div class="w-1 h-full">
                        <div class="flex justify-content-end align-content-center h-full">            
                            <a class="bg-azul flex justify-content-center flex-wrap align-content-center btn-deck fucsia-hover text-sm border-circle" href="">
                                <font-awesome-icon icon="arrow-right" />
                            </a>                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="comentarios mt-4">
            <div class="bg-white pl-5 border-0  border-round-sm mb-4">
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
                        </div>
                    </header>
                    <article class="">
                        <div class="texto">
                            <p class="p-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus faucibus purus, quis semper justo tincidunt quis. Donec quis enim ac lectus cursus iaculis vel sed dolor. Praesent sagittis</p>
                        </div>
                    </article>
                    <footer>
                    <Divider/>
                        <div class="flex">
                            <div class="w-6 flex">
                                <a  class="mr-2 flex align-items-center">
                                    <font-awesome-icon icon="heart" class="mr-1 text-500" />
                                    <small>99</small>
                                </a>
                                <a class="mr-2 flex align-items-center">
                                    <font-awesome-icon icon="comment"  class="mr-1 text-500"/>
                                    <small>99</small>
                                </a>
                                <a class="mr-2 flex align-items-center">
                                    <font-awesome-icon icon="paper-plane" class="mr-1 text-500" />
                                    <small>99</small>
                                </a>
                            </div>
                            <div class="w-6 flex justify-content-end">
                                <a class="mr-2 flex align-items-center">
                                    <font-awesome-icon icon="bookmark" class="mr-1 text-500" />
                                </a>
                            </div>
                        </div>
                        <Divider/>
                        <div class="mb-4 mt-2 px-2" >
                            <div class="grid flex py-3 justify-content-between align-content-center area-deck">
                                <div class="w-11 flex align-content-center h-full">
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
                                <div class="w-1 h-full">
                                    <div class="flex justify-content-end align-content-center h-full">
                        
                                        <a class="bg-azul flex justify-content-center flex-wrap align-content-center btn-deck fucsia-hover text-sm border-circle" href="">
                                            <font-awesome-icon icon="arrow-right" />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div class="bg-white pl-5 border-0  border-round-sm mb-4">
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
                            </div>
                        </header>
                        <article class="">
                            <div class="texto">
                                <p class="p-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus faucibus purus, quis semper justo tincidunt quis. Donec quis enim ac lectus cursus iaculis vel sed dolor. Praesent sagittis</p>
                            </div>
                        </article>
                        <footer>
                        <Divider/>
                            <div class="flex">
                                <div class="w-6 flex">
                                    <a  class="mr-2 flex align-items-center">
                                        <font-awesome-icon icon="heart" class="mr-1 text-500" />
                                        <small>99</small>
                                    </a>
                                    <a class="mr-2 flex align-items-center">
                                        <font-awesome-icon icon="comment"  class="mr-1 text-500"/>
                                        <small>99</small>
                                    </a>
                                    <a class="mr-2 flex align-items-center">
                                        <font-awesome-icon icon="paper-plane" class="mr-1 text-500" />
                                        <small>99</small>
                                    </a>
                                </div>
                                <div class="w-6 flex justify-content-end">
                                    <a class="mr-2 flex align-items-center">
                                        <font-awesome-icon icon="bookmark" class="mr-1 text-500" />
                                    </a>
                                </div>
                            </div>
                        <Divider/>
                    </footer>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

	import Divider from 'primevue/divider';
    import TextForm from 'primevue/textarea';

	export default {
		name: 'FormDeck',
		components : {
            Divider,TextForm
		},
		data(){
		}
	}

</script>

<style scoped lang="scss">
	.avatar-deck{
		width: 50px;
		height: 50px;
	}
	.area-btn{
		width: 90px;
	}

    .img-user{
        width: 42px;
        height: 42px;
    }

    .btn-deck{
        width: 25px;
        height: 25px;
    }

	.lista-sidebar-info{
		li{ padding: 1px 0;}
	}
	.lista-sidebar-links{
		a{ padding: 4px 0;}
	}

    .btn-dd-options{
        width: 24px;
        height: 24px;
    } 

    .img-user-comentario{
        width: 33px;
        height: 33px;
    }

    .bg-form-texto{
        background:#f0f0f1;
    }
</style>
