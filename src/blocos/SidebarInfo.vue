<template>

	<div class="col-3 box-area" >
		<div class="bg-white p-4 border-0 shadow-1 border-round-sm mb-4">
			<a class="img-user bg-azul overflow-hidden mx-auto	 flex justify-content-center flex-wrap align-content-center fucsia-hover text-sm bg-azul border-circle" href="">
				<img class="w-9 " src="@/assets/img/user.png"/>
			</a>
			<h4 class="text-center text-base">Nome do usuário</h4>
			<div class="mb-2">
				<ul class="lista-sidebar-info">
					<li class="">00 Anos</li>
					<li class="">Ocupação</li>
					<li class="">Nome da cidade</li>
					<li class="">Minas Gerai</li>
					<li class="">Brasil</li>
				</ul>
			</div>
			<Divider/>
			<div>
				<ul class="lista-sidebar-links">
					<li>
						<a class="w-full azul flex justify-content-between flex-wrap" href="">
							<span>
								<font-awesome-icon icon="cog" />
								Nome do link
							</span>
							<Badge 
								value="5" 
								severity="info" 
								:pt="{
									root: 'bg-azul'
								}">
							</Badge>
						</a>
					</li>
					<li>
						<a class="w-full azul flex justify-content-between flex-wrap" href="">
							<span>
								<font-awesome-icon icon="cog" />
								Nome do link
							</span>
							<Badge 
								value="5" 
								severity="info" 
								:pt="{
									root: 'bg-azul'
								}">
							</Badge>
						</a>
					</li>
					<li>
						<a class="w-full azul flex justify-content-between flex-wrap" href="">
							<span>
								<font-awesome-icon icon="cog" />
								Nome do link
							</span>
							<Badge 
								value="5" 
								severity="info" 
								:pt="{
									root: 'bg-azul'
								}">
							</Badge>
						</a>
					</li>
				</ul>
			</div>
		</div>
	
    </div>

</template>

<script>

	import Divider from 'primevue/divider';
	import Badge from 'primevue/badge';


	export default {
		name: 'SidebarInfo',
		components : {
			Divider, Badge
		},
			data(){
		}
	}

</script>

<style scoped lang="scss">
	.img-user{
		width: 150px;
		height: 150px;
	}

	.lista-sidebar-info{
		li{ padding: 1px 0;}
	}
	.lista-sidebar-links{
		a{ padding: 4px 0;}
	}
</style>
