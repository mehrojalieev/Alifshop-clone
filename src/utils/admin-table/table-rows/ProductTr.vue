<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })

    console.log(props);
</script>


<template>
    <tr class="product-row">
        <td>
            <img class="product-image"
                :src="props.product.image[0] ? props.product.image[0] : 'https://totalcomp.com/images/no-image.jpeg'">
        </td>
        <td>{{ props.product.product_name.slice(0, 20) }}...</td>
        <td>{{ props.product.price }} so'm</td>
        <td>{{ props.product.in_stock }} dona</td>
        <td>{{ props.product.color.split("_").join(" ") }}</td>
        <td class="product__manage-action">
            <span class="material-symbols-outlined edit-btn">edit</span>
            <span class="material-symbols-outlined delete-btn">delete</span>
        </td>
    </tr>
</template>



<style scoped lang="scss">
.product-row {
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

.product-row:hover {
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