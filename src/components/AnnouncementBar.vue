<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
    <div :style="{display: route.path.startsWith('/product') ? 'none' : 'flex'}"  class="announcement-bar">

        <div class="nav__top-navigation container">
            <select class="language-category">
                <option value="uzb">UZB</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
            <div class="top__navigation-actions">
                <RouterLink class="navigation-link" to='pray-time'>Namoz vaqti</RouterLink>
                <RouterLink class="navigation-link" to='/'>alif shopda soting</RouterLink>
                <RouterLink class="navigation-link" to='pray-time'>Bizga yozing</RouterLink>
            </div>
        </div>
</div>
</template>

<style  lang="scss">
.announcement-bar{
    display: flex;
    align-items: center;
    width: 100%;
    height: 47px;
    padding: 1rem;
    background-color: #f4f6f7;
}
    .nav__top-navigation{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
    }
    .language-category{
        color: var(--secondary-color) !important;
        font-size: 20px;
        outline-color: var(--secondary-color);     
        border: none; 
        outline: none; 
        background: transparent;
        width: 60px;
        cursor: pointer;
    }
    .top__navigation-actions{
        display: flex;
        align-items: center;
        column-gap: 25px;
        .navigation-link{
            color: var(--secondary-color);
            font-size: 16px;
            border: none;
            text-decoration: none;
            &:hover{
                cursor: pointer;
                color: var(--dark-color);
            }
        }
        .router-link-exact-active{
            color: var(--warning-color);
        }
    }
    .router-link-exact-active{
            color: var(--warning-color) !important;
         }

    // RESPONSIVE STYLES 

    @media only screen and (max-width: 860px){
        .top__navigation-actions{
        column-gap: 22px;
        .navigation-link{
            font-size: 14px;
        }
    }
    }

    @media only screen and (max-width: 680px) {
        .announcement-bar{
            display: none;
        }
    }

    @media only screen and (max-width:520px){
        .nav__top-navigation{
            position: relative;
            .language-category{
                display: none;
            }
    }
        .top__navigation-actions{
            justify-content: space-between;
            position: absolute;
            top: 30%;
            left: 10%;
        column-gap: 15px;
        .navigation-link{
            font-size: 13px;
           
        }
         }
    }

    @media only screen and (max-width:410px){
        .top__navigation-actions{
            position: absolute;
            top: 25%;
            left: 5%;
        column-gap: 11px;
        .navigation-link{
            font-weight: 700;
            font-size: 11px;
           
        }
         }
    }



</style>