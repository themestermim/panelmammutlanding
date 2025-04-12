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
                <button type="button" role="button" @click="openSheet" aria-label="منو"
                        class="text-white cursor-pointer md:hidden">
                    <svg class="size-5">
                        <use :href="isMenuOpen ? '#svg-close' : '#svg-hamburger-menu'"/>
                    </svg>
                </button>
                <!-- phone number -->
                <a href="tel:02145510"
                   class="text-white cursor-pointer md:h-10 md:rounded-3xl md:bg-primary-50 md:px-4 md:flex md:items-center md:gap-2 md:text-primary-500 lg:gap-4 lg:px-6 lg:tracking-wider">
                    <span class="hidden md:block text-sm font-semibold lg:text-base lg:font-bold">021-45510</span>
                    <svg class="size-5">
                        <use href="#svg-call"/>
                    </svg>
                </a>
            </div>
            <!-- logo -->
            <div class="flex items-center justify-end h-full order-2 md:order-1 md:justify-start">
                <NuxtImg src="/assets/img/shared/logo.png" alt="ماموت ساختمان" :class="{
                    'transition-all': true,
                    'h-8 md:h-10 lg:h-12 xl:h-14': !minimizeHeader,
                    'h-7 md:h-9 lg:h-11 xl:h-12': minimizeHeader,
                }"/>
            </div>
            <!-- desktop navbar -->
            <div class="hidden md:flex col-span-3 order-2 md:justify-center md:h-full md:items-center md:gap-2">
                <Nav/>
            </div>
        </div>

        <div
            v-if="isOpen"
            class="fixed inset-0 bg-black bg-opacity-50 z-[4] transition-opacity"
            @click="closeSheet">
        </div>

        <div
            ref="sheet"
            class="fixed bottom-0 top-auto right-0 w-full bg-gray-50 px-4 pb-4 z-[6] md:hidden h-56 rounded-t-2xl overflow-hidden transition-all ease-in-out"
            :style="sheetStyle"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
        >
            <!-- نوار بالا -->
            <div class="w-full h-6 flex justify-center items-center cursor-grab">
                <div class="w-10 h-1.5 bg-gray-300 rounded-full"></div>
            </div>

            <div class="max-h-48 overflow-auto">
                <Nav/>
            </div>
        </div>

<!--        <HLTransitionRoot-->
<!--            :show="isMenuOpen"-->
<!--            as="template"-->
<!--        >-->
<!--            <HLDialog @close="layoutStore.closeMenu">-->
<!--                <HLTransitionChild-->
<!--                    enter="transition-all ease-in-out duration-300"-->
<!--                    enter-from="translate-y-52"-->
<!--                    enter-to="translate-y-0"-->
<!--                    leave="transition-all ease-in-out duration-300"-->
<!--                    leave-from="translate-y-0"-->
<!--                    leave-to="translate-y-52"-->
<!--                    as="div"-->
<!--                    class="fixed bottom-0 top-auto right-0 w-full bg-gray-50 p-4 z-[5] md:hidden h-52 rounded-t-2xl overflow-auto transition-all ease-in-out"-->
<!--                >-->
<!--                    <HLDialogPanel>-->
<!--                        <Nav/>-->
<!--                    </HLDialogPanel>-->
<!--                </HLTransitionChild>-->
<!--            </HLDialog>-->
<!--        </HLTransitionRoot>-->
    </header>
</template>

<script setup>
import {useLayout} from '~/store/layout';
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





const isOpen = ref(false)
const startY = ref(0)
const currentY = ref(0)
const translateY = ref(0)
const isDragging = ref(false)

const openSheet = () => {
    isOpen.value = true
    translateY.value = 0

    document.documentElement.classList.add('h-full', 'overflow-hidden')
}

const closeSheet = () => {
    isOpen.value = false
    translateY.value = 0

    document.documentElement.classList.remove('h-full', 'overflow-hidden')
}

const onTouchStart = (e) => {
    if (!isOpen.value) return
    isDragging.value = true
    startY.value = e.touches[0].clientY
}

const onTouchMove = (e) => {
    if (!isDragging.value) return
    currentY.value = e.touches[0].clientY
    const delta = currentY.value - startY.value
    if (delta > 0) {
        translateY.value = delta
    }
}

const onTouchEnd = () => {
    isDragging.value = false
    if (translateY.value > 100) {
        closeSheet()
    } else {
        translateY.value = 0
    }
}

// محاسبه style
const sheetStyle = computed(() => {
    const y = isOpen.value ? translateY.value : 1000
    return {
        transform: `translateY(${y}px)`,
    }
})

</script>
