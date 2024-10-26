<template>
    <div class="skeleton-card">
        <span class="skeleton-like-btn"></span>
        <div class="skeleton-image"></div>
        <div class="skeleton-text skeleton-name"></div>
        <div class="skeleton-text skeleton-monthly-price"></div>
        <div class="skeleton-text skeleton-old-price"></div>
        <div class="skeleton-text skeleton-price"></div>
        <div class="skeleton-cart-btn"></div>
    </div>
</template>

<style scoped>
.skeleton-card {
    width: 100%;
    padding: 1rem;
    background: #f0f0f0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
}

.skeleton-like-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 50%;
}

.skeleton-image {
    width: 100%;
    height: 150px;
    background-color: #e0e0e0;
    border-radius: 8px;
}

.skeleton-text {
    width: 80%;
    height: 16px;
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
}

.skeleton-name {
    width: 60%;
    height: 20px;
    margin-top: 10px;
}

.skeleton-monthly-price,
.skeleton-old-price,
.skeleton-price {
    height: 16px;
}

.skeleton-old-price {
    width: 50%;
}

.skeleton-price {
    width: 60%;
}

.skeleton-cart-btn {
    margin-top: 8px;
    width: 80px;
    height: 36px;
    background-color: #e0e0e0;
    border-radius: 8px;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>