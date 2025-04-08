<template>
    <div class="relative lg:overflow-hidden">
        <!-- right squares -->
        <Transition name="fade">
            <div v-show="activeSlideIndex != null"
                :class="{
                    'hidden lg:block absolute transition-all duration-2000 ease-slide size-46 border border-gray-500 before:content-[\'\'] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]': true,
                    'top-20 -right-10 -rotate-[31deg]': activeSlideIndex % 2 == 1,
                    'top-80 lg:top-96 xl:top-116 -right-16 -rotate-[76deg]': activeSlideIndex % 2 == 0,
                }">
            </div>
        </Transition>

        <div
            class="w-full max-w-3xl px-4 py-10 lg:py-16 xl:py-28 mx-auto home-hero-swiper-container relative before:absolute before:content-[''] before:w-88 before:h-72 before:bg-[url('/assets/img/home/squares.webp')] before:bg-no-repeat before:bg-contain before:right-1/2 before:translate-x-1/2 before:top-24 sm:before:w-96 sm:before:h-80 sm:before:top-28 lg:before:w-[38rem] lg:before:h-[28rem] lg:before:top-52 xl:before:w-[42rem] xl:before:h-[28rem] xl:before:top-80 after:absolute after:content-[''] after:w-40 after:h-36 after:rounded-full after:bg-primary-400 after:top-16 after:right-1/2 after:translate-x-1/2 after:blur-3xl lg:after:blur-[4rem] sm:after:w-52 sm:after:h-44 lg:after:top-40 lg:after:w-72 lg:after:h-56 xl:after:w-96 xl:after:h-76 xl:after:top-56 xl:after:blur-5xl">
            <div class="h-108 lg:h-136 xl:h-152 overflow-visible">
                <Swiper @slideChangeTransitionStart="onSlideChange" class="w-full home-hero-swiper h-full" v-bind="settings" :modules="[SwiperPagination, SwiperAutoplay, SwiperEffectFade]">
                    <SwiperSlide :class="{
                        'hero-slide-1-start': activeSlideIndex == 0,
                        'hero-slide-1-end': previousSlideIndex == 0 && activeSlideIndex != 0,
                        }">
                        <Slide1 />
                    </SwiperSlide>
                    <SwiperSlide :class="{
                        'hero-slide-2-start': activeSlideIndex == 1,
                        'hero-slide-2-end': previousSlideIndex == 1 && activeSlideIndex != 1
                    }">
                        <Slide2 />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="flex flex-col gap-4 mt-8">
                <button type="button" role="button" class="c-btn btn-danger-fill">
                    <span> استعلام قیمت </span>
                </button>
            </div>
        </div>

        <!-- left squares -->
        <Transition name="fade">
            <div v-show="activeSlideIndex != null"
                :class="{
                    'hidden lg:block absolute transition-all duration-2000 ease-slide -left-10 size-46 border border-gray-500 before:content-[\'\'] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]': true,
                    'top-10 -rotate-[31deg]': activeSlideIndex % 2 == 0,
                    'top-64 lg:top-80 xl:top-100 rotate-[14deg]': activeSlideIndex % 2 == 1,
                }">
            </div>
        </Transition>
    </div>
</template>

<script setup>
import Slide1 from "./Slides/Slide1.vue";
import Slide2 from "./Slides/Slide2.vue";

defineOptions({
    name: "HomeHero",
})

const settings = {
    slidesPerView: 1,
    pagination: true,
    direction: 'vertical',
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
}

const activeSlideIndex = ref(null);
const previousSlideIndex = ref(null);

const onSlideChange = (swiper) => {
  const realCurrent = swiper.realIndex;
    const realPrevious = swiper.slides[swiper.previousIndex]?.getAttribute('data-swiper-slide-index') || 0;
    
    activeSlideIndex.value = realCurrent
    previousSlideIndex.value = parseInt(realPrevious)
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>