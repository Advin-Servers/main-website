<script setup>
import { computed, useSlots } from 'vue';
import SectionTitle from './SectionTitle.vue';

defineEmits(['submitted']);

const hasActions = computed(() => !! useSlots().actions);
</script>

<template>
    <div class="md:grid mt-5">

        <div class="relative ml-3">
            <div class="flex items-center px-4 pt-4 text-left sm:px-6 sm:rounded-tl-md sm:rounded-tr-md border-t border-l border-r border-gray-300 ">
                <h1 class="text-xl font-semibold"><slot name="title" /></h1>
                <p class="text-gray-900 text-normal ml-5"><slot name="description" /></p>
            </div>
            <form @submit.prevent="$emit('submitted')">
                <div
                    class="bg-white sm:p-6 border-gray-300 border-b border-l border-r"
                    :class="hasActions ? 'sm:rounded-bl-md sm:rounded-br-md' : 'sm:rounded-b-md'"
                >
                    <div class="grid gap-6">
                        <slot name="form" />
                    </div>
                </div>
                <div class="mt-1 float-right space-x-2">
                    <slot name="actions" />
                </div>

            </form>
        </div>
    </div>
</template>
