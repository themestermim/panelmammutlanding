<template>
    <div class="py-6 hero-slide-1-start">
        <h2
            class="hs-title text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl text-white font-extrabold block text-center">
            ساندویچ پانل سقفی</h2>
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
                <svg
                    class="hs-right-square size-2.5 sm:size-3 absolute -bottom-1.5 -left-7 sm:-left-8 lg:size-8 lg:-bottom-12 lg:-left-[76px] rotate-45">
                    <use href="#square-with-child" />
                </svg>
            </div>

            <!-- left text -->
            <div class="hs-left-text absolute top-1.5 -left-16 lg:top-10 lg:-left-20 xl:top-16 xl:-left-24">
                <span
                    class="text-primary-50 text-[8px] sm:text-[10px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-right-6 before:-top-2 lg:before:-top-3.5 lg:before:-right-14 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-left.png')] before:bg-no-repeat before:bg-contain">
                    مقاوم در برابر ضربه </span>
                <svg
                    class="hs-left-square size-2.5 sm:size-3 absolute -bottom-2 -right-[34px] rotate-[30deg] lg:size-8 lg:rotate-45 lg:-bottom-9 lg:-right-20">
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
</template>

<script setup>
defineOptions({
    name: "HomeHeroSlide1",
})
</script>