<script setup>
import { onMounted, ref, watch } from 'vue';
import { useStore } from '../store/store';
import Nav from '../layout/Nav.vue';
import CardOfCart from '../utils/CardOfCart.vue';

const store = useStore()

const total_price = ref(0)
const data = ref([])



const updateTotalPrice = () => {
  total_price.value = store.calculateTotalPrice();
};

onMounted(() => {
  updateTotalPrice();
  handleScrollTo()
});

watch(() => store.$state.cart_data, () => {
  updateTotalPrice();
}, {deep: true});


async function handleScrollTo() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
}

</script>

<template>
    
    <div class="cart container">
        <div v-if="store.$state.cart_data.length > 0" class="cart__product-wrapper">
            <h3 class="cart-title">Savat </h3>
            <div class="product__cards-container">
                <div @click="btnclick" class="product__box-container">
                    <CardOfCart v-for="(product, key) in store.$state.cart_data" :product="product" :key="key" />
                </div>

                <div class="product-content-wrapper">
                    <div class="total-item">
                        <h5>Jami</h5>
                        <p>{{ total_price }} so'm</p>
                    </div>
                    <div class="count-item">
                        <span>Tovarlar soni</span>
                        <p>{{ store.$state.cart_data.length }} dona</p>
                    </div>
                    <div class="delivery-item">
                        <span>Yetkazib berish</span>
                        <p class="free-text">Bepul</p>
                    </div>
                    <div class="delivery-content">
                        <span>Bepul yetkazib berish</span>
                        <p>Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika bo'ylab 3 kungacha</p>
                    </div>
                    <button class="payment-term">Muddatli to'lovga olish</button>
                    <button class="payment-card">Karta orqali sotib olish</button>
                </div>
            </div>

        </div>
        <div v-else class="empty__cart-wrapper">
            <div class="empty-content">
                <h3>Savat hozircha bo'sh</h3>
                <p>Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning</p>
                <RouterLink class="category-link" to="categories">Katalogga o'tish</RouterLink>
                <RouterLink class="home-link" to="/">Asosiy ekranga</RouterLink>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.cart-title {
    font-size: 30px;
    font-weight: 500;
}

.product__cards-container {
    display: flex;
    column-gap: 1.3rem;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
}

.product__box-container {
    width: 100%;
    height: fit-content;
    max-width: 740px;
    margin-top: 1rem;
}



.product-content-wrapper {
    max-width: 350px;
    width: 100%;
    border-radius: 8px;
    height: fit-content;
    background-color: #F4F6F7;
    padding: 1rem 1.5rem;

    .total-item {
        margin-bottom: .8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
    }

    .count-item,
    .delivery-item {
        margin: 4px 0;
        display: flex;
        justify-content: space-between;

        span {
            color: #788988;
            font-size: 14px;
        }

        p {
            font-size: 14px;
            color: #24272c;
        }

        .free-text {
            color: #39b980;
        }
    }

    .delivery-content {
        margin-top: 1rem;
        padding-top: 5px;
        border-top: 1px solid #d5d6d7;

        span {
            color: #39b980;
            font-size: 12px;
        }

        p {
            font-size: 12px;
            color: #a5b1bb;
        }
    }

    .payment-term,
    .payment-card {
        margin-top: .8rem;
        width: 100%;
        padding: .8rem 0;
        border-radius: 8px;
        font-size: 15px;
        color: var(--dark-color);
        border: none;
        transition: .2s;
        cursor: pointer;
        font-weight: 500;
    }

    .payment-term {
        background-color: var(--warning-color);

        &:hover {
            background-color: var(--warning-hover-color);
        }

    }

    .payment-card {
        background-color: var(--light-color);
        border: 2px solid #d5d6d7;
    }
}


// EMPTY PAGE STYLES
.empty__cart-wrapper {
    width: 100%;
    margin-top: 100px;
}

.empty-content {
    margin: auto;
    text-align: center;
    padding: 0 1rem;

    h3 {
        font-size: 34px;
        font-weight: 500;
        color: var(--dark-color);
        margin-bottom: 0.5rem;
    }

    p {
        margin: auto;
        font-size: 16px;
        color: var(--secondary-color);
        max-width: 24rem;
        line-height: 29px;
        margin-bottom: 2rem;
    }

    .category-link,
    .home-link {
        margin: 0 auto 1rem;
        display: block;
        width: 100%;
        max-width: 22rem;
        padding: 11px 0;
        text-decoration: none;
        border-radius: 8px;
        color: var(--dark-color);
        font-weight: 500;
        cursor: pointer;
    }

    .category-link {
        background-color: var(--warning-color);

        &:hover {
            background-color: var(--warning-hover-color);
        }
    }

    .home-link {
        border: 2px solid #cad1d7;

        &:hover {
            background-color: var(--secondary-light-color);
        }
    }
}


// RESPONSIVE STYLES
@media only screen and (max-width: 796px) {
    .product__cards-container {
        // display: block;
        flex-direction: column;
        align-items: center;
    }

    .product__box-container {
        margin-bottom: 5rem;
        height: fit-content;
    }

    .product-content-wrapper {
        max-width: 750px;
    }
}

@media only screen and (max-width: 680px) {
    .empty__cart-wrapper {
        margin-top: 10px;
    }

    .empty-content {
        h3 {
            font-size: 26px;
        }

        p {
            font-size: 14px;
            max-width: 20rem;
            line-height: 26px;
            margin-bottom: 1.7rem;
        }

        .category-link,
        .home-link {
            font-size: 15px;
            max-width: 40em;
            padding: 10px 0;
        }

    }

}
</style>