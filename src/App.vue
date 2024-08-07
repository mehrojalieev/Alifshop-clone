<script setup>
import { RouterView } from 'vue-router'
import Nav from './layout/Nav.vue';
import AnnouncementBar from './components/AnnouncementBar.vue';
import Footer from './layout/Footer.vue';
import Features from './components/Features.vue';

</script>

<template>
    <AnnouncementBar />
    <Nav />
    <RouterView />
    <Features/>
    <Footer/>
</template>
