<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
const time_data = ref(null)

const LoadTimes = (value) => {
    axios.get(`https://islomapi.uz/api/present/day?region=${value ? value : 'Toshkent'}`)
        .then(response => time_data.value = response.data)
        .catch(error => console.log(error))
}

onMounted(() => {
    LoadTimes()
})

</script>


<template>
    <div class="container">
        <div class="prayer__time-wrapper">
            <h2 class="prayer__time-title">Namoz vaqti</h2>

            <div class="time__content-header">
                <select v-on:change="(e) => LoadTimes(e.target.value)">
                    <option value="toshkent">Toshkent </option>
                    <option value="andijon">Andijon </option>
                    <option value="buxoro">Buxoro </option>
                    <option value="fargona">Fargʻona </option>
                    <option value="jizzax">Jizzax </option>
                    <option value="qoraqalpogiston">Qoraqalpogʻiston</option>
                    <option value="xorazm">Xorazm </option>
                    <option value="namangan">Namangan </option>
                    <option value="navoiy">Navoiy </option>
                    <option value="samarqand">Samarqand </option>
                    <option value="sirdaryo">Sirdaryo </option>
                    <option value="surxondaryo">Surxondaryo </option>
                    <option value="qashqadaryo">Qashqadaryo </option>
                </select>
                <div class="item-content">
                    <span class="material-symbols-outlined">location_on</span>
                    <p>Region:</p>
                    <h4>{{ time_data && time_data.region }}</h4>
                </div>
                <div class="item-content">
                    <span class="material-symbols-outlined">date_range</span>
                    <p>Hafta kuni:</p>
                    <h4>{{ time_data && time_data.weekday }}</h4>
                </div>
                <div class="item-content">
                    <span class="material-symbols-outlined">schedule</span>
                    <p>Sana:</p>
                    <h4>{{ time_data && time_data.date }}</h4>
                </div>

            </div>
            <div class="time__card-wrapper">
                <div class="prayer__time-card">
                    <p>Bomdod</p>
                    <h3>{{ time_data && time_data?.times?.tong_saharlik }}</h3>
                </div>
                <div class="prayer__time-card">
                    <p>Peshin</p>
                    <h3>{{ time_data && time_data?.times?.peshin }}</h3>
                </div>
                <div class="prayer__time-card">
                    <p>Asr</p>
                    <h3>{{ time_data && time_data.times.asr }}</h3>
                </div>
                <div class="prayer__time-card">
                    <p>Shom</p>
                    <h3>{{ time_data && time_data.times.shom_iftor }}</h3>
                </div>
                <div class="prayer__time-card">
                    <p>Xufton</p>
                    <h3>{{ time_data && time_data.times.hufton }}</h3>
                </div>
            </div>

            <RouterLink class="back__home-link" to="/">
                <span class="material-symbols-outlined">arrow_back</span>
                <strong>Xaridga qaytish</strong>
            </RouterLink>
        </div>
    </div>
</template>


<style lang="scss">
.prayer__time-wrapper {
    width: 100%;
    padding: 1rem;
}

.prayer__time-title {
    font-size: 28px;
    font-weight: 500;
}

.time__content-header {
    margin-top: 10px;
    display: flex;
    width: 100%;
    column-gap: 70px;
    border-bottom: 1px solid #c4c6c7;
    padding-bottom: 10px;

    select {
        border-radius: 8px;
        padding: 6px 10px;
        font-size: 15px;
        outline-color: var(--warning-color);
        border: 1px solid #c4c6c7;
    }
}

.item-content {
    display: flex;
    align-items: center;
    column-gap: 3px;

    span {
        font-size: 19px;
    }

    p {
        font-size: 15px;
        color: var(--secondary-color);
        margin-right: 8px;
    }

    h4 {
        font-weight: 500;
        font-size: 17px;
    }
}

.time__card-wrapper {
    display: flex;
    align-items: center;
    column-gap: 13px;
    justify-content: space-between;

    width: 100%;
    margin-top: 20px;
}

.prayer__time-card {
    display: grid;
    place-items: center;
    padding: .5rem 2rem;
    width: 100%;
    max-width: 180px;
    border-radius: 8px;
    border: 2px solid #E3E8EA;
    background-color: #F4F6F7;

    &:hover {
        cursor: pointer;
        background-color: var(--light-color);
        border: 2px solid var(--warning-color);
    }

    p {
        font-size: 17px;
    }

    h3 {
        font-size: 33px;
        font-weight: 500;
    }
}

.back__home-link {
    max-width: 420px;
    height: 52px;
    background-color: var(--warning-color);
    text-decoration: none;
    margin: 80px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    color: var(--dark-color);
    border-radius: 8px;
    transition: .2s;

    &:hover {
        cursor: pointer;
        background-color: var(--warning-hover-color);
    }

    span {
        font-size: 22px;
    }

    strong {
        font-weight: 500;
        font-size: 16px;

    }

}

