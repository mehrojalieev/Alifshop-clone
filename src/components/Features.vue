<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <div :style="{ display: route.path.startsWith('/admin') ? 'none' : 'block'}"  class="feature">

        <div class="feature-wrapper container">
            <img src="../assets/images/feature.png">
            <div class="feature-content">
                <h3 class="content-title">Ajoyib takliflar har doim yoningizda</h3>
                <p class="content-description">alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida
                    hammadan tez biling</p>
                <div class="content-social">
                    <img src="../assets/images/play-market.svg">
                    <img src="../assets/images/app-store.svg">
                    <img src="../assets/images/app-gallery.svg">
                </div>
                <button class="application-btn">Ilovani ochish</button>
            </div>
            <div class="feature-scanner">
                <img src="../assets/images/qr-code.webp">
                <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.feature {
    margin-top: 3rem;
    position: relative;
    width: 100%;
    background-color: #f4f6f7;
}

.feature-wrapper {
    // position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0 1.5rem;

    img {
        width: 100%;
        max-width: 330px;
        height: 322px;
        object-fit: contain;
    }
}

.feature-content {
    .content-title {
        font-size: 24px;
        color: var(--dark-color);
        font-weight: 500;
        line-height: 2rem;
        max-width: 300px;
    }

    .content-description {
        margin-top: .5rem;
        font-size: 16px;
        color: #505c6a;
        max-width: 448px;
    }

    .content-social {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        column-gap: .4rem;

        img {
            object-fit: contain;
            max-width: 130px;
            height: 35px;
        }
    }

    .application-btn {
        display: none;
        width: 100%;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        background-color: var(--warning-color);
        color: var(--dark-color);
        max-width: 440px;
        height: 52px;
    }
}

.feature-scanner {
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: contain;
        max-width: 104px;
        height: 104px;
    }

    p {
        max-width: 110px;
        text-align: center;
        font-size: 14px;
        color: #5d6d7d;
        line-height: 20px;
        margin-top: .3rem;
    }
}


// RESPONSIVE STYLES
@media only screen and (max-width: 950px) {
    .feature-content {
        .content-social {
            display: none;
        }

        .application-btn {
            margin-top: 1rem;
            display: block;
        }
    }

    .feature-scanner {
        display: none;
    }
}

@media only screen and (max-width: 746px) {
    .feature-content {

        .application-btn {
            margin-top: 1rem;
            display: block;
        }

        .content-title {
            font-size: 20px;
        }

        .content-description {
            font-size: 14px;
        }

        .application-btn {
            height: 45px;
            font-size: 15px;
        }
    }
}

@media only screen and (max-width: 628px) {
    .feature-wrapper {
        flex-direction: column;
    }

    .feature-content {
        margin-top: 1rem;

        .content-title {
            max-width: none;
            font-size: 22px;
        }

        .content-description {
            font-size: 16px;
        }

        .application-btn {
            height: 54px;
        }
    }
}

@media only screen and (max-width: 410px) {
    .feature-content {
        .content-title {
            font-size: 20px;
        }

        .content-description {
            font-size: 15px;
        }

        .application-btn {
            height: 48px;
        }
    }
}

@media only screen and (max-width: 290px) {
    .feature-content {
        margin-top: .4rem;

        .content-title {
            line-height: 28px;
            font-size: 20px;
        }

        .content-description {
            font-size: 14px;
        }

        .application-btn {
            height: 45px;
        }
    }
}
</style>