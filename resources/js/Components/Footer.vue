<template>
    <footer class="bg-black" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://fro-images.b-cdn.net/bald-eagle-bird-golden-eagle-clip-art-icon-eagle-free-vectors-download.svg" class="h-7 invert" alt="Bald Eagle">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap font-bukhari-script text-white">Advin Servers</span>
                    </a>
                    <p class="text-sm leading-6 text-gray-300">High-performance cloud hosting for an affordable price, featuring lightning fast processors.</p>
                    <p class="text-sm leading-6 text-gray-300">Contact: company@advinservers.com<br />Address: Advin Services LLC<br />
                        3640 Concord Pike #1080
                        Wilmington, DE 19803
                    </p>
                    <p class="text-sm leading-6 text-gray-300">Advin Services LLC, registered in Delaware, United States under file number 5949002.
                    </p>
                    <div class="flex space-x-6">
                        <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
                            <span class="sr-only">{{ item.name }}</span>
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.solutions" :key="item.name">
                                    <Link :href="route(item.route)" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.support" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-white">Services</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.services" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.legal" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                <p class="text-xs leading-5 text-gray-400">&copy; 2024 Advin Services, LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { Link } from '@inertiajs/vue3';

const navigation = {
    solutions: [
        { name: 'Cloud Servers', route: 'cloud' },
        { name: 'Dedicated Servers', route: 'dedicated' },
        { name: 'Website Hosting', route: 'website' },
    ],
    support: [
        { name: 'Contact', href: 'https://clients.advinservers.com/contact.php' },
        { name: 'Documentation', href: 'https://docs.advinservers.com' },
        { name: 'Service Status', href: 'https://status.advinservers.com' },
    ],
    services: [
        { name: 'Client Area', href: 'https://clients.advinservers.com' },
    ],
    legal: [
        { name: 'Fair Use', href: 'https://docs.advinservers.com/policies/fair-use' },
        { name: 'Privacy', href: 'https://docs.advinservers.com/policies/privacypolicy' },
        { name: 'Terms', href: 'https://docs.advinservers.com/policies/termsofservice' },
        { name: 'SLA', href: 'https://docs.advinservers.com/policies/sla' },
        { name: 'Refund', href: 'https://docs.advinservers.com/policies/refund' },
    ],
    social: [

    ],
}
</script>
