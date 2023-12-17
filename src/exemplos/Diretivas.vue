<template>
	<div class="container">
		<p> {{ msg }}</p>
		<p v-html="htmlString" ></p>
		<div v-show="show">
			elemento exibido aki
		</div>
		<img width="150" :src="'/assets/img/' + fileName" />
		<div v-bind="{ id: idVar, 'data-item': dataItem }">elemento</div>
		
		<div :class="{ red: isRed }"></div>
		<div :class="classA">classA</div>
		<div :class="[classA, classB]">[classA, classB]</div>
		<div :class="[classA, { classB: isB, classC: isC }]">[classA, { classB: isB, classC: isC }]</div>
		<div :style="{ fontSize: size + 'px' }">{ fontSize: size + 'px' }</div>
		<div :style="[styleObjectA, styleObjectB]">[styleObjectA, styleObjectB]</div>
		icone
		
	</div>
</template>

<script>

	export default {
		name: 'Diretivas',	
		data() {
			return {
				msg: 'texto raw',
				htmlString: '<strong>texto negrito</strong>',
				show: true,
				fileName: 'vue.jpg',
				idVar : 'id-01',
				dataItem : 'nome',
				classA : "text-primary",
				classB : "bg-light",
				size : "16",
				isB : true,
				isC : true,
				styleObjectA: {
					'color': 'navy',
					'fontWeight': 'bold',
				}
				
				
			}
		},
	}
</script>

