<template>
    <nav class="flex flex-col gap-2 md:contents">
        <div class="md:relative md:h-full md:px-2 lg:px-4" @mouseleave="closeDropdown">
            <div @click="layoutStore.toggleDropDown" @mouseenter="openDropdown" class="flex items-center justify-between text-primary-800 cursor-pointer py-1 md:py-0 md:text-white md:justify-start md:gap-2 md:h-full">
                <span class="text-xs md:text-sm font-semibold leading-6">محصولات</span>
                <svg :class="{
                    'size-4 transition-all': true,
                    'rotate-0': isDropdownOpen,
                    'rotate-180': !isDropdownOpen,
                }">
                    <use href="#svg-arrow-up" />
                </svg>
            </div>
            <ul :class="{
                'overflow-hidden transition-all md:rounded-lg pr-4 flex flex-col gap-1 md:absolute md:top-16 md:right-0 md:pr-0 md:w-40 md:bg-primary-900 md:gap-0 md:drop-shadow-[0_6px_8px_rgba(255,255,255,0.1)]': true,
                'max-h-40 mt-1 md:mt-0': isDropdownOpen,
                'max-h-0 mt-0': !isDropdownOpen,
            }">
                <li>
                    <NuxtLink to="/"
                        class="block text-primary-400 hover:text-primary-500 text-xs md:text-xs font-semibold cursor-pointer py-1 md:py-2 md:px-4 md:text-primary-200 md:hover:text-white md:transition-all">
                        ساندویچ پانل سقفی </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/"
                        class="block text-primary-400 hover:text-primary-500 text-xs md:text-xs font-semibold cursor-pointer py-1 md:py-2 md:px-4 md:text-primary-200 md:hover:text-white md:transition-all">
                        ساندویچ پانل دیواری </NuxtLink>
                </li>
            </ul>
        </div>
        <NuxtLink to="#" class="text-primary-800 py-1 md:py-0 text-xs md:text-sm font-semibold leading-6 md:text-white md:px-2 lg:px-4"> هزینه اعتباری </NuxtLink>
        <NuxtLink to="#" class="text-primary-800 py-1 md:py-0 text-xs md:text-sm font-semibold leading-6 md:text-white md:px-2 lg:px-4"> بلاگ </NuxtLink>
        <NuxtLink to="#" class="text-primary-800 py-1 md:py-0 text-xs md:text-sm font-semibold leading-6 md:text-white md:px-2 lg:px-4"> درباره ما </NuxtLink>
    </nav>
</template>

<script setup>
import { useLayout } from '~/store/layout';

defineOptions({
    name: "layoutsHeaderNav",
});

const layoutStore = useLayout();
const isDropdownOpen = computed(() => layoutStore.isMenuDropdownOpen);

const openDropdown = () => {
    if(window.innerWidth >= 768) {
        layoutStore.openDropDown();
    }
}

const closeDropdown = () => {
    if(window.innerWidth >= 768) {
        layoutStore.closeDropDown();
    }
}
</script>