<template>
    <Svgs />
    <Header />
    <main class="min-h-svh">
        <NuxtPage />
    </main>
    <Footer />
</template>

<script setup>
import Header from "~/components/Header/index.vue";
import Footer from "~/components/Footer/index.vue";
import Svgs from "~/components/Header/Svg.vue";
import {useId} from "vue";
import { provideUseId } from '@headlessui/vue';

defineOptions({
    name: "defaultLayouts",
});

provideUseId(() => useId());
</script>