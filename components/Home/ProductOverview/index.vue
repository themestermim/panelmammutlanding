<template>
    <!--    lg:py-16-->
    <div class="container c-padding" id="product-overview">
        <h2 class="text-base font-bold lg:text-2xl">محصولات پانل ماموت</h2>
        <div class="mt-6">
            <ul class="flex items-center overflow-auto border-b border-primary-400 max-w-max mb-4 lg:mb-8 list-none gap-4 lg:gap-6 *:flex-none">
                <li :class="{
                    'py-2 px-4 cursor-pointer rounded-t-2xl text-xs transition-all outline-0 lg:text-sm focus:outline-none': true,
                    'bg-white shadow-md text-primary-500': activeProductTab === 'roof',
                    'text-primary-300': activeProductTab !== 'roof',
                }" @click="homeStore.toggleActiveTab('roof')"> ساندویچ پانل سقفی
                </li>
                <li :class="{
                    'py-2 px-4 cursor-pointer rounded-t-2xl text-xs transition-all outline-0 lg:text-sm focus:outline-none': true,
                    'bg-white shadow-md text-primary-500': activeProductTab === 'wall',
                    'text-primary-300': activeProductTab !== 'wall',
                }" @click="homeStore.toggleActiveTab('wall')"> ساندویچ پانل دیواری
                </li>
            </ul>

            <div :class="{
                'grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-x-20 text-primary-50 text-sm font-normal leading-7 relative pb-10 md:pb-0': true,
                'pb-10 md:pb-0': !productShowInfo,
                'pb-0': productShowInfo,
            }">
                <RoofShort v-show="activeProductTab === 'wall'" />
                <WallShort v-show="activeProductTab === 'roof'" />

                <div class="px-4 md:pr-0 md:pl-8">
                    <div class="w-full relative pt-[62.25%]">
                        <video class="absolute top-0 right-0 size-full" controls controlslist="nodownload" preload="metadata" poster="/assets/img/home/products-cover.gif">
                            <source src="/assets/video/products.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {useHome} from "~/store/home/index.js";
import RoofShort from "~/components/Home/ProductOverview/Roof/Short.vue";
import WallShort from "~/components/Home/ProductOverview/Wall/Short.vue";

defineOptions({
    name: "HomeProductOverview",
})

const homeStore = useHome();
const activeProductTab = computed(() => homeStore.activeProductTab);
const productShowInfo = computed(() => homeStore.productShowInfo);
</script>
