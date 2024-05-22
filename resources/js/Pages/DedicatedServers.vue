<script setup xmlns="http://www.w3.org/1999/html">
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import SVGCheck from "@/Components/SVGCheck.vue";
import { CpuChipIcon } from '@heroicons/vue/24/outline'
import { WifiIcon } from '@heroicons/vue/24/outline'
import { CloudIcon } from '@heroicons/vue/24/outline'
import { BanknotesIcon } from '@heroicons/vue/24/outline'
import { ServerStackIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/outline";
import PricingCardHome from "@/Components/PricingCardHome.vue";
import {CheckIcon} from "@heroicons/vue/20/solid/index.js";
import CardSection from "@/Components/CardSection.vue";
import {computed, onMounted, reactive, ref, watch} from 'vue';
import ComputePlanSelector from "@/Pages/Partials/ComputePlanSelector.vue";
import DedicatedPlanSelector from "@/Pages/Partials/DedicatedPlanSelector.vue";
import Faq from "@/Components/Faq.vue";


const props = defineProps({
    productGroups: {
        type: Array,
        default: () => []
    }
});

const selectedProductGroup = ref(null);
const selectedLocation = ref(null);
const selectedPlan = ref(null);
const availableLocations = ref([]);
const availablePlans = ref([]);

watch(() => props.productGroups, (newVal) => {
    if (newVal && newVal.length > 0) {
        selectedProductGroup.value = newVal[0].id;
        updateLocationsAndPlans(selectedProductGroup.value);
    }
}, { deep: true });

watch(selectedProductGroup, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        updateLocationsAndPlans(newVal);
    }
});

watch(selectedLocation, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        updatePlans(newVal);
    } else {
        availablePlans.value = [];
    }
});

function updateLocationsAndPlans(groupId) {
    const group = props.productGroups.find(g => g.id === groupId);
    if (group && group.dedicated_plans) {
        availableLocations.value = group.dedicated_plans.map(plan => plan.dedicated_compute_region)
            .filter((location, index, self) =>
                    index === self.findIndex((loc) => (
                        loc.id === location.id
                    ))
            );

        if (availableLocations.value.length > 0) {
            selectedLocation.value = availableLocations.value[0].id;
        } else {
            availableLocations.value = [];
            selectedLocation.value = null;
        }
    } else {
        availableLocations.value = [];
        availablePlans.value = [];
        selectedLocation.value = null;
        selectedPlan.value = null;
    }
}

function updatePlans(locationId) {
    const group = props.productGroups.find(g => g.id === selectedProductGroup.value);
    if (group && group.dedicated_plans) {
        availablePlans.value = group.dedicated_plans.filter(plan => plan.dedicated_compute_region.id === locationId);
    } else {
        availablePlans.value = [];
    }
}

onMounted(() => {
    if (props.productGroups && props.productGroups.length > 0) {
        selectedProductGroup.value = props.productGroups[0].id;
        updateLocationsAndPlans(selectedProductGroup.value);
    }
});

const isInStock = (locationId) => {
    const group = props.productGroups.find(g => g.id === selectedProductGroup.value);
    if (group) {
        const plansInStock = group.dedicated_plans.filter(plan => plan.dedicated_compute_region.id === locationId && plan.stock);
        return {
            available: plansInStock.length > 0,
            count: plansInStock.length
        };
    }
    return { available: false, count: 0 };
}

const faq = [
    {
        question: "Do you offer DDoS mitigation?",
        answer:
            "We offer basic L4 mitigation by default. The exact capacity of the mitigation can vary per location, but we do not list mitigation capacities at this time. Layer 7 or game DDoS mitigation and custom firewall filters are not available at the moment. If you do happen to get frequent or large DDoS attacks that may start impacting other users, we may have to ask you to move to a dedicated server or to different location with better DDoS mitigation. For this reason, if you get frequent DDoS attacks, we'd strongly recommend tunneling through a solution that specializes in high-capacity mitigation such as Cloudflare. We can tank the occasional attack, as long as it is not too large or sophisticated.",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            'We accept credit cards, PayPal, AliPay, Klarna, Amazon Pay, Google Pay, Apple Pay, 200+ cryptocurrencies (including XMR), and more!',
    },
    {
        question: "Do you have a refund policy?",
        answer:
            'Refunds are not offered on dedicated servers.',
    },
]






const form = reactive({
    group: null,
    location: null,
    planbox: null,
    ssh_key: null,
    name: null
})
import { Head } from '@inertiajs/vue3'
</script>

