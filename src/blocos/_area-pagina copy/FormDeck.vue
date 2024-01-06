<template>

    <div class="bg-white px-4 border-0 shadow-1 border-round-sm mb-4 mt-2" >
        <div class="grid flex py-3 justify-content-between align-content-center area-deck">
            <div class="w-1 h-full">
                <div class="flex justify-content-between align-content-center h-full">
					<a class="azul flex justify-content-center flex-wrap align-content-center btn-deck fucsia-hover text-sm border-circle surface-200" href="">
						<font-awesome-icon icon="paperclip" />
					</a>					
				</div>
            </div>
            <div class="w-10 flex align-content-center h-full">
                <Textarea 
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
	
					<a class="azul flex justify-content-center flex-wrap align-content-center btn-deck fucsia-hover text-sm border-circle surface-200" href="">
						<font-awesome-icon icon="arrow-right" />
					</a>
					
				</div>
            </div>
        </div>
    </div>

</template>

<script>

    import Textarea from 'primevue/textarea';

	export default {
		name: 'FormDeck',
		components : {
            Textarea
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
</style>
