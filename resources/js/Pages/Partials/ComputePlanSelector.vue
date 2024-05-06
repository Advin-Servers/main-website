<template>

    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-md overflow-x-auto">

        <table class="w-full divide-y divide-gray-300">
            <thead class="text-xs text-gray-700 bg-gray-50">
            <tr>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">vCPU Cores</th>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Memory</th>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Storage</th>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Bandwidth</th>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Deployment Time</th>
                <th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Price</th>

                <th scope="col" class="relative py-2 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Purchase</span>
                </th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(plan, index) in availablePlans" :key="plan.id">

                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div class="font-normal text-gray-900">
                        {{ plan.name }}
                    </div>
                </td>
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div class="font-normal text-gray-900">
                        {{ plan.vcpu_cores }} vCPU
                    </div>
                </td>
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div class="font-normal text-gray-900">
                        {{ parseFloat(plan.memory/1000).toFixed(0) }}GB RAM
                    </div>
                </td>
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div class="font-normal text-gray-900">
                        {{ parseFloat(plan.disk).toFixed(0) }}GB NVMe SSD
                    </div>
                </td>
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div class="font-normal text-gray-900">
                        {{ parseFloat(plan.bandwidth).toFixed(0)/1000 }}TB Bandwidth
                    </div>
                </td>
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div :class="{'text-green-500': plan.deployment_time === 'Instant', 'text-amber-500': plan.deployment_time !== 'Instant'}">
                        {{ plan.deployment_time }}
                    </div>
                </td>
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <div class="font-normal text-gray-900">
                        ${{ parseFloat(plan.price) }}/month
                    </div>
                </td>
                <td class='relative pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                    <a v-if="plan.stock" class="text-blue-600 hover:text-blue-900" :href="plan.whmcs_url">Purchase</a>
                    <span v-else class="text-red-600">Out of Stock</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import SectionTitle from "@/Components/SectionTitle.vue";
import SectionBorder from "@/Components/SectionBorder.vue";

export default {
    components: {SectionBorder, SectionTitle},
    props: {
        availablePlans: {
            type: Array
        }
    }
}
</script>
