<script setup>
    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })


    console.log(props.user);
    
</script>

<template>
    <tr class="user-row">
        <td>
            <img class="user-image"
                :src="props.user.avatar ? props.user.avatar : 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'">
        </td>
        <td>{{ props.user.name }}</td>
        <td>{{ props.user.email }} so'm</td>
        <td>{{ props.user.role === 'customer' ? 'Xaridor' : 'Admin' }} </td>
        <td class="user__manage-action">
            <span class="material-symbols-outlined delete-btn">delete</span>
        </td>
    </tr>
</template>



<style lang="scss" scoped>
.user-row {
    width: 100%;
    vertical-align: middle;
    height: 100%;
    height: 75px !important;
    transition: .2s;

    td {
        font-size: 13px;
        font-weight: 500;
    }
}

.user-image {
    width: 44px;
    aspect-ratio: 1/1;
    object-fit: contain;
}

.user-row:hover {
    cursor: default;
    background-color: var(--warning-color);
    color: var(--light-color);

    .edit-btn {
        color: var(--light-color);
    }
}

.user__manage-action {
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