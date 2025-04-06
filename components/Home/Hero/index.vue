<template>
    <div class="relative">
        <!-- right squares -->
        <div
            class="hidden lg:block absolute -right-10 top-16 size-46 border border-gray-500 -rotate-[31deg] before:content-[''] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]">
        </div>

        <div
            class="container relative before:absolute before:content-[''] before:w-88 before:h-72 before:bg-[url('/assets/img/home/squares.webp')] before:bg-no-repeat before:bg-contain before:right-1/2 before:translate-x-1/2 before:top-24 after:absolute after:content-[''] after:w-40 after:h-36 after:rounded-full after:bg-primary-400 after:top-16 after:right-1/2 after:translate-x-1/2 after:blur-3xl">
            <Swiper class="w-full" v-bind="settings" :modules="[SwiperPagination]">
                <SwiperSlide>
                    <div class="py-6">
                        <h2 class="text-base text-white font-extrabold block text-center">ساندویچ پانل سقفی</h2>

                        <div class="w-44 h-30 mt-4 mx-auto relative">
                            <NuxtImg src="/assets/img/home/roof-panel.webp" class="size-full object-contain"
                                alt="ساندویچ پانل سقفی" />

                            <!-- right text -->
                            <div class="absolute top-14 -right-6">
                                <span
                                    class="text-primary-50 text-[8px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-left-5 before:-top-2 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-right.png')] before:bg-no-repeat before:bg-contain">
                                    ضد حریق </span>
                                <svg class="size-4 -translate-x-12 -translate-y-1">
                                    <use href="#square-with-child" />
                                </svg>
                            </div>

                            <!-- left text -->
                            <div class="absolute top-2 -left-16">
                                <span
                                    class="text-primary-50 text-[8px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-right-6 before:-top-2 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-left.png')] before:bg-no-repeat before:bg-contain">
                                    مقاوم در برابر ضربه </span>
                                <svg class="size-4 translate-x-9 -translate-y-1.5 rotate-[30deg]">
                                    <use href="#square-with-child" />
                                </svg>
                            </div>

                            <!-- shadow -->
                            <div class="absolute -bottom-4 right-1/2 translate-x-1/2 w-full h-1.5 bg-primary-900 blur-[3px]" style="border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;"></div>
                        </div>

                        <div class="mt-14 text-gray-400 text-sm font-normal text-justify">
                            <p>
                                از انواع <NuxtLink to="/" class="underline underline-offset-4">ساندویچ پانل</NuxtLink> که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد،پانل سقفی بوده و به دلیل ساختار کامپوزیتی خود توانسته جایگزین مناسبی برای مصالح سنتی باشد. ویژگی‌های این متریال و مزایای متعدد آن‌ها سبب شده تا با افزایش دوام ساختمان و عایق‌سازی بنا، یک سقف با عملکردی چندگانه در اختیار افراد قرار گیرد. 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="py-6">
                        <h2 class="text-base text-white font-extrabold block text-center">ساندویچ پانل سقفی</h2>

                        <div class="w-44 h-30 mt-4 mx-auto relative">
                            <NuxtImg src="/assets/img/home/roof-panel.webp" class="size-full object-contain"
                                alt="ساندویچ پانل سقفی" />

                            <!-- right text -->
                            <div class="absolute top-14 -right-6">
                                <span
                                    class="text-primary-50 text-[8px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-left-5 before:-top-2 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-right.png')] before:bg-no-repeat before:bg-contain">
                                    ضد حریق </span>
                                <svg class="size-4 -translate-x-12 -translate-y-1">
                                    <use href="#square-with-child" />
                                </svg>
                            </div>

                            <!-- left text -->
                            <div class="absolute top-2 -left-16">
                                <span
                                    class="text-primary-50 text-[8px] lg:text-sm relative before:absolute before:content-[''] before:w-12 before:h-6 before:-right-6 before:-top-2 lg:before:w-24 lg:before:h-10 before:bg-[url('/assets/img/home/peykan-left.png')] before:bg-no-repeat before:bg-contain">
                                    مقاوم در برابر ضربه </span>
                                <svg class="size-4 translate-x-9 -translate-y-1.5 rotate-[30deg]">
                                    <use href="#square-with-child" />
                                </svg>
                            </div>

                            <!-- shadow -->
                            <div class="absolute -bottom-4 right-1/2 translate-x-1/2 w-full h-1.5 bg-primary-900 blur-[3px]" style="border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;"></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <!-- left squares -->
        <div
            class="hidden lg:block absolute -left-10 top-16 size-46 border border-gray-500 -rotate-[31deg] before:content-[''] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]">
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
}
</script>