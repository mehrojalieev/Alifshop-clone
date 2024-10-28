<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from '../store/store';

const props = defineProps({
    product: {
        type: Object,
        required: true,

    }
})


const store = useStore()

const handleAddToCart = (current_product) => {
    
    const ExtraProduct = { ...current_product, count: 1 };
    store.ProductAddToCart(ExtraProduct);
};

const RemoveProductCart = (product) => {
    let ExtraProduct = { ...product }
    ExtraProduct = { ...product }
    store.RemoveProductFromCart(ExtraProduct)
}

const handleLikeProduct = (liked_product) => {
    store.ProductLiked(liked_product)
}

const handleUnlikeProduct = (unliked_product) => {
        store.ProductUnliked(unliked_product)
}

</script>

<template>
    <div class="product-card">
        <span @click="handleUnlikeProduct(props.product)" v-if="store.$state.liked_data?.findIndex(f => f?._id === props.product?._id) !== -1"   class="pi pi-heart-fill like-btn liked-btn"></span>
        <span @click="handleLikeProduct(props.product)" v-else class=" like-btn pi pi-heart "></span>
        <router-link onclick.native.stop :key="props.product?.id" :to="{
            name: 'Single_Product',
            query: { category: `${props.product?.category}` },
            params: { id: `${props.product?._id}` }
        }" class="product__card-link">
            <img :src="props.product?.images[0]" :alt='props.product?.name'>
            <p class="product-name"> {{ props.product?.name?.slice(0, 30) }} {{ props.product?.memory_rom === 1024 ? '1TB' :
                props.product?.memory_rom === null ? '' : props.product?.memory_rom + 'GB' }}</p>
            <span class="monthly-price">dan 200.000 so'm/oyiga</span>
            <strong class="price old-price">{{ props.product?.price }} so'm</strong>
            <strong class="price">{{ props.product?.aksiya_narx }} so'm</strong>
        </router-link>
        <div class="counter-action" v-if="store.$state?.cart_data.findIndex(f => f?._id == props.product?._id) != -1">
            <button @click="RemoveProductCart(product)">-</button>
            <strong>{{ store.$state.cart_data.find(ind => ind?._id === props.product?._id)?.count }}</strong>
            <button @click="handleAddToCart(props.product)">+</button>
        </div>
        <button v-else @click="handleAddToCart(props.product)" type="button" class="add__cart-btn">
            <span class="material-symbols-outlined">shopping_cart</span>
            Savatga
        </button>

    </div>
</template>


<style>
.product-card {
    position: relative;
    max-width: 200px !important;
    border-radius: 8px;
    text-align: left;
    padding: 1rem .8rem;
    box-shadow: #959da533 0px 8px 24px;
    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    img {
        width: 100%;
        height: 130px !important;
        object-fit: contain;
    }

    .like-btn {
        position: absolute;
        top: .4rem;
        right: .4rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 50%;
        font-size: 23px;
        cursor: pointer;
        transition: .2s;
        &:active{
            transform: scale(0.6);
        }
    }
.liked-btn{
    color: #ff0000;
}
    .product-name {
        margin: 8px 0;
        height: 35px;
        font-size: 12px !important;
        color: var(--secondary-color)
    }

    .monthly-price {
        display: inline-block;
        border-radius: 10px;
        font-size: 11px;
        background-color: #FFEDC2;
        border: 1px solid var(--warning-color);
        padding: 3px 7px;
        margin-bottom: 5px;
    }

    .price {
        display: inline-block;
        color: var(--danger-color);
        font-weight: 500;
        font-size: 14px;
    }

    .old-price {
        display: block;
        text-decoration: line-through;
        font-size: 13px;
        color: #a5b1bb;
    }

    .add__cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 110px;
        height: 35px;
        border-radius: 8px;
        background-color: var(--warning-color);
        border: none;
        font-weight: 450;
        margin-top: 15px;
        font-size: 13px;

        &:hover {
            background-color: var(--warning-hover-color);
            cursor: pointer;
        }

        span {
            margin-top: -2px;
            font-size: 18px;
            border: none;
            background-color: transparent;
        }
    }
}

.counter-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: 100%;
    margin-top: 15px;
    max-width: 110px;
    padding: 1px 10px;
    border: 1px solid #a5b1bb;
    border-radius: 8px;

    button {
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
        transition: .2s;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(0.8);
        }
    }
}

.product__card-link {
    text-decoration: none;
    color: var(--dark-color)
}

@media only screen and (max-width:1050px) {
    .product-card {
        max-width: 240px !important;
    }
}

@media only screen and (max-width:656px) {
    .product-card {
        max-width: 240px !important;

        .monthly-price {
            font-size: 10px;
            padding: 3px 7px;

        }

        .add__cart-btn {
            height: 35px;

            span {
                margin-top: 0px;
                font-weight: 600;
            }

        }

    }
}

@media only screen and (max-width:368px){
    .product-card{
        .monthly-price{
            font-size: 9px ; 
        }
    }
}

@media only screen and (max-width:345px){
    .product-card{
        max-width: 100% !important; 
        width: 100%;
        img {
        width: 100%;
        height: 200px !important;
    }
    .product-name{
        font-size: 13px !important;
    }
    .monthly-price{
        font-size: 12px;
    }
    .add__cart-btn{
        height: 40px;
        max-width: 150px;
    }
    }
}
</style>