<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <footer :style="{ display: route.path.startsWith('/admin') ? 'none' : 'block'}" >
    <div class="footer-wrapper container">
        <ul class="footer-menu">
            <li class="item-title"> Hujjatlar</li>
            <li>
                <RouterLink class="item-link" to="/">Sotish uchun umumiy shartlar</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Ofertalar arxivi</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Nizom</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Guvohnoma</RouterLink>
            </li>
        </ul>
        <ul class="footer-menu">
            <li class="item-title"> Servis </li>
            <li>
                <RouterLink class="item-link" to="/pray-time">Namoz vaqti</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Muddatli to'lov islomda</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">alif shopda soting!</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Qaytarish</RouterLink>
            </li>
        </ul>
        <ul class="footer-menu">
            <li class="item-title"> Tovarlar katalogi </li>
            <li>
                <RouterLink class="item-link" to="pray-time">Smartfonlar va telefonlar</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Gadjetlar</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Smartfonlar uchun aksessuarlar</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Tegishli tovarlar</RouterLink>
            </li>
            <li>
                <RouterLink class="item-link" to="/">Soat va aksessuarlar</RouterLink>
            </li>
        </ul>
        <ul class="footer__actions-menu">
            <li class="action__item-title">Biz ijtimoiy axborot vositalarida</li>
            <li>
                <div class="social__media-item">
                    <img src="../assets/images/instagram.webp">
                    <img src="../assets/images/facebook.svg">
                    <img src="../assets/images/telegram.svg">
                    <img src="../assets/images/olx.svg">
                    <img src="../assets/images/tiktok.svg">
                </div>
            </li>
            <li class="news-title">Axborot xizmati</li>
            <li>
                <RouterLink to="/" class="action__item-link">@alifshop_uz</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="action__item-link">+99897 777 00 77</RouterLink>
            </li>
        </ul>
    </div>
    <div class="footer__bottom-wrapper">
        <p>2024 © alifshop.uz</p>
        <img src="../assets/images/cycounter.png">
    </div>
    </footer>
</template>

<style lang="scss">
footer {
    padding: 3rem;
    width: 100%;
    background-color: var(--secondary-dark-color);
}

.footer-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.footer-menu {
    display: flex;
    flex-direction: column;
    row-gap: 1.1rem;
    list-style-type: none;

    .item-title {
        color: #5d6d7d;
        font-weight: 500;
        font-size: 14px;
        cursor: default;
    }

    .item-link {
        color: var(--light-color);
        font-size: 16px;
        text-decoration: none;
        transition: .2s;

        &:hover {
            cursor: pointer;
            color: var(--warning-color);
        }
    }


}

.footer__actions-menu {
    @extend .footer-menu;

    .action__item-title {
        color: #5d6d7d;
        font-weight: 500;
        font-size: 14px;
    }

    .social__media-item {
        display: flex;
        column-gap: 8px;

        img {
            width: 40px;
            aspect-ratio: 1/1;
        }
    }

    .news-title {
        margin-top: 2rem;
        @extend .action__item-title;
    }

    .action__item-link {
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        transition: .2s;
        color: var(--light-color);

        &:hover {
            cursor: pointer;
            color: var(--warning-color);
        }
    }
}

.footer__bottom-wrapper {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #5d6d7d;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        color: #5d6d7d;
    }

    img {
        width: 88px;
        height: 31px;
        border-radius: 8px;
    }
}

@media only screen and (max-width:1260px) {
    .footer-wrapper {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem 2rem;
    }
}

@media only screen and (max-width:902px) {
    .footer-wrapper {
        gap: 3rem 4rem;
    }

    .footer-menu {
        .item-link {
            font-size: 15px;
        }
    }
}

@media only screen and (max-width:710px) {
    .footer-wrapper {
        gap: 3rem 5rem;
    }

    .footer-menu {
        .item-link {
            font-size: 15px;
        }
    }

    .footer__actions-menu {
        .social__media-item {
            img {
                width: 36px;
            }
        }

        .action__item-link {
            font-size: 17px;
        }
    }
}

@media only screen and (max-width:688px) {
    .footer-wrapper {
        grid-template-columns: 1fr;
        gap: 3.5rem 0rem;
    }

    .footer-menu {
        .item-link {
            font-size: 16px;
        }
    }

    .footer__actions-menu {
        .social__media-item {
            column-gap: 1rem;

            img {
                width: 40px;
            }
        }

        .action__item-link {
            font-size: 19px;
        }
    }

    .footer__bottom-wrapper {
        flex-direction: column;
        align-items: flex-start;
        row-gap: .8rem;
    }
}

@media only screen and (max-width:386px) {
    footer {
        padding: 3rem 1rem;
    }

    .footer-menu {
        .item-link {
            font-size: 14px;
            letter-spacing: .5px;
        }
    }

    .footer__actions-menu {
        .social__media-item {
            column-gap: .7rem;

            img {
                width: 37px;
            }
        }

        .news-title {
            margin-top: .5rem;
        }

        .action__item-link {
            font-size: 17px;
        }
    }
}


@media only screen and (max-width:278px) {
    footer {
        padding: 3rem 0.5rem;
    }

    .footer-menu {
        row-gap: .7rem;

        .item-link {
            font-size: 14px;
            letter-spacing: .5px;
        }
    }

    .footer__actions-menu {
        .action__item-title {
            font-size: 13px;
        }

        .social__media-item {
            column-gap: .4rem;

            img {
                width: 34px;
            }
        }
    }
}
</style>