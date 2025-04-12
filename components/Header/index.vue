<template>
    <header :class="{
        'sticky top-0 transition-all z-10 bg-primary-900': true,
    }">
        <div :class="{
            'container grid grid-cols-2 md:grid-cols-5 transition-all': true,
            'h-14 md:h-16 lg:h-20': !minimizeHeader,
            'h-12 md:h-14 lg:h-16': minimizeHeader,
        }">
            <!-- mobile menu & phone -->
            <div class="flex items-center gap-8 order-1 md:order-3 md:justify-end">
                <button type="button" role="button" @click="layoutStore.toggleMenu" aria-label="منو" class="text-white cursor-pointer md:hidden">
                    <svg class="size-5">
                        <use :href="isMenuOpen ? '#svg-close' : '#svg-hamburger-menu'" />
                    </svg>
                </button>
                <!-- phone number -->
                <a href="tel:02145510"
                    class="text-white cursor-pointer md:h-10 md:rounded-3xl md:bg-primary-50 md:px-4 md:flex md:items-center md:gap-2 md:text-primary-500 lg:gap-4 lg:px-6 lg:tracking-wider">
                    <span class="hidden md:block text-sm font-semibold">021-45510</span>
                    <svg class="size-5">
                        <use href="#svg-call" />
                    </svg>
                </a>
            </div>
            <!-- logo -->
            <div class="flex items-center justify-end h-full order-2 md:order-1 md:justify-start">
                <NuxtImg src="/assets/img/shared/logo.png" alt="ماموت ساختمان" class="h-8 md:h-10 lg:h-12 xl:h-14" />
            </div>
            <!-- desktop navbar -->
            <div class="hidden md:flex col-span-3 order-2 md:justify-center md:h-full md:items-center md:gap-2">
                <Nav />
            </div>
        </div>

        <!-- mobile navbar -->
        <Transition name="fade">
            <div v-if="isMenuOpen" :class="{
                'fixed bottom-0 top-auto right-0 w-full bg-gray-50 p-4 md:hidden h-52': true,
            }">
                <Nav />
            </div>
        </Transition>
    </header>
</template>

<script setup>
import { useLayout } from '~/store/layout';
import Nav from "./Nav.vue";

defineOptions({
    name: "layoutsHeader",
});

const layoutStore = useLayout();
const isMenuOpen = computed(() => layoutStore.isMenuOpen);
const minimizeHeader = ref(false);
const ticking = ref(false);
const SCROLL_THRESHOLD = 200;
const BUFFER = 10;

const handleScroll = () => {
    const scrollY = window.scrollY;

    // console.log(window.scrollY)

    if (!minimizeHeader.value && scrollY > SCROLL_THRESHOLD + BUFFER) {
        minimizeHeader.value = true;
    } else if (minimizeHeader.value && scrollY < SCROLL_THRESHOLD - BUFFER) {
        minimizeHeader.value = false;
    }
};

const onScroll = () => {
    if (!ticking.value) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking.value = false;
        });
        ticking.value = true;
    }
};

onMounted(() => {
    window.addEventListener('resize', () => {
        layoutStore.closeMenu();
    })

    handleScroll(); // بررسی اولیه
    window.addEventListener('scroll', onScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>