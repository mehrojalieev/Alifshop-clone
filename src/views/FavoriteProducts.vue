<script setup>
import { useStore } from '../store/store';
import Card from '../utils/Card.vue';
import Nav from '../layout/Nav.vue';
    const store = useStore()

</script>

<template>
    <Nav/>
      <div class="cart container">
            <div v-if="store.$state.liked_data.length > 0" class="liked__product-wrapper">
                <h2>Saralanganlar</h2>
                <div class="liked__card-container">
                    <Card :product="product" v-for="product in store.$state.liked_data"/>
                </div>
        </div>
            <div v-else class="empty__cart-wrapper">
                <div class="empty-content">
                    <h3>Saralangan mahsulotlar ro'yxati xozircha bo'sh</h3>
                    <p>uzoq vaqt qidirmaslik uchun o'zingizga yoqqan tovarlarni saqlang</p>
                    <RouterLink class="category-link" to="categories">Katalogga o'tish</RouterLink>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss" >
  .liked__product-wrapper{
        margin-top: 2rem;
        width: 100%;
    }
    .liked__card-container{
        display: grid;
        gap: 20px 10px;
        grid-template-columns: repeat(5, 1fr);
        .product-card{
            width: 100% !important;
            max-width: 270px !important;
        }
    }
    .empty__cart-wrapper{
        width: 100%;
        margin-top: 100px;
    }
    .empty-content{
        margin: auto;
        text-align: center;
        padding: 0 1rem;
        h3{
            font-size: 24px;
            max-width: 30rem;
            margin: auto;
            line-height: 32px;
            font-weight: 500;
            color: var(--dark-color);
            margin-bottom: 1rem;
        }
        p{
            margin: auto;
            font-size: 16px;
            color: var(--secondary-color);
            max-width: 24rem;
            line-height: 26px;
            margin-bottom: 2rem;
        }
        .category-link{
            margin: 0 auto 1rem;
            display: block;
            width: 100%;
            max-width: 16rem;
            padding: 11px 0;
            text-decoration: none;
            border-radius: 8px;
            color: var(--dark-color);
            font-weight: 500;
            cursor: pointer;
        }
        .category-link{
            background-color: var(--warning-color);
            &:hover{
                background-color: var(--warning-hover-color);
            }
        }
    }

    // RESPONSIVE STYLES

    @media only screen and (max-width: 848px){
        .liked__card-container{
            .product-card{
                max-width: 240px !important;
                img{
                    height: 130px !important;
                }
                .monthly-price{
                    font-size: 11px !important;
                }
            }
        }
    }
    @media only screen and (max-width: 810px){
        .liked__card-container{
            grid-template-columns: repeat(3,1fr);
        }
    }

@media only screen and (max-width: 680px){
    .empty__cart-wrapper{
        margin-top: 10px;
    }
    .empty-content{
        h3{
            font-size: 26px;
        }
        p{
            font-size: 14px;
            max-width: 20rem;
            line-height: 26px;
            margin-bottom: 1.7rem;
        }
        .category-link, .home-link{
            font-size: 15px;
            max-width: 40em;
            padding: 10px 0;
        }
      
    }

}
@media only screen and (max-width: 616px) {
    .liked__card-container{
        .product-card{
            img{
                height: 120px !important;
            }
            .product-name{
                font-size: 11px !important;
            }
            .monthly-price{
                display: none;
            }
        }
    }
}
@media only screen and (max-width:586px) {
        .liked__card-container{
            grid-template-columns: repeat(2,1fr);
        .product-card{
            img{
                height: 150px !important;
            }
            .product-name{
                font-size: 13px !important;
            }
            .monthly-price{
                display: none;
            }
    }
}
}
@media only screen and (max-width:396px) {
    .liked__card-container{
        .product-card{
            img{
                height: 100px !important;
            }
            .product-name{
                font-size: 11px !important;
            }
            .liked-btn{
                font-size: 21px !important;
            }
        }
    }
}
@media only screen and (max-width: 278px) {
        .liked__card-container{
            .product-card{
                .product-name{
                    margin: 5px 0 !important;
                }
                .old-price{
                    display: inline-block;
                    margin-top: 5px;
                    font-size: 11px;
                }
                .add__cart-btn{
                    font-size: 12px;
                    span{
                        font-size: 17px;
                    };
                }
            }
        }
}
</style>