<template>
    <Head>
        <title>Affordable Dedicated Servers</title>
        <meta name="description" content="Access top-tier Ryzen 7950X3D and AMD EPYC 9004 series dedicated servers at competitive prices, available globally." />
        <meta name="keywords" content="dedicated servers, Ryzen 7950X3D, AMD EPYC 9004, affordable hosting, reliable hosting services, global server locations, EPYC Genoa, EPYC Milan, high-performance servers" />
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advinservers.com/" />
        <meta property="og:title" content="Affordable Dedicated Servers" />
        <meta property="og:description" content="Get high performance Ryzen 7950X3D or AMD EPYC 9004 series dedicated servers at unbeatable prices, available in multiple global locations." />
        <meta property="og:image" content="https://advinservers.com/eagle.png" />
        <meta property="og:site_name" content="Advin Servers" />
        <meta name="theme-color" content="#FFFFFF" />
    </Head>

    <AppLayout title="Dashboard">
        <!-- Background Layer -->
        <div class="bg-black ">
            <div class="relative py-12 isolate ">
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#8086ff] to-[#8b89fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <!-- Content Layer -->
                <div class="relative max-w-7xl mx-auto px-3 pt-20">
                    <div class="overflow-hidden sm:rounded-lg">
                        <div class="mt-20 mx-auto mb-20">

                            <h1 class="mb-4 font-bold text-6xl text-white">
                                Dedicated Servers
                            </h1>
                            <p class="font-normal text-white text-2xl mt-6">
                                Bare metal cloud servers in 3 global locations. <br />
                                No contract, monthly billed.
                            </p>
                            <ul class="list-disc text-white list-inside mt-5">
                                <li>IPMI or KVM access provided</li>
                                <li>Enterprise hardware with great support</li>
                                <li>Global availability of servers, 99.99% SLA guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative max-w-7xl mx-auto pt-10">
            <CardSection>
                <template #title>
                    Service Type
                </template>
                <template #description>
                    Choose your instance tier for your new dedicated server
                </template>
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <div class="grid lg:grid-cols-3">
                            <div v-for="(group, index) in productGroups" :key="group.id" class="relative w-72 lg:w-96" >
                                <input class="peer hidden" type="radio" name="group" :checked="index === 0" :value="group.id" :id="'group_' + index" v-model="selectedProductGroup"  />
                                <label :for="'group_' + index" class=" rounded-md peer-checked:border-solid peer-checked:border-gray-400 flex cursor-pointer select-none border-2 p-3" for="radio_1">
                                    <div class="ml-2">
                                        <span class="mt-2 font-normal">{{ group.name }}</span>
                                        <p class="text-slate-500 text-sm leading-6">{{ group.description }}</p>
                                        <p class="text-slate-500 font-semibold text-xs leading-6">{{ group.subtext }}</p>

                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </template>
            </CardSection>
            <CardSection>
                <template #title>
                    Compute Region
                </template>
                <template #description>
                    Choose the region where you want to deploy your dedicated server, this will determine the physical location of it
                </template>
                <template #form>
                    <div class="grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-4">
                        <div v-for="(location, index) in availableLocations" :key="location.id" class="relative">
                            <input class="peer hidden" :id="'location_' + index" type="radio" name="location"
                                   :checked="index === 0" :value="location.id" v-model="selectedLocation" @change="updatePlans(location.id)" />

                            <label :for="'location_' + index" class="rounded-md peer-checked:border-solid peer-checked:border-gray-400 flex cursor-pointer select-none border-2 p-3">
                                <img width="48" height="32" :src="location.flag_url" alt="Flag"/>
                                <div class="ml-5">
                <span class="font-normal">{{ location.display_name }}<br />
                    <span class="font-thin text-xs" :class="isInStock(location.id).available ? 'text-green-600' : 'text-red-600'">
                        {{ isInStock(location.id).available ? 'Available Plans' : 'No Available Plans' }}
                    </span>
                </span>
                                </div>
                            </label>
                        </div>
                    </div>

                </template>
            </CardSection>

            <CardSection>
                <template #title>
                    Instance Plans
                </template>
                <template #description>
                    Choose the desired plan and pricing for your dedicated servers
                </template>
                <template #form>
                    <DedicatedPlanSelector :availablePlans="availablePlans"></DedicatedPlanSelector>
                </template>
            </CardSection>
            <div class="relative max-w-7xl mx-auto px-3 ">
                <div class="pt-10 flex justify-center">
                    <p class="relative rounded-lg bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                        <span class="hidden md:inline">Need a custom plan? Need a BGP session?</span>
                        <a href="https://clients.advinservers.com/contact.php" target="_blank" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" /> Contact Us <span aria-hidden="true">&rarr;</span></a>
                    </p>
                </div>
                <div class="overflow-hidden sm:rounded-lg pt-10">
                    <div class="mt-5 mx-auto">
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
                                    <h4 class="text-xl font-bold mb-2">BGP & BYOIP</h4>
                                    <p class="text-gray-700">
                                        BGP and BYOIP can be offered for free across our dedicated servers, contact us for more information on options.
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
                                    <h4 class="text-xl font-bold mb-2">Customizable</h4>
                                    <p class="text-gray-700">
                                        Configurations are always customizable, allowing you to choose the exact amount of resources you need for your workload.
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
                                        We own all of our hardware across nearly all of our dedicated server regions, allowing us to deliver high performance at an affordable price.
                                    </p>
                                </div>
                            </div>

                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div class="bg-white  mt-5 mb-20">
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
            <div class="relative max-w-7xl mx-auto px-3 pt-10">
                <div class="flex flex-wrap flex-row-reverse"> <!-- Changed to flex-row-reverse -->
                    <div class="w-full lg:w-1/2">
                        <img class="m-1 rounded-lg border-gray-200 border mt-5 " src="https://fro-images.b-cdn.net/IMG_20230807_034614.jpg" alt="dedicated Panel">
                    </div>
                    <div class="w-full lg:w-5/12 mr-auto"> <!-- Changed ml-auto to mr-auto -->
                        <p class="text-2xl pt-4 pb-3 font-semibold">
                            Quality Hardware
                        </p>
                        <p class="text-gray-700">
                            We typically use quality hardware in our servers whenever possible, ensuring high performance and reliability.
                        </p>
                        <ul class="mt-4">
                            <li class="flex items-center">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">NVMe SSD Storage</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Modern Hardware Platform</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">NVIDIA Mellanox NICs</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">DDR4 or DDR5 ECC Memory</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Server Motherboards with IPMI</span>
                            </li>

                        </ul>
                        <p class="mt-4 text-gray-700">
                            All servers are built with stability in mind.
                        </p>
                    </div>
                </div>
                <Faq :faq="faq"></Faq>
            </div>
        </div>
    </AppLayout>
</template>
