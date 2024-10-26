import { defineStore } from "pinia";

export const useStore = defineStore("products", {
    state: () => ({
        cart_data: [],
        liked_data: [],
        search_product: ""
    }),
    actions: {
        ProductAddToCart(product) {
            const productExistIndex = this.cart_data.findIndex(f => f._id === product._id);
            if (productExistIndex === -1) {
                this.cart_data.push({ ...product, count: 1 });
            } else {
                this.cart_data[productExistIndex].count += 1;
            }
        },
        RemoveProductFromCart(product) {
            const productExistIndex = this.cart_data.findIndex(f => f._id === product._id);
            if (productExistIndex !== -1) {
                this.cart_data[productExistIndex].count -= 1;
                if (this.cart_data[productExistIndex].count === 0) {
                    this.cart_data.splice(productExistIndex, 1);
                }
            }
        },
        calculateTotalPrice() {
            return this.cart_data.reduce((total, item) => total + item.price * item.count, 0);
        },
        // Favorite Data
        ProductLiked(product) {
            if (!this.liked_data.some(item => item._id === product._id)) {
                this.liked_data.push(product);
            }
        },
        ProductUnliked(unliked_product) {
            this.liked_data = this.liked_data.filter(item => item._id !== unliked_product._id);
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: "cart",
                storage: localStorage
            }
        ]
    }
});
