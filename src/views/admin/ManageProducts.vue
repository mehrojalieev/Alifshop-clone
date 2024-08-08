<script setup>
import { onMounted, ref, watch } from 'vue';
import AdminTable from '../../utils/admin-table/AdminTable.vue';
import ApiInstance from '../../api';

const All_Products = ref([])


const input_value = ref("")
async function RenderProducts() {
        try {
            const response = await ApiInstance.get('products')
            All_Products.value = input_value.value.length > 0 ? response.data.filter(product => product.product_name.toLowerCase().includes(input_value.value.toLowerCase())) : response.data;
        } 
        catch (error) {
            console.log(error);    
        }
}


console.log(input_value.value);

watch(input_value, (newValue, oldValue) => {
    RenderProducts()
    
})


onMounted(
    RenderProducts
)

</script>


<template>
    <div class="manage-products">
        <div class="product__top-navigation">
            <h2 class="">Maxsulotlar Ro'yxati</h2>
            <div class="top__navigation-content">
                <img src="../assets/User-avatar.svg.png" alt="User default avatar">
                <!-- <p>{{ this.registeredNumber }}</p> -->
            </div>
        </div>
        <div class="product__actions-wrapper">
            <form v-on:submit.prevent="this.LoadProducts" class="product__search-form">
                <span @click="input_value = ''" :style="{ display: input_value ? 'block' : 'none' }" class="material-symbols-outlined clear__input-btn">close</span>
                <input v-model="input_value" type="text" placeholder="Qidirish...">
                <button type="submit"><span class="material-symbols-outlined">search</span></button>
            </form>
            <!-- <div class="manage__btns-action">
                <button @click="this.openModal = !this.openModal" class="add-btn">+ ADD</button>
                <Dropdown/>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  :placeholder="this.selectedCity ? this.selectedCity : 'Please select'" class="w-full md:w-14rem" />
                <select v-model="this.category_value" @change="LoadProducts" class="categories-select">
                    <option disabled value="">Kataloglar</option>
                    <option :value="categoryItem.category" v-for="categoryItem in this.All_Product_Categories">
                        {{ categoryItem.category.split("_").join(" ") }}
                    </option>
                </select>
            </div> -->
            <!-- <AddProductModal :openModal="this.openModal" /> -->
        </div>
        <div class="table-wrapper">
            <AdminTable tableType="products" :renderData="All_Products" />
        </div>
    </div>
</template>

<style lang="scss">
.manage-products {
    height: 100%
}

.product__top-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--light-color);
    width: 100%;

    h2 {
        font-size: 26px;
        letter-spacing: .5px;
        font-weight: 500;
        color: var(--secondary-color);
    }
}

.top__navigation-content {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    p {
        font-size: 15px;
        color: var(--secondary-color);

        &:hover {
            cursor: pointer;
            color: var(--dark-color);
        }
    }

    img {
        width: 24px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
}

.product__actions-wrapper {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--light-color);
}

.product__search-form {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 39px;
    border-radius: 8px;
    overflow: hidden;
    border: 2.9px solid var(--warning-color);

    .clear__input-btn {
        position: absolute;
        right: 9%;
        font-size: 23px;
        cursor: pointer;

        &:active {
            transform: scale(0.9);
        }
    }

    input {
        flex: 1;
        height: 100%;
        font-size: 14px;
        text-indent: 10px;
        outline: none;
        border: none;
    }

    button {
        display: grid;
        background-color: var(--warning-color);
        transition: .1s;
        place-items: center;
        height: 100%;
        padding: 0 8px;
        border: none;

        &:hover {
            cursor: pointer;
            background-color: var(--warning-hover-color);
        }

        span {
            color: var(--light-color);
            font-size: 22px;
        }
    }
}

.manage__btns-action {
    display: flex;
    column-gap: .6rem;

    .add-btn {
        padding: .3rem .9rem;
        border-radius: 8px;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        color: var(--success-color);
        border: 2px solid var(--success-color);
        background-color: var(--success-light-color);
        transition: .2s;

        &:hover {
            color: var(--success-light-color);
            background-color: var(--success-color);
        }
    }
}

.categories-select {
    outline-color: var(--warning-color);
    height: 38px;
    border-radius: 8px;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 15px;
    max-width: 170px;
    border: 2px solid var(--warning-color);
}



.table-wrapper {
    margin-top: 1rem;
    height: 500px;
    overflow: auto;
}

// RESPONSIVE STYLES
@media only screen and (max-width: 1116px) {

    .product__search-form {
        max-width: 420px !important;
        height: 37px !important;

        .clear__input-btn {
            right: 9% !important;
        }
    }

    .manage__btns-action {
        column-gap: .6rem;

        .add-btn {
            padding: 0rem .7rem !important;
            font-size: 14px !important;
        }
    }

    .categories-select {
        height: 36px !important;
        font-size: 14px !important;
        max-width: 150px !important;
    }
}
</style>