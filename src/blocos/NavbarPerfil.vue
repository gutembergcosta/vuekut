<template>
    <div class="bg-white border-0 shadow-1 border-round-sm mb-4 p-3">
       <nav>

            <ButtonBase label="Perfil" rounded :pt="{root: { class: 'bg-azul bg-fucsia-hover' }}"  />
            <ButtonBase label="Scraps" link :pt="{root: { class: 'azul fucsia-hover' }}" />
            <ButtonBase label="Amigos" link :pt="{root: { class: 'azul fucsia-hover' }}" />
            <ButtonBase label="Galeria" link :pt="{root: { class: 'azul fucsia-hover' }}" />
            <ButtonBase label="Comunidades" link :pt="{root: { class: 'azul fucsia-hover' }}" />
            <ButtonBase label="Depoimentos" link :pt="{root: { class: 'azul fucsia-hover' }}" />

       </nav>
    </div>    
</template>

<script setup>
import ButtonBase from 'primevue/button';



</script>

<style scoped>
    .area-img-destaque{
        background: url('@/assets/img/bg-destaque.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 180px;
    }
    .area-footer{
        height: 80px;
    }
    .img-user{
        width: 100px;
        height: 100px;
        top: 140px;
        
    } 
    .avatar{
        width: 120px;
        bottom: -65px;
    }
    .box-80{
        width: calc(100% - 130px);
    }



    
</style>