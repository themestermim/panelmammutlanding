<template>
    <Header />
    <NuxtPage />
    <Footer />
</template>

<script setup>
import Header from "~/components/Header/index.vue";
import Footer from "~/components/Footer/index.vue";
import {useId} from "vue";
import { provideUseId } from '@headlessui/vue';

defineOptions({
    name: "defaultLayouts",
});

provideUseId(() => useId());
</script>