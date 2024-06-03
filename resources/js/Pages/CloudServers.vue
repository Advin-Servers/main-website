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
import Faq from "@/Components/Faq.vue";
import {Head} from "@inertiajs/vue3";


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

watch(selectedProductGroup, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        selectedLocation.value = null; // Reset the selected location
        selectedPlan.value = null; // Reset the selected plan
        updateLocationsAndPlans(newVal);
    }
});

const sortedAvailableLocations = computed(() => {
    return [...availableLocations.value].sort((a, b) => {
        if (a.flag_url > b.flag_url) return -1;
        if (a.flag_url < b.flag_url) return 1;
        return 0;
    });
});



function updateLocationsAndPlans(groupId) {
    const group = props.productGroups.find(g => g.id === groupId);
    if (group && group.vps_plans) {
        availableLocations.value = group.vps_plans.map(plan => plan.vps_compute_region)
            .filter((location, index, self) =>
                index === self.findIndex((loc) => loc.id === location.id)
            );

        if (availableLocations.value.length > 0) {
            selectedLocation.value = availableLocations.value[0].id; // Automatically select the first location
            updatePlans(selectedLocation.value); // Update plans for newly selected location
        } else {
            availableLocations.value = [];
            availablePlans.value = [];
            selectedLocation.value = null;
            selectedPlan.value = null;
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
    if (group && group.vps_plans) {
        availablePlans.value = group.vps_plans.filter(plan => plan.vps_compute_region.id === locationId);
    } else {
        availablePlans.value = [];
    }
}

onMounted(() => {
    if (props.productGroups && props.productGroups.length > 1) {
        selectedProductGroup.value = props.productGroups[1].id;
        updateLocationsAndPlans(selectedProductGroup.value);
    }
});



const isInStock = (locationId) => {
    const group = props.productGroups.find(g => g.id === selectedProductGroup.value);
    if (group) {
        const plansInStock = group.vps_plans.filter(plan => plan.vps_compute_region.id === locationId && plan.stock);
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
        question: "What operating systems are supported?",
        answer:
            "We have templates for Ubuntu, Debian, CentOS, AlmaLinux, RockyLinux, and Windows Server. If you are installing Windows Server, there is a semi-manual procedure that needs to be followed which is detailed in our documentation. If you need a custom ISO, you can open a ticket and we can mount it free of charge.",
    },
    {
        question: "What is a VPS?",
        answer:
            "A VPS (or virtual private server) is a \"slice\" or a small part of a physical server that is allocated to you. A VPS typically runs an operating system that you have full control over, such as Windows or Linux, and used to host a website, a game server, or a small application. However, VPS's have shared resources (i.e. CPU cores), meaning that you must keep others in mind.",
    },
    {
        question: "Can I change plans in the future?",
        answer:
            "Due to limitations of KVM virtualization, you can upgrade your plan (as long as there is stock) but not downgrade it. This can be done by opening a ticket. The reason you cannot downgrade your service is due to limitations with resizing KVM disks.",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            'We accept credit cards, PayPal, AliPay, Klarna, Amazon Pay, Google Pay, Apple Pay, 200+ cryptocurrencies (including XMR), and more!',
    },
    {
        question: "Do you have a refund policy?",
        answer:
            'Yes, we offer a 14 day money back guarantee on our cloud services and website hosting. Please read our refund policy for the full terms. Payment fees may be deducted, and not all payment methods are applicable.',
    },
]



const form = reactive({
    group: null,
    location: null,
    planbox: null,
    ssh_key: null,
    name: null
})

</script>
<template>
    <Head>
        <title>High Performance Cloud VPS</title>
        <meta name="description" content="Experience elite performance with our Cloud VPS, featuring world-class AMD EPYC and Ryzen processors. Start at just $0.75/GB with full root access, no contracts required." />
        <meta name="keywords" content="Cloud VPS, KVM VPS, AMD EPYC VPS, Ryzen VDS, affordable hosting, reliable hosting, secure web hosting, cloud hosting, dedicated servers, EPYC Genoa, 7950X VDS, no contract hosting" />
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advinservers.com/" />
        <meta property="og:title" content="High-Performance Cloud VPS" />
        <meta property="og:description" content="Explore top-tier Cloud VPS solutions with AMD EPYC and Ryzen technologies at competitive prices. No contracts, full root access, starting from $0.75/GB." />
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
                                Cloud Servers
                            </h1>
                            <p class="font-normal text-white text-2xl mt-6">
                                High performance virtual servers, powered by KVM. <br />
                                No contract, monthly billed.
                            </p>
                            <ul class="list-disc text-white list-inside mt-5">
                                <li>14 day money back guarantee</li>
                                <li>Enterprise hardware with great support</li>
                                <li>Global availability of servers, 99.99% SLA guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="relative max-w-7xl mx-auto pt-10">
            <div class="relative max-w-7xl mx-auto px-3 pt-10 mb-5">
            <!-- Black banner with Genoa text in red gradient acrooss the screen similar relative max-w-7xl -->
            <div class="p-4 mb-4 text-sm rounded-md border bg-orange-100 border-orange-500 text-orange-700" role="alert">
                <span class="font-normal">Quilibrium is blocked on our KVM Standard and Premium VPS due to having shared vCPU cores. Please use the Quilibrium lineup or dedicated servers to run Quilibrium nodes.</span>
            </div>
            </div>


            <CardSection>
                <template #title>
                    Service Type
                </template>
                <template #description>
                    Choose your instance tier for your new cloud instance
                </template>
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <div class="grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-4">
                            <div v-for="(group, index) in productGroups" :key="group.id" class="relative" >
                                <input class="peer hidden" type="radio" name="group" :checked="index === 0" :value="group.id" :id="'group_' + index" v-model="selectedProductGroup"  />
                                <label :for="'group_' + index" class=" rounded-md peer-checked:border-solid peer-checked:border-gray-400 flex cursor-pointer select-none border-2 p-4 pr-20 " for="radio_1">
                                    <div class="ml-2">
                                        <span class="mt-2 font-normal">{{ group.name }}</span>
                                        <p class="text-slate-500 text-sm leading-6">{{ group.description }}</p>
                                        <p class="text-slate-500 font-thin text-xs leading-6">{{ group.subtext }}</p>
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
                    Choose the region where you want to deploy your compute instance, this will determine the physical location of it
                </template>
                <template #form>
                    <div class="grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-4">
                        <div v-for="(location, index) in sortedAvailableLocations" :key="location.id" class="relative">
                            <input class="peer hidden" :id="'location_' + index" type="radio" name="location"
                                   :checked="index === 0" :value="location.id" v-model="selectedLocation" @change="updatePlans(location.id)" />

                            <label :for="'location_' + index" class="rounded-md peer-checked:border-solid peer-checked:border-gray-400 border-2 flex cursor-pointer select-none  p-3 ">
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
                    Choose the desired plan and pricing for your cloud instance
                </template>
                <template #form>
                    <ComputePlanSelector :availablePlans="availablePlans"></ComputePlanSelector>
                </template>
            </CardSection>
            <div class="relative max-w-7xl mx-auto px-3 ">
                <div class="pt-10 flex justify-center">
                    <p class="relative rounded-lg bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                        <span class="hidden md:inline">Need a custom plan? Planning a bulk purchase of 100+ servers?</span>
                        <a href="https://clients.advinservers.com/contact.php"  target="_blank"  class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" /> Contact Us <span aria-hidden="true">&rarr;</span></a>
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
            <div class="relative max-w-7xl mx-auto px-3 pt-10 mb-20">
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <img class="m-1 rounded-lg border-gray-200 border mt-5" src="https://fro-images.b-cdn.net/chrome_IoduAyo89V.png" alt="VPS Panel">
                    </div>
                    <div class="w-full lg:w-5/12 ml-auto">
                        <p class="text-2xl pt-4 pb-3 font-semibold">
                            Easy-to-use Control Panel
                        </p>
                        <p class="text-gray-700">
                            Manage every aspect of your virtual server through our modern and easy-to-use control panel.
                        </p>
                        <ul class="mt-4">
                            <li class="flex items-center">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Power Actions</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Automatic Reinstallation</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">noVNC Console</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Resource Monitoring</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Password Adjustment</span>
                            </li>
                            <li class="flex items-center mt-1">
                                <CheckIcon class="h-6 w-5 flex-none text-black" aria-hidden="true" />
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Quick, modern UI</span>
                            </li>
                        </ul>
                        <p class="mt-6 text-gray-700">
                            Need more information? Read our documentation <a href="https://docs.advinservers.com/guides/controlpanel" target="_blank" class="text-blue-600">here</a>.
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative max-w-7xl mx-auto px-3 pt-10 ">
                <div class="overflow-hidden sm:rounded-lg">
                    <div class="mt-5 mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div class="bg-white mr-5 ml-1 mt-5">
                                    <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/usa.png" alt="usa"/>
                                    </div>
                                    <h4 class="text-xl font-bold mb-2">Buffalo, NY</h4>
                                    <p class="text-gray-700">
                                        Located in ColoCrossing BUF1 datacenter, our Buffalo location offers great connectivity to the East Coast and Canada.
                                    </p>
                                    <p class="text-sm mt-2">Address: 325 Delaware Ave, Buffalo, NY 14202</p>
                                </div>
                            </div>

                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div class="bg-white  mt-5">
                                    <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/usa.png" alt="usa"/>
                                    </div>
                                    <h4 class="text-xl font-bold mb-2">Miami, FL</h4>
                                    <p class="text-gray-700">
                                        Located in ColoHouse MIA1 datacenter, our Miami location offers great connectivity to South America and the Caribbean.
                                    </p>
                                    <p class="text-sm mt-2">Address: 36 NE 2nd St STE 400, Miami, FL 33132</p>
                                </div>
                            </div>

                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div class="bg-white  mt-5">
                                    <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/usa.png" alt="usa"/>
                                    </div>
                                    <h4 class="text-xl font-bold mb-2">Los Angeles, CA</h4>
                                    <p class="text-gray-700">
                                        Located in Evocative LAX2, our Los Angeles location offers great connectivity to Asia and the west coast of the United States.
                                    </p>
                                    <p class="text-sm mt-2">Address: 600 W 7th St, Los Angeles, CA 90017</p>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div class="bg-white mr-5 ml-1 mt-5">
                                    <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/germany.png" alt="usa"/>
                                    </div>
                                    <h4 class="text-xl font-bold mb-2">Nuremberg, DE</h4>
                                    <p class="text-gray-700">
                                        Located in Hetzner Online GmbH, our Germany location offers great connectivity to Europe and the Middle East.
                                    </p>
                                    <p class="text-sm mt-2">Address: Sigmundstraße 135, 90431 Nürnberg</p>
                                </div>
                            </div>

                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div class="bg-white  mt-5">
                                    <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/singapore.png" alt="usa"/>
                                    </div>
                                    <h4 class="text-xl font-bold mb-2">Singapore</h4>
                                    <p class="text-gray-700">
                                        Located in RacksCentral SG1, our Singapore location offers great connectivity to most Asian countries and the Pacific.
                                    </p>
                                    <p class="text-sm mt-2">Address: 23 Tai Seng Dr, Singapore 535224</p>
                                </div>
                            </div>

                            <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div class="bg-white  mt-5">
                                    <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/japan.png" alt="usa"/>
                                    </div>
                                    <h4 class="text-xl font-bold mb-2">Osaka, JP</h4>
                                    <p class="text-gray-700">
                                        Located in Equinix OS1, our Osaka location offers strong network connectivity to Japan and the rest of Asia.
                                    </p>
                                    <p class="text-sm mt-2">Address: 1-26-1 Shinmachi, Nishi-ku, 550-0013
                                        Osaka
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Faq :faq="faq"></Faq>

                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
