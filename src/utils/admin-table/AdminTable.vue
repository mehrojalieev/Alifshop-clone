
<script setup>
import ProductTr from './table-rows/ProductTr.vue';
import UserTr from './table-rows/UserTr.vue';
    const props = defineProps({
        tableType: {
            type: String,
            requried: true
        },
        renderData: {
            type: Array,
            requried: true
        }
    })

</script>




<template>
    <table class="table">
        <thead class="table-header">
            <tr v-if="props.tableType === 'products'">
                <th>Rasmi</th>
                <th>Mahsulot nomi</th>
                <th>Narxi</th>
                <th>Zaxirada</th>
                <th>Rangi</th>
                <th>O'zgartirish</th>
            </tr>
            <tr v-else-if="props.tableType === 'users'">
                <th>Rasmi</th>
                <th>Foydalanuvchi ismi</th>
                <th>Elektron pochta</th>
                <th>Roli</th>
                <th>O'zgartirish</th>
            </tr>
        </thead>
        <tbody class="table-body">
            <ProductTr v-if="props.tableType === 'products'" :product="product" v-for="product in props.renderData" :key="product.id" />
            <UserTr v-else :user="user" v-for="user in props.renderData" :key="user.id"/>
        </tbody>
    </table>
</template>



<style>

.table {
    margin-top: 1.5rem;
    width: 100% !important;
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

}
</style>