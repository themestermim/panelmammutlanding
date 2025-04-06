<template>
    <div class="container grid grid-cols-1 gap-4 py-6 lg:grid-cols-2 lg:gap-6">
        <div class="lg:order-2 lg:flex lg:flex-col lg:justify-between">
            <div>
                <h2 class="text-base mb-4">
                    دنیای ماموت، تولید ایرانی با کیفیت جهانی</h2>
                <p class="text-sm text-primary-200 mb-4 text-justify">
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
            <div class="cta-buttons flex gap-8 justify-end">
                <button
                    class="hidden lg:inline-block text-xs text-primary-500 bg-gray-50 rounded-3xl px-6 py-2.5 font-semibold">خرید
                    اقساطی</button>
                <button
                    class="hidden lg:inline-block text-xs text-white bg-secondary-500 rounded-3xl px-6 py-2.5 font-semibold">ثبت
                    سفارش</button>
            </div>
        </div>
        <div class="max-h-80 px-4">
            <video class="w-full h-full" controls>
                <source src="/assets/video/home/video_mammut.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeProductDetailsWithOrder",
})
</script>
