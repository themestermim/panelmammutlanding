<template>
    <div
        class="bg-[url('/assets/img/home/horizontal-pattern.webp')] lg:bg-[url('/assets/img/home/vertical-pattern.webp')] bg-no-repeat bg-left lg:bg-center bg-contain">
        <div class="container py-10 lg:py-20">
            <div
                class="flex flex-col bg-white p-4 pb-0 rounded-[50px] gap-4 lg:flex-row lg:px-8 lg:py-0 lg:items-center lg:relative lg:gap-0 lg:before:content-[''] lg:before:absolute lg:before:h-40 lg:before:left-0 lg:before:right-0 lg:before:bg-white lg:before:rounded-[50%] lg:before:opacity-50 lg:before:blur-xl lg:before:z-[-1] lg:h-36 ">
                <div class="flex gap-3 justify-center lg:flex-col lg:gap-4 lg:flex-none">
                    <h2 class="text-sm font-bold text-primary-500 lg:text-xl xl:text-2xl ml-10 lg:ml-4">
                        قیمت ساندویچ پانل
                    </h2>
                    <span class="text-xs text-primary-300 font-bold lg:text-base">
                        24 ساعته
                    </span>
                </div>
                <div class="xl:ml-16 lg:ml-4">
                    <p class="text-xs text-primary-300">
                        عوامل گوناگونی در تعیین قیمت ساندویچ پانل، کانکس و سایر تولیدات صنعتی و متریال‌های مدرن موثر
                        هستند.
                        برخی
                        از این عوامل در سطح کلان بر روی قیمت تولیدات اثر می‌گذارند و برخی دیگر مرتبط به مشخصات فنی ،
                        مواد
                        اولیه
                        و ویژگی‌های اختصاصی خود کالا هستند. شما میتوانید از طریق لینک روبرو پیش فاکتور آنلاین دریافت
                        نمائید.
                    </p>
                </div>
                <div class="text-center lg:flex-none xl:ml-9 lg:ml-0">
                    <button class="py-2 px-6 rounded-3xl bg-primary-500 text-xs text-white">
                        پیش فاکتور آنلاین
                    </button>
                </div>
                <div class="-mb-5 m-auto lg:flex-none lg:-mt-10 h-24 lg:mb-0 lg:w-60 lg:h-auto">
                        <NuxtImg class="size-full" src="/assets/img/home/invoice.webp" alt="پیش فاکتور آنلاین" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomePricePanel",
})
</script>
