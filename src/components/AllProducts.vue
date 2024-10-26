<script setup>
import { onMounted, ref } from 'vue';
import Card from "../utils/Card.vue";
import ApiInstance from '../api/index.js';
import SkeletonCard from '../utils/SkeletonCard.vue';

const products_data = ref([]);
const isLoading = ref(true); 
const placeholderCount = ref(18); 

const LoadProducts = async () => {
  try {
    const response = await ApiInstance.get('/api/product/all');
    products_data.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false; 
  }
};

onMounted(LoadProducts);
</script>

<template>
  <div class="all__products-wrapper container">
    <h2 class="products-title">Sizni qiziqtirishi mumkin</h2>
    <div class="product__card-container">
      <SkeletonCard v-if="isLoading" v-for="index in placeholderCount" :key="'skeleton-' + index" />
      
      <Card v-else :product="product" v-for="(product, index) in products_data" :key="index" />
    </div>
  </div>
</template>




<style lang="scss">

    .all__products-wrapper{
        width: 100%;
        margin-top: 40px;
    }
    .products-title{
        font-size: 34px;
        font-weight: 500;
    }
    .product__card-container{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        margin-top: 30px;
        gap: 1.2rem;
    }

   
    .product__card-link{
        text-decoration: none;
        color: var(--dark-color)
    }


    // RESPONSIVE STYLES
   
    @media only screen and (max-width: 1144px){
        .product__card-container{
            gap: 20px 8px;
            grid-template-columns: repeat(5, 1fr);
        }
 
    }

    @media only screen and (max-width: 1055px){
        .product__card-container{
            gap: 30px 20px;
            grid-template-columns: repeat(4, 1fr);
        }
 
    }
    @media only screen and (max-width: 940px){
        .product__card-container{
            gap: 30px 20px;
            grid-template-columns: repeat(4, 1fr);
        }
 
    }
    @media only screen and (max-width: 840px){
        .product__card-container{
            gap: 30px 20px;
            grid-template-columns: repeat(3, 1fr);
        }

    }
    @media only screen and (max-width: 720px){
        .product__card-container{
            gap: 25px 17px;
            grid-template-columns: repeat(3, 1fr);
        }

    }
    @media only screen and (max-width: 654px){
        .product__card-container{
            gap: 25px 17px;
            grid-template-columns: repeat(3, 1fr);
        }
 
    }

    @media only screen and (max-width: 598px){
        .products-title{
            font-size: 26px;
        }
        .product__card-container{
            gap: 25px 10px;
            grid-template-columns: repeat(2, 1fr);
        }
 
    }
    @media only screen and (max-width: 492px){
        .products-title{
            font-size: 24px;
        }
        .product__card-container{
            gap: 25px 8px;
            grid-template-columns: repeat(2, 1fr);
        }
  
    }

    @media only screen and (max-width: 400px){
        .products-title{
            font-size: 22px;
        }
        .product__card-container{
            gap: 22px 10px;
            grid-template-columns: repeat(2, 1fr);
        }

    }
    @media only screen and (max-width: 352px){
        .products-title{
            font-size: 22px;
        }
        .product__card-container{
            gap: 22px 0px;
            padding: 0;
            place-items: center;
            grid-template-columns:  1fr;
        }
   
    }

    
</style>