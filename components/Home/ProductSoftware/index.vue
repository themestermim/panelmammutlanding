<template>
<!--    lg:pt-24-->
    <div class="relative c-padding">
        <svg class="hidden absolute w-[364px] h-[661px] lg:block">
            <use href="#galaxy" />
        </svg>
        <div class="container grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:gap-6 md:items-center">
            <div
                class="relative before:content-[''] before:bottom-0 before:absolute before:w-32 before:h-9 before:bg-white before:blur-3xl before:right-0">
                <h2 class="text-base mb-2 lg:mb-1">
                    نرم افزار طراحی سوله
                </h2>
                <span class="text-sm text-gray-500 mb-4 block lg:mb-9">
                    بصورت سه بعدی
                </span>
                <p class="text-sm text-gray-500 mb-4 lg:mb-16 text-justify">
                    نرم افزار سه بعدی ما به کاربر این امکان را می دهد به راحتی سوله های خود را طراحی و شخصی سازی کند.این
                    ابزار با ارائه مدل های سه بعدی دقیق و امکاناتی بی نظیر بصورت انلاین در اختیار شما عزیزان است.
                </p>
                <a href="https://mammutco-panel.com/online-3d/" target="_blank" class="c-btn btn-secondary-fill btn-md relative z-1 inline-flex">
                    <span>شروع کن !</span>
                </a>
            </div>
            <div>
                <NuxtImg class="w-full h-auto" src="/assets/img/home/product-software.webp" alt="نرم افزار طراحی سوله" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeProductSoftware",
})
</script>
