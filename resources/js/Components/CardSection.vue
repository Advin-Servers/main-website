<script setup>
import { computed, useSlots } from 'vue';
import SectionTitle from './SectionTitle.vue';

defineEmits(['submitted']);

const hasActions = computed(() => !! useSlots().actions);
</script>

<template>
    <div class="md:grid mt-5">

        <div class="relative ml-3">
            <div class="flex items-center  px-4 py-4 bg-gray-50 text-left sm:px-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                <h1 class="text-xl font-semibold"><slot name="title" /></h1>
                <p class="text-gray-900 text-normal ml-5"><slot name="description" /></p>
            </div>
            <form @submit.prevent="$emit('submitted')">
                <div
                    class="bg-white sm:p-6 shadow"
                    :class="hasActions ? 'sm:rounded-bl-md sm:rounded-br-md' : 'sm:rounded-b-md'"
                >
                    <div class="grid gap-6">
                        <slot name="form" />
                    </div>
                </div>
                <div class="mt-3 float-right space-x-2">
                    <slot name="actions" />
                </div>

            </form>
        </div>
    </div>
</template>
