<template>
    <div class="c-padding container grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div class="md:order-2 md:flex md:flex-col md:justify-between md:gap-2">
            <div>
                <h2 class="text-base">
                    دنیای ماموت، تولید ایرانی با کیفیت جهانی</h2>
                <p class="text-sm text-primary-200 mt-4 md:mt-3 lg:mt-4 text-justify">
                    دنیای ماموت با تولید انواع محصولات صنعتی سبب ایجاد تغییر و تحول در صنعت ساختمان و حوزه حمل و نقل
                    کالا
                    شده است. دنیای ماموت با بکارگیری بهترین مواد اولیه و بهره از پیشرفته‌ترین تکنولوژی‌ها محصولاتی
                    باکیفیت
                    را تولید می‌نماید و پیش از عرضه، با انجام آزمایشات و تست‌های استاندارد از کارایی آنها اطمینان
                    می‌یابد.
                    تیراژ بالا و حجم وسیع تولیدات موجب شده تا دنیای ماموت در زمره بزرگترین مجموعه‌های صنعتی دنیا جای
                    بگیرد.
                </p>
            </div>
            <div class="flex flex-col gap-4 justify-end md:flex-row lg:gap-6 xl:gap-8">
                <button class="c-btn btn-md btn-secondary-fill order-2 md:order-1">
                    <span>
                        خرید
                        اقساطی
                    </span>
                </button>
                <button class="c-btn btn-md btn-danger-fill">
                    <span>
                        ثبت
                        سفارش </span>
                </button>
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="aspect-video lg:px-4">
                <video class="size-full" controls>
                    <source src="/assets/video/home/video_mammut.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeProductDetailsWithOrder",
})
</script>
