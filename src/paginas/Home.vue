<template>
    <Menu/>
    
    <h1>Home</h1>
    <p>This is the home section</p>
    <div class="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
    <div class="grid">
        <div class="col-2">
            <div class="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
        </div>
        <div class="col-6">
            <div class="text-center p-3 border-round-sm bg-primary font-bold ">6</div>
        </div>
        <div class="col-4">
            <div class="text-center p-3 border-round-sm bg-primary font-bold ">4</div>
        </div>
    </div>

</template>

<script setup>
import Menu from '@/blocos/Menu'

/*
export default {
    name: 'Home',
    components: {
        Menu
    }
}
*/
</script>

<style scoped>
</style>