<script setup>
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import Banner1 from "../assets/banners/banner1.png"
import Banner2 from "../assets/banners/banner2.png"
import Banner3 from "../assets/banners/banner3.png"
import Banner4 from "../assets/banners/banner4.png"
import Banner5 from "../assets/banners/banner5.png"
import Banner6 from "../assets/banners/banner6.png"
import Banner7 from "../assets/banners/banner7.png"

const modules = [Autoplay, Navigation];

const Images = [Banner1, Banner2,Banner3, Banner4, Banner5,Banner6, Banner7]


</script>


<template>


    <div class="hero-banner container">

        <swiper class="mySwiper" :spaceBetween="30" :centeredSlides="true" :speed="1500" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :navigation="true" :modules="modules">
            <swiper-slide v-for="(image, index) in Images" :key="index">
                <img :src="image" alt="Banner" >
            </swiper-slide>
            


        </swiper>
    </div>
</template>


<style lang="scss" scoped>
.hero-banner {
    width: 100%;
    max-height: 500px;
    border-radius: 8px;
    overflow: hidden;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


@media only screen and (max-width:370px) {
    .hero-banner {
        height: 160px;
    }

    .swiper-slide {
        img {
            object-fit: fill;
        }
    }
}
</style>