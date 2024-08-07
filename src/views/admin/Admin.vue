<script setup>
import { RouterView } from 'vue-router';
import AdminSidebar from './AdminSidebar.vue';


</script>


<template>
        <div class="admin-dashboard">
            <AdminSidebar/>
            <div class="dashboar__main-content">
                    <RouterView/>
            </div>
        </div>
</template>


<style lang="scss" scoped>
    .admin-dashboard{
        display: flex;
        column-gap: 1rem;
        height: 100vh;
        background-color: #FAFAFA;
    }
    .dashboar__main-content{
        width: 100%;
        padding: 1rem;
    }
</style>