<template>
    <div class="flex flex-col gap-6 md:pt-4">
        <p class="text-sm text-primary-50 text-justify">
            از انواع ساندویچ پانل که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد، پانل
            سقفی
            بوده
            و به
            دلیل ساختار کامپوزیتی خود توانسته جایگزین مناسبی برای مصالح سنتی باشد. ویژگی‌های این
            متریال
            و
            مزایای
            متعدد آن‌ها سبب شده تا با افزایش دوام ساختمان و عایق‌سازی بنا، یک سقف با عملکردی چندگانه
            در
            اختیار
            افراد قرار گیرد. پانل‌های سقفی به عنوان متریالی صنعتی و مدرن جهت اجرا در پوشش سقف
            سازه‌هایی
            چون
            سوله
            صنعتی، ساختمان‌های مسکونی، انبارها و… به کار رفته و عموما از دو دسته مواد برای ساختار آن
            استفاده
            می‌شود که شامل مواد عایق برای هسته مرکزی و ورق‌هایی مقاوم برای لایه‌های جانبی می‌شود.  
        </p>

        <a href="https://mammutco-panel.com/sandwich-panel/wall/" target="_blank"
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
    name: "HomeProductOverviewWallShort",
})

const homeStore = useHome();
const productShowInfo = computed(() => homeStore.productShowInfo);
</script>