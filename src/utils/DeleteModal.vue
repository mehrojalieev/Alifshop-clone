<script setup>
import { watch } from 'vue';
import { useStore } from '../store/store';

const props = defineProps({
    isOpenDeleteModal: {
        type: Boolean,
        default: false
    }
})
    const store = useStore()
watch(() => props.isOpenDeleteModal, (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : 'auto'
})

const emit = defineEmits(['update:isOpenDeleteModal']);

const handleCloseModal = () => {
    emit('update:isOpenDeleteModal', false);
};

// const deleteCartProduct = (product) => {
//     store.
// }
</script>


<template>
    <div :style="{ display: props.isOpenDeleteModal ? 'flex' : 'none' }" class="delete__modal-overlay">
        <div class="delete-modal">
            <h3 class="modal-title">Ushbu tovarni savatdan aniq o'chirib tashlamoqchimisiz?</h3>
            <div class="modal-btns">
                <button onclick="" class="delete-btn">O'chirish</button>
                <button @click="handleCloseModal" class="cancel-btn">Bekor qilish</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.delete__modal-overlay {
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh !important;
    background-color: rgba(190, 190, 190, 0.473);
    z-index: 999 !important;
}

.delete-modal {
    max-width: 383px;
    height: fit-content !important;
    width: 100%;
    border-radius: 8px;
    background-color: var(--light-color);
    padding: 1.2rem;

    .modal-title {
        font-size: 18px;
        font-weight: 550;
        line-height: 28px;
    }

    .modal-btns {
        margin-top: 1.2rem;

        button {
            margin-top: 10px;
            width: 100%;
            height: 40px;
            border-radius: 8px;
            font-size: 14px !important;
            font-weight: 500;
            border: none;
            color: var(--dark-color);
            cursor: pointer;
        }

        .delete-btn {
            background-color: var(--warning-color);

            &:hover {
                background-color: var(--warning-hover-color);
            }
        }

        .cancel-btn {
            background: transparent;
            border: 2px solid var(--secondary-light-color);

            &:hover {
                background-color: var(--secondary-light-color);
            }
        }
    }
}
</style>