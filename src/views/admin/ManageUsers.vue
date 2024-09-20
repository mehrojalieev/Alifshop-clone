<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import AdminTable from '../../utils/admin-table/AdminTable.vue';

const UsersData = ref([]);



async function LoadAllUsers() {
    try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/users")
        console.log(response);
        UsersData.value = response.data


    }
    catch (error) {
        console.log(error);

    }
}

onMounted(() => {
    LoadAllUsers()
})

</script>

<template>
    <div class="manage-products">
        <div class="product__top-navigation">
            <h2 class="">Foydalanuvchilar Ro'yxati</h2>
            <div class="top__navigation-content">
                <img src="../assets/User-avatar.svg.png" alt="User default avatar">
                <p>{{ this.registeredNumber }}</p>
            </div>
        </div>
        <div class="product__actions-wrapper">
            <form v-on:submit.prevent="this.LoadProducts" class="product__search-form">
                <span @click="this.input_value = ''" :style="{ display: this.input_value ? 'block' : 'none' }"
                    class="material-symbols-outlined clear__input-btn">close</span>
                <input v-model="this.input_value" type="text" placeholder="Qidirish...">
                <button type="submit"><span class="material-symbols-outlined">search</span></button>
            </form>


        </div>
        <div class="table-wrapper">
            <AdminTable tableType="users" :renderData="UsersData" />
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
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
        right: 8%;
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


.products-table {
    margin-top: 1.5rem;
    width: 100%;

    text-align: center;
    border-collapse: collapse;
}

.table-header {
    background-color: #e4e3e3;
    height: 58px;
    position: sticky;
    top: 0;

    tr {

        th {
            font-size: 17px;
            font-weight: 500;
        }
    }
}

.products-table>.table-body {
    overflow-y: auto;

    tr {
        vertical-align: middle;
        height: 100%;
        height: 75px !important;
        transition: .2s;

        td {
            font-size: 13px;
            font-weight: 500;
        }
    }

    .product-image {
        width: 44px;
        aspect-ratio: 1/1;
        object-fit: contain;
    }
}

.table-body>tr:hover {
    cursor: default;
    background-color: var(--warning-color);
    color: var(--light-color);

    .edit-btn {
        color: var(--light-color);
    }

}

.product__manage-action {
    display: flex;
    justify-content: center;
    align-items: center !important;
    column-gap: .7rem;
    margin-top: 1.8rem;

    .edit-btn {
        font-size: 21px;
        transition: .1s;
        color: var(--secondary-color);

        &:hover {
            cursor: pointer;
        }

        &:active {
            transform: scale(0.9);
        }
    }

    .delete-btn {
        @extend .edit-btn;
        color: var(--danger-color) !important;
    }
}
</style>