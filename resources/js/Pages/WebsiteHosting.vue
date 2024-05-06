<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import SVGCheck from "@/Components/SVGCheck.vue";
import { CpuChipIcon } from '@heroicons/vue/24/outline'
import { WifiIcon } from '@heroicons/vue/24/outline'
import { CloudIcon } from '@heroicons/vue/24/outline'
import { BanknotesIcon } from '@heroicons/vue/24/outline'
import { ServerStackIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/outline";
import {CheckIcon} from "@heroicons/vue/20/solid/index.js";
import {BuildingStorefrontIcon} from "@heroicons/vue/24/outline";
import {ArrowDownOnSquareIcon} from "@heroicons/vue/24/outline";
import {Head} from "@inertiajs/vue3";
</script>
<template>
    <Head>
        <title>Website Hosting</title>
        <meta name="description" content="Affordable cPanel and DirectAdmin website hosting on high-performance hardware, starting at just $1.99/month." />
        <meta name="keywords" content="website hosting, cPanel hosting, DirectAdmin hosting, Advin Servers, affordable hosting, reliable hosting, high-performance hosting" />
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advinservers.com/" />
        <meta property="og:title" content="Website Hosting" />
        <meta property="og:description" content="Start your website with our affordable cPanel or DirectAdmin hosting solutions, equipped with high-performance hardware from just $1.99/month." />
        <meta property="og:image" content="https://advinservers.com/eagle.png" />
        <meta property="og:site_name" content="Advin Servers" />
        <meta property="og:color" content="#FFFFFF" /> <!-- Discord Embed Color set to white -->
    </Head>

    <AppLayout title="Dashboard">
        <!-- Background Layer -->
        <div class="bg-black">
            <div class="relative py-12 isolate ">
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#8086ff] to-[#8b89fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <!-- Content Layer -->
                <div class="relative max-w-7xl mx-auto px-3 pt-20">
                    <div class="overflow-hidden sm:rounded-lg">
                        <div class="mt-20 mx-auto mb-20">

                            <h1 class="mb-4 font-bold text-6xl">
                        <span class="text-white">
                            Website Hosting
                        </span>
                            </h1>
                            <p class="font-normal text-white text-2xl mt-6">
                                Choose between panels: cPanel or DirectAdmin. <br />
                                Availability across 3 global locations.
                            </p>
                            <ul class="list-disc text-white list-inside mt-5">
                                <li>High performance website hosting</li>
                                <li>Great support and reliability</li>
                                <li>Global availability of servers, 99.99% SLA guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative max-w-7xl mx-auto px-3 pt-10">
            <div class="overflow-hidden sm:rounded-lg">
                <div class="mt-5 mx-auto">
                    <h1 class="mb-4 font-bold text-3xl">
                        <span class="text-black">
                            Our Products
                        </span>


                        <div class="grid gap-4 lg:grid-cols-3 sm:grid-cols-1">
                            <div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-8 mt-5">
                                <h5 class="mb-1 text-xl font-medium text-gray-500">Canada cPanel Hosting</h5>
                                <h5 class="mb-1 text-sm font-thin text-gray-400">Starting at</h5>
                                <div class="flex items-baseline text-gray-900">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">1.99</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                                </div>
                                <ul role="list" class="space-y-2 my-4">
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Intel Xeon Processor</span>
                                    </li>
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">20GB NVMe SSD Storage</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use Domains</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use Databases</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use File Inodes</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Powered by cPanel</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">1GB RAM & 1 CPU thread</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Located in Beauharnois, CA</span>
                                    </li>
                                </ul>
                                <a class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://clients.advinservers.com/store/website-hosting/cpanel-website-hosting-1">Learn More</a>
                            </div>
                            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5">
                                <h5 class="mb-1 text-xl font-medium text-gray-500">Las Vegas DirectAdmin Hosting</h5>
                                <h5 class="mb-1 text-sm font-thin text-gray-400">Starting at</h5>
                                <div class="flex items-baseline text-gray-900">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">1.99</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                                </div>
                                <ul role="list" class="space-y-2 my-4">
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">AMD Ryzen Processor</span>
                                    </li>
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use NVMe SSD Storage</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use Domains</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use Databases</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use File Inodes</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Powered by DirectAdmin</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">1GB RAM & 1 CPU thread</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Located in Las Vegas, NV</span>
                                    </li>
                                </ul>
                                <a class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://clients.advinservers.com/store/website-hosting/basic-plan-las-vegas">Learn More</a>
                           </div>
                            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5">
                                <h5 class="mb-1 text-xl font-medium text-gray-500">Singapore cPanel Hosting</h5>
                                <h5 class="mb-1 text-sm font-thin text-gray-400">Starting at</h5>
                                <div class="flex items-baseline text-gray-900">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">3.99</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                                </div>
                                <ul role="list" class="space-y-2 my-4">
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Intel Xeon Processor</span>
                                    </li>
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use NVMe SSD Storage</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use Domains</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Fair Use Databases</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">500,000 File Inodes</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Powered by cPanel</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">1GB RAM & 1 CPU thread</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Located in Singapore</span>
                                    </li>
                                </ul>
                                <a class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://clients.advinservers.com/store/website-hosting/unmetered-plan-singapore">Learn More</a>
                            </div>
                        </div>
                    </h1>
                </div>

                <div class="relative max-w-7xl mx-auto pt-10">
                    <div class="overflow-hidden sm:rounded-lg">
                        <div class="pt-10 mx-auto">
                            <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-14">
                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="bg-white mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <BuildingStorefrontIcon class="h-10 text-black"> </BuildingStorefrontIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Softaculous App Installer</h4>
                                        <p class="text-gray-700">
                                            Choose a library of 200+ website applications to host on your website hosting, including WordPress, Joomla, WHMCS, and more.
                                        </p>
                                    </div>
                                </div>

                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div class="bg-white mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <WifiIcon class="h-10 text-black"> </WifiIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Backups</h4>
                                        <p class="text-gray-700">
                                            All services offer daily backups, with a 7 day retention period. You can restore your website to any point in time within the last 7 days.
                                        </p>
                                    </div>
                                </div>

                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="bg-white mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <BanknotesIcon class="h-10 text-black"> </BanknotesIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">CloudLinux</h4>
                                        <p class="text-gray-700">
                                            Select PHP versions, extensions, and more through our CloudLinux interface. You can also install Node.js apps and more.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-32">

            </div>


        </div>
    </AppLayout>

</template>
