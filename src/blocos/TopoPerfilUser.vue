<template>
    <div class="bg-white border-0 shadow-1 border-round-sm mb-3">
        <div class="area-img-destaque flex">
            <div class="avatar  flex justify-content-end">
                <div class="img-user relative surface-200 overflow-hidden flex justify-content-center flex-wrap align-content-center fucsia-hover text-sm bg-azul border-circle">
                    <img class="w-9" src="@/assets/img/user.png"/>
                </div>
            </div>
            <div class="area-destaque-lateral">
                adsf
            </div>
        </div>
        <div class="area-footer flex justify-content-end">
            <div class="box-80">
                <h1 class="my-1">Fulano de tal</h1>
                <div class="info">
                    21 anos / Belo horionte - MG
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
//import Menu from '@/blocos/Menu'

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