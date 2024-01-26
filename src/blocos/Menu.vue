<template>
    <nav>
        <router-link to="/" class="nav-link">Home</router-link>|
        <router-link to="/item" class="nav-link">About</router-link>
    </nav>
</template>

<script setup>
  
</script>

<style scoped>
    a {
        color: #3eaf7c;
        text-decoration: none;
    }

   

    .router-link-active {
        text-decoration: underline;
    }
</style>