<template>
    <div class="py-6">
        <h2
            class="hs-title text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl text-white font-extrabold block text-center">
            ساندویچ پانل دیواری</h2>

        <div class="w-44 h-30 sm:w-56 sm:h-36 lg:w-88 lg:h-60 xl:w-116 xl:h-76 mt-4 sm:mt-6 lg:mt-4 mx-auto relative">
            <div class="hs-image translate-y-10 w-44 h-30 sm:w-56 sm:h-36 lg:w-88 lg:h-60 xl:w-116 xl:h-76">
                <NuxtImg src="/assets/img/home/wall-panel.webp" class="size-full object-contain"
                    alt="ساندویچ پانل دیواری" />
            </div>

            <!-- right text -->
            <div
                class="hs-right-text absolute top-12 -right-8 sm:top-10 sm:-right-12 lg:top-16 lg:-right-20 xl:top-24 xl:-right-12">
                <span
                    class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-left-5 before:-top-2 lg:before:w-24 lg:before:h-10 lg:before:-top-3 lg:before:-left-[52px] before:bg-[url('/assets/img/home/peykan-right.png')] before:bg-no-repeat before:bg-contain">
                    عایق صوتی </span>
                <svg
                    class="hs-right-square size-2.5 sm:size-3 absolute -bottom-1.5 -left-7 sm:-left-8 lg:size-8 lg:-bottom-12 lg:-left-[76px] rotate-[20deg]">
                    <use href="#square-with-child" />
                </svg>
            </div>

            <!-- left text -->
            <div class="hs-left-text absolute top-1 -left-20 sm:-left-24 sm:top-2 lg:top-4 lg:-left-40 xl:top-7">
                <span
                    class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-right-6 before:-top-2 lg:before:-top-3.5 lg:before:-right-14 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-left.png')] before:bg-no-repeat before:bg-contain">
                    مقاوم در برابر رطوبت </span>
                <svg
                    class="hs-left-square size-2.5 sm:size-3 absolute -bottom-2 -right-[34px] rotate-45 lg:size-8 lg:-bottom-9 lg:-right-20">
                    <use href="#square-with-child" />
                </svg>
            </div>
        </div>

        <div class="hs-description mt-14 lg:mt-24 text-gray-400 text-sm font-normal text-justify sm:px-12">
            <p>
                یکی از بهترین انتخاب‌ها در بین مصالح ساختمانی مختلف جهت ساخت انواع دیوار و اجرای نمای سازه‌ها، ساندویچ
                پانل دیواری است.شاید در نگاه اول ساختار ترکیبی پانل‌های دیواری طراحی ساده‌ای داشته باشد، ولی امکانات
                جدیدی را در اختیار معماران قرار داده است. بهبود عملکرد مقطع چه از نظر سازه‌ای و چه از لحاظ نفوذپذیری از
                مزیت‌های لایه‌ای بودن این پنل‌ها می‌باشد. 
            </p>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeHeroSlide2",
})
</script>