@media only screen and (max-width: 978px) {
    .time__content-header {
        column-gap: 50px;

        select {
            padding: 5px 8px;
            font-size: 14px;
        }
    }

    .item-content {
        column-gap: 3px;

        span {
            font-size: 18px;
        }

        p {
            font-size: 15px;
            margin-right: 7px;
        }

        h4 {
            font-size: 16px;
        }
    }

    .prayer__time-card {
        padding: .5rem 1.4rem !important;
        max-width: 170px;

        p {
            font-size: 16px;
        }

        h3 {
            font-size: 31px;
        }
    }
}

@media only screen and (max-width: 850px) {
    .time__content-header {
        column-gap: 27px;

        select {
            padding: 4px 6px;
            font-size: 14px;
        }
    }

    .item-content {
        column-gap: 3px;

        span {
            font-size: 17px;
        }

        p {
            font-size: 14px;
            margin-right: 7px;
        }

        h4 {
            font-size: 16px;
        }
    }

    .time__card-wrapper {
        column-gap: 5px;
    }

    .prayer__time-card {
        padding: .3rem 1.2rem !important;
        max-width: 140px;

        p {
            font-size: 15px;
        }

        h3 {
            font-size: 26px;
        }
    }
}

@media only screen and (max-width: 770px) {
    .time__content-header {
        column-gap: 20px;

        select {
            padding: 4px 6px;
            font-size: 14px;
        }
    }

    .item-content {
        column-gap: 3px;

        span {
            font-size: 17px;
        }

        p {
            font-size: 13px;
            margin-top: 3px;
            margin-right: 7px;
        }

        h4 {
            font-size: 15px;
        }
    }

    .time__card-wrapper {
        justify-content: space-evenly;
        column-gap: 5px;
    }

    .prayer__time-card {
        padding: .2rem .8rem !important;
        max-width: 120px;

        p {
            font-size: 14px;
        }

        h3 {
            font-size: 24px;
        }
    }
}

@media only screen and (max-width: 713px) {
    .time__content-header {
        column-gap: 20px;

        select {
            font-size: 14px;
        }
    }

    .item-content {
        column-gap: 3px;

        span {
            font-size: 21px;
        }

        p {
            display: none;
        }

        h4 {
            margin-top: 2px;
            font-size: 17px;
        }
    }

    .time__card-wrapper {
        width: 100%;
        display: block;
        column-gap: 5px;
    }

    .prayer__time-card {
        margin-bottom: 1rem;
        justify-content: flex-start;
        padding: 1rem .8rem !important;
        max-width: 650px;

        p {
            font-size: 17px;
        }

        h3 {
            font-size: 28px;
        }
    }
}

@media only screen and (max-width: 588px) {
    .time__content-header {
        column-gap: 20px;

        select {
            font-size: 13px;
            padding: 5px 1px;
        }
    }

    .item-content {
        column-gap: 3px;

        span {
            font-size: 17px;
        }

        h4 {
            margin-top: 2px;
            font-size: 15px;
        }
    }

    .time__card-wrapper {
        width: 100%;
        column-gap: 5px;
    }

    .prayer__time-card {
        padding: .7rem .7rem !important;
        max-width: 550px;

        p {
            font-size: 16px;
        }

        h3 {
            font-size: 28px;
        }
    }
}

@media only screen and (max-width: 530px) {
    .time__content-header {
        select {
            width: 100%;
            font-size: 16px;
            padding: .5rem;
        }
    }

    .item-content {
        display: none;
    }

    .time__card-wrapper {
        width: 100%;
        column-gap: 5px;
    }

    .prayer__time-card {
        padding: .7rem .7rem !important;
        max-width: 550px;

        p {
            font-size: 16px;
        }

        h3 {
            font-size: 28px;
        }
    }
}

@media only screen and (max-width: 440px) {
    .time__content-header {
        select {
            width: 100%;
            font-size: 15px;
            padding: .4rem;
        }
    }

    .time__card-wrapper {
        width: 100%;
    }

    .prayer__time-card {
        padding: .5rem !important;
        max-width: 550px;

        p {
            font-size: 15px;
        }

        h3 {
            font-size: 26px;
        }
    }
}

@media only screen and (max-width: 320px) {
    .time__content-header {
        select {
            font-size: 14px;
            padding: .3rem;
        }
    }

    .time__card-wrapper {
        margin-top: 15px;
        width: 100%;
    }

    .prayer__time-card {
        padding: .5rem !important;
        max-width: 550px;

        p {
            font-size: 14px;
        }

        h3 {
            font-size: 24px;
        }
    }

    .back__home-link {
        margin-top: 30px;
        height: 38px;

        span {
            font-size: 20px;
        }

        strong {
            font-size: 15px;
        }
    }
}

@media only screen and (max-width: 266px) {
    .prayer__time-title {
        font-size: 22px;
    }

    .time__card-wrapper {
        margin-top: 15px;
    }

    .prayer__time-card {
        padding: .3rem .5rem !important;

        p {
            font-size: 13px;
        }

        h3 {
            font-size: 22px;
        }
    }

    .back__home-link {
        margin-top: 30px;
        height: 38px;

        span {
            font-size: 18px;
        }

        strong {
            font-size: 14px;
        }
    }
}
</style>