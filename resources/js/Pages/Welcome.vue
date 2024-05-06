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
import {Head, Link} from '@inertiajs/vue3';
</script>

<template>
    <Head>
        <title>Cloud VPS & Dedicated Servers</title>
        <meta name="description" content="Access Cloud VPS and dedicated servers with the world's fastest processors including AMD EPYC and Ryzen, available at an affordable price." />
        <meta name="keywords" content="Cloud VPS, dedicated servers, KVM VPS, AMD EPYC VPS, Ryzen VPS, EPYC Genoa, secure hosting, affordable hosting solutions, reliable hosting services, Advin Servers" />
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advinservers.com/" />
        <meta property="og:title" content="Cloud VPS & Dedicated Servers" />
        <meta property="og:description" content="Explore premium Cloud VPS and dedicated servers featuring AMD EPYC and Ryzen processors. Start leveraging powerful hosting solutions at competitive prices today." />
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
                            High Performance Servers
                        </span>
                            </h1>
                            <p class="font-normal text-white text-2xl mt-6">
                                We're an affordable hosting provider based in the USA. <br />
                                We offer reliable and quality hosting solutions located across 6 global locations.
                            </p>
                            <ul class="list-disc text-white list-inside mt-5">
                                <li>Owned hardware across all cloud server regions</li>
                                <li>Enterprise hardware with great support</li>
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


                        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                            <div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-8 mt-5">
                                <h5 class="mb-1 text-xl font-medium text-gray-500">Cloud Servers</h5>
                                <h5 class="mb-1 text-sm font-thin text-gray-400">Starting at</h5>
                                <div class="flex items-baseline text-gray-900">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">6.99</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                                </div>
                                <ul role="list" class="md:space-y-2 my-4">
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Starts with 8GB RAM & 4 vCPU</span>
                                    </li>
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">AMD EPYC Processors</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Enterprise Gen4 NVMe</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">ECC Registered Memory</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Full Root Access</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">KVM & Nested Virtualization</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">10 Gbps Network Connection</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Available in 6 Global Locations</span>
                                    </li>
                                </ul>
                                <Link type="button" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" :href="route('cloud')">Learn More</Link>
                            </div>
                            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5">
                                <h5 class="mb-1 text-xl font-medium text-gray-500">Dedicated Servers</h5>
                                <h5 class="mb-1 text-sm font-thin text-gray-400">Starting at</h5>
                                <div class="flex items-baseline text-gray-900">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">199.99</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                                </div>
                                <ul role="list" class="md:space-y-2 my-4">
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Bare Metal Servers</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Variety of Configurations</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Control Panel</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">24x7 KVM or IPMI Access</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Dedicated Hardware</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Nested Virtualization</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">10 Gbps Network Connection</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Available in 3 Global Locations</span>
                                    </li>
                                </ul>
                                <Link :href="route('dedicated')" type="button" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Learn More</Link>
                            </div>
                            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5">
                                <h5 class="mb-1 text-xl font-medium text-gray-500">Web Hosting</h5>
                                <h5 class="mb-1 text-sm font-thin text-gray-400">Starting at</h5>
                                <div class="flex items-baseline text-gray-900">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">1.99</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                                </div>
                                <ul role="list" class="md:space-y-2 my-4">
                                    <li class="flex items-center">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Intel Xeon Processors</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">NVMe SSD Storage</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Daily Offsite Backups</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">cPanel or DirectAdmin Access</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">CloudLinux & Softaculous</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Great for Small Websites</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">1 Gbps Network Connection</span>
                                    </li>
                                    <li class="flex">
                                        <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Available in 3 Global Locations</span>
                                    </li>
                                </ul>
                                <Link :href="route('website')" type="button" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Learn More</Link>
                            </div>
                        </div>
                    </h1>
                </div>

                <div class="relative max-w-7xl mx-auto pt-10">
                    <div class="overflow-hidden sm:rounded-lg">
                        <div class="mx-auto">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-14">
                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="bg-white mr-5 ml-1 mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <CpuChipIcon class="h-10 text-black"> </CpuChipIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Lightning Fast CPUs</h4>
                                        <p class="text-gray-700">
                                            We only use some of the fastest and highest end CPUs in our servers, including AMD EPYC Genoa and Milan series of processors.
                                        </p>
                                    </div>
                                </div>

                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div class="bg-white  mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <WifiIcon class="h-10 text-black"> </WifiIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Network</h4>
                                        <p class="text-gray-700">
                                            We offer up to 10 Gbit network uplinks in most of our locations, a massive upgrade from what is typically standard of cloud servers.
                                        </p>
                                    </div>
                                </div>

                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div class="bg-white  mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <CloudIcon class="h-10 text-black"> </CloudIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">All NVMe Storage</h4>
                                        <p class="text-gray-700">
                                            Almost all of our servers contain lightning fast solid state storage, resulting in low latency access times to your data.
                                        </p>
                                    </div>
                                </div>
                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="bg-white mr-5 ml-1 mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <BanknotesIcon class="h-10 text-black"> </BanknotesIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Affordable</h4>
                                        <p class="text-gray-700">
                                            We are one of the cheapest cloud service providers in the market, offering high performance servers at a fraction of the cost.
                                        </p>
                                    </div>
                                </div>

                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div class="bg-white  mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <ServerStackIcon class="h-10 text-black"> </ServerStackIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Owned Infrastructure</h4>
                                        <p class="text-gray-700">
                                            We own all of our hardware across nearly all of our cloud server regions, allowing us to deliver high performance at an affordable price.
                                        </p>
                                    </div>
                                </div>

                                <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <div class="bg-white  mt-5">
                                        <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                            <HeartIcon class="h-10 text-black"> </HeartIcon>
                                        </div>
                                        <h4 class="text-xl font-bold mb-2">Reliable</h4>
                                        <p class="text-gray-700">
                                            All services come with a 99.9% uptime SLA policy by default. We use enterprise gear and redundant systems to ensure reliability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white py-16 sm:py-24">
                <div class="mx-auto max-w-7xl pt-10">
                    <div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20 ">
                        <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0 bg-black"/>
                        <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
                        <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.15]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                        </div>
                        <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
                            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                        </div>
                        <div class="relative mx-auto max-w-2xl lg:mx-0">
                            <figure>
                                <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                                    <p>“Advin Servers ensures that only the best hardware and services are offered at the prices you deserve. Their commitment to quality and customer satisfaction sets them apart, while still offering a product that is 10x cheaper than the competition. ”</p>
                                </blockquote>
                                <figcaption class="mt-6 text-base text-white">
                                    <div class="font-semibold">John</div>
                                    <div class="mt-1">Website Developer</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </AppLayout>

</template>
