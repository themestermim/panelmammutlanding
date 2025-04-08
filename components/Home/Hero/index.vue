<template>
    <div class="relative lg:overflow-hidden">
        <!-- right squares -->
        <div
            :class="{
                'hidden lg:block absolute transition-all duration-2000 ease-slide size-46 border border-gray-500 before:content-[\'\'] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]': true,
                'top-20 -right-10 -rotate-[31deg]': activeSlideIndex % 2 == 1,
                'top-80 lg:top-96 xl:top-116 -right-16 -rotate-[76deg]': activeSlideIndex % 2 == 0,
            }">
        </div>

        <div
            class="w-full max-w-3xl px-4 py-10 lg:py-16 xl:py-28 mx-auto home-hero-swiper-container relative before:absolute before:content-[''] before:w-88 before:h-72 before:bg-[url('/assets/img/home/squares.webp')] before:bg-no-repeat before:bg-contain before:right-1/2 before:translate-x-1/2 before:top-24 sm:before:w-96 sm:before:h-80 sm:before:top-28 lg:before:w-[38rem] lg:before:h-[28rem] lg:before:top-52 xl:before:w-[42rem] xl:before:h-[28rem] xl:before:top-80 after:absolute after:content-[''] after:w-40 after:h-36 after:rounded-full after:bg-primary-400 after:top-16 after:right-1/2 after:translate-x-1/2 after:blur-3xl lg:after:blur-[4rem] sm:after:w-52 sm:after:h-44 lg:after:top-40 lg:after:w-72 lg:after:h-56 xl:after:w-96 xl:after:h-76 xl:after:top-56 xl:after:blur-5xl">
            <div class="h-108 lg:h-136 xl:h-152 overflow-visible">
                <Swiper @slideChangeTransitionStart="onSlideChange" class="w-full home-hero-swiper h-full" v-bind="settings" :modules="[SwiperPagination, SwiperAutoplay, SwiperEffectFade]">
                    <SwiperSlide :class="{
                        'hero-slide-1-start': activeSlideIndex == 0,
                        'hero-slide-1-end': previousSlideIndex == 0 && activeSlideIndex != 0,
                        }">
                        <div class="py-6 hero-slide-1-start">
                            <h2 class="hs-title text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl text-white font-extrabold block text-center">ساندویچ پانل سقفی</h2>
                            <div class="w-44 h-30 sm:w-56 sm:h-36 lg:w-88 lg:h-60 xl:w-116 xl:h-76 mt-4 sm:mt-6 lg:mt-4 mx-auto relative">
                                <div class="hs-image w-44 h-30 sm:w-56 sm:h-36 lg:w-88 lg:h-60 xl:w-116 xl:h-76">
                                    <NuxtImg src="/assets/img/home/roof-panel.webp" class="size-full object-contain"
                                        alt="ساندویچ پانل سقفی" />
                                </div>
                                <!-- right text -->
                                <div class="hs-right-text absolute top-14 -right-6 lg:top-28 xl:top-40 lg:-right-8">
                                    <span
                                        class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-left-5 before:-top-2 lg:before:w-24 lg:before:h-10 lg:before:-top-3 lg:before:-left-[52px] before:bg-[url('/assets/img/home/peykan-right.png')] before:bg-no-repeat before:bg-contain">
                                        ضد حریق </span>
                                    <svg class="hs-right-square size-2.5 sm:size-3 absolute -bottom-1.5 -left-7 sm:-left-8 lg:size-8 lg:-bottom-12 lg:-left-[76px] rotate-45">
                                        <use href="#square-with-child" />
                                    </svg>
                                </div>
    
                                <!-- left text -->
                                <div class="hs-left-text absolute top-1.5 -left-16 lg:top-10 lg:-left-20 xl:top-16 xl:-left-24">
                                    <span
                                        class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-right-6 before:-top-2 lg:before:-top-3.5 lg:before:-right-14 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-left.png')] before:bg-no-repeat before:bg-contain">
                                        مقاوم در برابر ضربه </span>
                                    <svg class="hs-left-square size-2.5 sm:size-3 absolute -bottom-2 -right-[34px] rotate-[30deg] lg:size-8 lg:rotate-45 lg:-bottom-9 lg:-right-20">
                                        <use href="#square-with-child" />
                                    </svg>
                                </div>
    
                                <!-- shadow -->
                                <div class="hs-image-shadow absolute -bottom-4 right-1/2 translate-x-1/2 w-full h-1.5 bg-primary-900 blur-[3px]"
                                    style="border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;"></div>
                            </div>
    
                            <div class="hs-description mt-14 lg:mt-24 text-gray-400 text-sm font-normal text-justify sm:px-12">
                                <p>
                                    از انواع <NuxtLink to="/" class="underline underline-offset-4 cursor-pointer">ساندویچ
                                        پانل</NuxtLink> که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد،پانل سقفی
                                    بوده و به دلیل ساختار کامپوزیتی خود توانسته جایگزین مناسبی برای مصالح سنتی باشد.
                                    ویژگی‌های این متریال و مزایای متعدد آن‌ها سبب شده تا با افزایش دوام ساختمان و عایق‌سازی
                                    بنا، یک سقف با عملکردی چندگانه در اختیار افراد قرار گیرد.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide :class="{
                        'hero-slide-2-start': activeSlideIndex == 1,
                        'hero-slide-2-end': previousSlideIndex == 1 && activeSlideIndex != 1
                    }">
                        <div class="py-6">
                            <h2 class="hs-title text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl text-white font-extrabold block text-center">ساندویچ پانل دیواری</h2>
    
                            <div class="w-44 h-30 sm:w-56 sm:h-36 lg:w-88 lg:h-60 xl:w-116 xl:h-76 mt-4 sm:mt-6 lg:mt-4 mx-auto relative">
                                <div class="hs-image w-44 h-30 sm:w-56 sm:h-36 lg:w-88 lg:h-60 xl:w-116 xl:h-76">
                                    <NuxtImg src="/assets/img/home/wall-panel.webp" class="size-full object-contain"
                                        alt="ساندویچ پانل دیواری" />
                                </div>
    
                                <!-- right text -->
                                <div class="hs-right-text absolute top-12 -right-8 sm:top-10 sm:-right-12 lg:top-16 lg:-right-20 xl:top-24 xl:-right-12">
                                    <span
                                        class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-left-5 before:-top-2 lg:before:w-24 lg:before:h-10 lg:before:-top-3 lg:before:-left-[52px] before:bg-[url('/assets/img/home/peykan-right.png')] before:bg-no-repeat before:bg-contain">
                                        عایق صوتی </span>
                                    <svg class="hs-right-square size-2.5 sm:size-3 absolute -bottom-1.5 -left-7 sm:-left-8 lg:size-8 lg:-bottom-12 lg:-left-[76px] rotate-[20deg]">
                                        <use href="#square-with-child" />
                                    </svg>
                                </div>
    
                                <!-- left text -->
                                <div class="hs-left-text absolute top-1 -left-20 sm:-left-24 sm:top-2 lg:top-4 lg:-left-40 xl:top-7">
                                    <span
                                        class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-right-6 before:-top-2 lg:before:-top-3.5 lg:before:-right-14 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-left.png')] before:bg-no-repeat before:bg-contain">
                                        مقاوم در برابر رطوبت </span>
                                    <svg class="hs-left-square size-2.5 sm:size-3 absolute -bottom-2 -right-[34px] rotate-45 lg:size-8 lg:-bottom-9 lg:-right-20">
                                        <use href="#square-with-child" />
                                    </svg>
                                </div>
                            </div>
    
                            <div class="hs-description mt-14 lg:mt-24 text-gray-400 text-sm font-normal text-justify sm:px-12">
                                <p>
                                    یکی از بهترین انتخاب‌ها در بین مصالح ساختمانی مختلف جهت ساخت انواع دیوار و اجرای نمای سازه‌ها، ساندویچ پانل دیواری است.شاید در نگاه اول ساختار ترکیبی پانل‌های دیواری طراحی ساده‌ای داشته باشد، ولی امکانات جدیدی را در اختیار معماران قرار داده است. بهبود عملکرد مقطع چه از نظر سازه‌ای و چه از لحاظ نفوذپذیری از مزیت‌های لایه‌ای بودن این پنل‌ها می‌باشد. 
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <!-- left squares -->
        <div
            :class="{
                'hidden lg:block absolute transition-all duration-2000 ease-slide -left-10 size-46 border border-gray-500 before:content-[\'\'] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]': true,
                'top-10 -rotate-[31deg]': activeSlideIndex % 2 == 0,
                'top-64 lg:top-80 xl:top-100 rotate-[14deg]': activeSlideIndex % 2 == 1,
            }">
        </div>
    </div>
</template>

<script setup>
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

const activeSlideIndex = ref(0);
const previousSlideIndex = ref(null);

const onSlideChange = (swiper) => {
//   activeSlideIndex.value = swiper.realIndex;
//   previousSlideIndex.value = swiper.previousIndex;

  const realCurrent = swiper.realIndex;
    const realPrevious = swiper.slides[swiper.previousIndex]?.getAttribute('data-swiper-slide-index') || 0;
    
    activeSlideIndex.value = realCurrent
    previousSlideIndex.value = parseInt(realPrevious)
}

</script>