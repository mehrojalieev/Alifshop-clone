<script setup>
import { onMounted, ref, watch } from 'vue';
import { useStore } from '../store/store';
import DeleteModal from './DeleteModal.vue';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
})

const store = useStore()
const total_price = ref(0)
const isOpenDeleteModal = ref(false)

console.log(isOpenDeleteModal);

const handleModalState = (newVal) => {
    isOpenDeleteModal.value = newVal;
};

const handleAddToCart = (product) => {
    let ExtraProduct = { ...product }
    ExtraProduct = { ...product, count: 1 }
    store.ProductAddToCart(ExtraProduct)
    updateTotalPrice()
}

const RemoveProductCart = (product) => {
    let ExtraProduct = { ...product }
    ExtraProduct = { ...product }
    store.RemoveProductFromCart(ExtraProduct)
    updateTotalPrice()
}

const updateTotalPrice = () => {
    total_price.value = store.calculateTotalPrice();
};

onMounted(() => {
    updateTotalPrice();
});

watch(() => store.$state.cart_data, () => {
    updateTotalPrice();
}, { deep: true });
</script>


<template>
    <div class="product-box">
        <img :src="product.image[0]" :alt="product.product_name">
        <div class="product-info">
            <RouterLink class="product-name" to="{name}">{{ product.product_name }}</RouterLink>
            <strong>Narx: {{ product.price }} so'm</strong>
            <strong>Brend: {{ product.brand }}</strong>
            <p>Yetkazib berish muddati: Toshkent bo'ylab kun davomida viloyatlar bo'ylab 3 kungacha</p>
            <div class="box-actions">
                <div class="count-action">
                    <button :disabled="product.count === 1" @click="RemoveProductCart(product)">-</button>
                    <strong>{{ product.count }}</strong>
                    <button @click="handleAddToCart(product)">+</button>
                </div>
                <div @click="isOpenDeleteModal = true" class="delete-action">
                    <span class="material-symbols-outlined">delete</span>
                    <strong>O'chirish</strong>
                </div>
            </div>
        </div>
    </div>
    <DeleteModal :isOpenDeleteModal="isOpenDeleteModal" @update:isOpenDeleteModal="handleModalState" />
</template>


<style lang="scss" scoped>
.product-box {
    margin-top: 1rem;
    border-top: 1px solid #d5d6d7;
    display: flex;
    align-items: flex-start;
    column-gap: 1.3rem;
    padding: 1rem 0;
    width: 100%;

    img {
        width: 72px;
        object-fit: contain;
        aspect-ratio: 1/1;
    }

    .product-info {
        width: 100%;
        margin-top: 6px;

        .product-name {
            font-weight: 500;
            font: 14px;
            text-decoration: none;
            color: var(--dark-color);
        }

        strong {
            display: block;
            margin-top: 5px;
            font-weight: 500;
            color: #5d6d7d;
            font-size: 12px;
            letter-spacing: .5px;
        }

        p {
            margin-top: 10px;
            font-size: 12px;
            color: #5d6d7d;
        }
    }
}

.box-actions {
    margin-top: 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 10px;

    .count-action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 14px;
        width: 100%;
        max-width: 100px;
        background-color: #F4F6F7;
        padding: .1rem .8rem;
        border-radius: 8px;

        button {
            border: none;
            background-color: transparent;
            font-size: 24px;
            cursor: pointer;

            &:active {
                transform: scale(0.95);
            }
        }

        strong {
            margin-top: 0;
            font-size: 18px;
            color: var(--dark-color);
        }
    }

    .delete-action {
        display: flex;
        align-items: center;
        column-gap: 5px;
        cursor: pointer;

        span {
            margin-top: 2px;
            font-size: 21px;
            color: #5d6d7d;
        }

        strong {
            font-size: 14px;
        }
    }
}
</style>