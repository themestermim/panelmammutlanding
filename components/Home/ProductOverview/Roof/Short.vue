<template>
    <div class="flex flex-col gap-6 md:pt-4">
        <p class="text-sm text-primary-50 text-justify">
            ساندویچ پانل‌ها سهم بزرگی در صنعت ساختمان سازی دارند. کاربرد این مصالح در سازه‌هایی که
            نیاز به مقاومت بالا و وزن کم باشد، بیشتر مشخص می‌شود. از آنجا که دیوارها بخش‌های مهمی در
            یک ساختمان هستند، نحوه درست ساخت آن‌ها می‌تواند عملکرد سازه را به شکل قابل توجهی بهبود
            دهد. کاربرد ساندویچ پانل از زمان تولید تا به امروز در سازه‌های متعددی بوده و مورد توجه
            سازندگان و مهندسان زیادی قرار گرفته است.

            شاید در نگاه اول ساختار ترکیبی پانل‌های دیواری طراحی ساده‌ای داشته باشد، ولی امکانات
            جدیدی را در اختیار معماران قرار داده است. بهبود عملکرد مقطع چه از نظر سازه‌ای و چه از
            لحاظ نفوذپذیری از مزیت‌های لایه‌ای بودن این پنل‌ها می‌باشد.
        </p>

        <a href="https://mammutco-panel.com/sandwich-panel/roof/" target="_blank"
            class="absolute bottom-0 right-0 text-secondary-500 text-xs max-w-max flex items-center gap-2 md:static"
            type="button" aria-label="مشاهده بیشتر">
            مشاهده بیشتر
            <svg class="w-4	h-4 rotate-90">
                <use href="#down"/>
            </svg>
        </a>
    </div>
</template>

<script setup>
import {useHome} from "~/store/home/index.js";

defineOptions({
    name: "HomeProductOverviewRoofShort",
})

const homeStore = useHome();
const productShowInfo = computed(() => homeStore.productShowInfo);
</script>