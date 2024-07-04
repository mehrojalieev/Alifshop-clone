import Home from "../views/Home.vue"
import {createRouter, createWebHistory} from 'vue-router'
// import ManageProducts from "@/views/ManageProducts.vue"
// import Dashboard from '@/views/Dashboard.vue'
// import ManageUsers from "@/views/ManageUsers.vue"


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            
            path: "/",
            name: 'Home',
            component: Home
        },
        {
            path: '/product/:id',
            name: "Single_Product",
            component: () => import('../views/SingleProduct.vue')
        },
        // {
        //     path:'/categories',
        //     name: 'Categories',
        //     component: () => import('../views/Categories.vue') 
        // },
        // {
        //     path: '/category/:category_name',
        //     name: 'Single_Category',
        //     component: () =>import('../views/SingleCategory.vue')
        // },
        {
            path: '/pray-time',
            name: 'PrayTime',
            component: () => import('../views/PrayTime.vue')
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('../views/Cart.vue')
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: () => import('../views/FavoriteProducts.vue')
        },

        // {
        //     path: '/account/',
        //     name: 'Account',
        //     component: Dashboard,
        //     meta: {auth: false},
        //     children:[
        //         {path: 'manage-products', name: 'DashboardIndex',  component: ManageProducts},
        //         {path: 'manage-users', name: 'ManageUsers', component: ManageUsers}
        //     ] 
        // },

        // {

        //     path: '/:catchAll(.*)',
        //     name: "NotFound",
        //     component: () => import('@/views/NotFound.vue')
        // }
    ]
})


export default routes