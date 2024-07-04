import { defineStore } from "pinia";


export const useStore = defineStore("products", {
    state: () => ({
        cart_data: [],
        liked_data: [],
        search_product: ""
    }),
    actions: {
        ProductAddToCart(product) {
            const ProductExict = this.cart_data.findIndex(f => f.id === product.id)
            if (ProductExict === -1) {
                this.cart_data = [...this.cart_data, product]
            }
            else {
                this.cart_data[ProductExict].count += 1
            }
        },
        RemoveProductFromCart(product) {
            const productExist = this.cart_data.findIndex(f => f.id === product.id)
            this.cart_data[productExist].count -= 1
            if (this.cart_data[productExist].count === 0) {
                this.cart_data.splice(productExist, 1)
            }
        },
        calculateTotalPrice() {
            return this.cart_data.reduce((total, item) => total + (item.price * item.count), 0);
        },
        //   Favorite Data
        ProductLiked(product) {
            this.liked_data = [...this.liked_data, product]
        },
        ProductUnliked(unliked_product) {
            this.liked_data = this.liked_data.filter(f => f?.id !== unliked_product?.id)
        }
    },
    persist: {
        enabled: true,
        strategies: {
            key: "cart",
            storage: localStorage
        }
    }
})