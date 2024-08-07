<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';


const isOpenSidebar = ref(true)

watch(isOpenSidebar, () =>{
    console.log(isOpenSidebar);
})

</script>


<template>
    <div :class="isOpenSidebar ? 'sidebar' : 'sidebar closed-sidebar'">
      <span v-if="isOpenSidebar" @click="isOpenSidebar = false" class="material-symbols-outlined close-sidebar">arrow_back</span>
      <span v-else @click="isOpenSidebar = true" class="material-symbols-outlined close-sidebar">arrow_forward</span>
      <div class="sidebar__menu-logo__wrapper">

        <RouterLink class="sidebar-header" to="/">
          <img v-if="isOpenSidebar" src="../../assets/images/logo.svg" alt="Logo">
          <img v-else src="../../assets/images/aliflogo.jpg" alt="Logo">
        </RouterLink>

        <ul class="sidebar__menu">
          <li class="menu-item">
            <RouterLink class="item-link" :to="{name: 'ManageProducts'}">
              <span class="material-symbols-outlined">inventory_2</span>
              <strong>Product management</strong>
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="item-link" to="">
              <span class="material-symbols-outlined">people</span>
              <strong>Users management</strong>
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="item-link" to="">
              <span class="material-symbols-outlined">monitoring</span>
              <strong>Analytic</strong>
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="item-link" to="">
              <span class="material-symbols-outlined">settings</span>
              <strong>Settings</strong>
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="item-link" to="">
              <span class="material-symbols-outlined">headset_mic</span>
              <strong>Get help</strong>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="logout-btn">
        <span class="material-symbols-outlined">logout</span>
        <button class="logout-text">Logout</button>
      </div>
    </div>
  </template>

<style lang="scss" scoped>

.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .1s;
    position: relative;
    max-width: 270px;
    width: 100%;
    border-radius: 8px;
    height: calc(100vh - 30px);
    background-color: var(--light-color);
    padding: 1rem .6rem;
}


.sidebar-header {
    display: flex;
    border-radius: 8px;
    justify-content: flex-start;
    width: 100%;
    padding: .4rem .4rem;
    margin: auto;
    background-color: var(--light-color);

    img {
        width: 100%;
        max-width: 180px;
        height: 50px;
        object-fit: cover;
    }
}


.sidebar__menu {
    margin-top: 2rem;
    list-style-type: none;
    row-gap: 1rem;
    .item-link{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 14px 10px;
        border-radius: 8px;
        transition: .1s;
        margin-top: 1rem;
        column-gap: 7px;
        width: 100% !important;
        text-decoration: none;
        span {
            font-size: 24px;
            color: var(--secondary-color);
        }
        strong{
            color: var(--secondary-color);
            font-size: 16px;
            font-weight: 500;

        }
       
    }
    .router-link-exact-active{
        background-color: var(--warning-color);
        span, strong{
            color: var(--light-color);
        }
    } 
        
}
.sidebar__menu  .item-link:hover{
    background-color: var(--warning-color);
     span, strong{
        color: var(--light-color);
    }
}
.close-sidebar{
    position: absolute;
    top: 1%;
    right: -10px;
    padding: .3rem;
    font-size: 20px;
    color: var(--light-color);
    border-radius: 50%;
    transition: .2s;
    cursor: pointer;
    background-color: var(--warning-color);
    &:active{
        transform: scale(0.9);
    }
}
.closed-sidebar{
    max-width: 100px;
    .item-link {
        justify-content: center;
        padding: 12px 0px;
        strong{
            display: none;
        }
    } 
    .logout-btn {
        width: 100% !important;
        text-align: center;
        justify-content: center !important;
        span{
            font-size: 27px;
        }
        .logout-text{
            display: none;
        }
    }
}

.logout-btn{
    width: fit-content !important;
    display: flex;
    align-items: center;
    width: auto;
    cursor: pointer;
    padding: .2rem 1.3rem;
    border-radius: 8px;
    cursor: pointer;
    transition: .1s;
    span{
        color: var(--danger-color);
    }
    .logout-text{
        cursor: pointer;
        background: transparent;
        border: none;
        font-weight: 500;
        font-size: 18px;
        color: var(--danger-color);
    }
}

.logout-btn:hover{
    background-color: var(--danger-color);
    span, .logout-text{
        color: var(--light-color);

    }
}

// RESPONSIVE STYLES
@media only screen and (max-width: 1142px){
    .sidebar{
        max-width: 250px;
    }
    .sidebar__menu {
    margin-top: 2rem;
    row-gap: 1rem;
    .item-link{
        padding: 14px 10px;
        column-gap: 7px;
        span {
            font-size: 22px;
        }
        strong{
            font-size: 15px;

        }
       
    }
   
        
}
}
</style>