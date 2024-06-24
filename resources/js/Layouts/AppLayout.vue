<script setup>

import Footer from "@/Components/Footer.vue";
import NavLink from "@/Components/NavLink.vue";

import { Link } from '@inertiajs/vue3';
import {ref} from "vue";

const isOpen = ref(false);

function toggleMenu() {
    isOpen.value = !isOpen.value;
}

</script>

<template>


    <nav class="bg-black fixed w-full z-20 top-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <!-- Logo and brand name -->
            <a :href="route('home')" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="eagle_white.svg" class="h-7" alt="Bald Eagle">
                <span class="self-center text-2xl font-bold whitespace-nowrap text-white">Advin Servers</span>
            </a>
            <!-- Mobile menu button -->
            <button @click="toggleMenu" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" :aria-expanded="isOpen ? 'true' : 'false'">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <!-- Primary Navigation Links -->
            <div class="hidden w-full md:flex md:w-auto md:order-1" :class="{'flex': isOpen, 'hidden': !isOpen}" id="navbar-sticky">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 bg-black md:p-0">
                    <li>
                        <NavLink :href="route('home')" :active="route().current('home')">Home</NavLink>
                    </li>
                    <li>
                        <NavLink :href="route('cloud')" :active="route().current('cloud')">Cloud Servers</NavLink>
                    </li>
                    <li>
                        <NavLink :href="route('dedicated')" :active="route().current('dedicated')">Dedicated Servers</NavLink>
                    </li>
                    <li>
                        <NavLink :href="route('website')" :active="route().current('website')">Web Hosting</NavLink>
                    </li>
                </ul>
            </div>
            <!-- Client area and order buttons -->
            <div class="hidden md:flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
                <a href="https://clients.advinservers.com/login" class="rounded-md hover:bg-gray-200 bg-white text-black font-bold text-sm px-4 py-2 text-center border-black border border-transparent">Client Area</a>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden" :class="{'block': isOpen, 'hidden': !isOpen}" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink :href="route('home')" :active="route().current('home')">Home</NavLink>
                <NavLink :href="route('cloud')" :active="route().current('cloud')">Cloud Servers</NavLink>
                <NavLink :href="route('dedicated')" :active="route().current('dedicated')">Dedicated Servers</NavLink>
                <NavLink :href="route('website')" :active="route().current('website')">Web Hosting</NavLink>
            </div>
            <div class="pt-4 ml-2 pb-3 border-t border-gray-700">
                <a href="https://clients.advinservers.com/login" class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" >Client Area</a>
                <NavLink :href="route('cloud')">Order Cloud</NavLink>
            </div>
        </div>
    </nav>

    <main>
        <slot></slot>
    </main>

    <Footer></Footer>


</template>
