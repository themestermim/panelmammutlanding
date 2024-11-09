<template>
    <NuxtPage />
</template>

<script setup>
import {useId} from "vue";
import { provideUseId } from '@headlessui/vue';

defineOptions({
    name: "defaultLayouts",
});

provideUseId(() => useId());
</script>