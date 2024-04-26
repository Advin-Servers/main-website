<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'block py-2 px-3 text-white rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white'
        : 'block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white';
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
