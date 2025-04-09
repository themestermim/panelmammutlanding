<template>
    <div class="lg:mt-28 lg:mb-14">
        <div class="container py-6 lg:relative">
            <div class="pt-6 px-4 bg-white rounded-[50px] overflow-hidden lg:flex flex-row lg:py-0 lg:items-center lg:overflow-visible">
                <div class="flex flex-row relative gap-4 justify-center lg:relative lg:flex-none xl:ml-12 lg:ml-4">
                    <svg class="w-14 h-14 absolute right-0 lg:relative lg:h-16 lg:w-16">
                        <use href="#headphone"/>
                    </svg>
                    <div>
                        <span class="text-primary-300 text-sm font-bold lg:text-base">
                            تماس با کارشناسان
                        </span>
                        <h2 class="text-primary-500 text-xl font-bold mt-2 mb-4 lg:text-4xl">پانل ماموت</h2>
                    </div>
                </div>
                <div class="xl:ml-16 lg:ml-5">
                    <p class="text-primary-300 text-xs">
                        شرکت ماموت با در اختیار داشتن نیروهای مجرب و متعهد و با تکیه برداشتن دانش فنی بالا توانسته
                        گام‌های
                        بسیار بلندی در جهت رشد و تعالی صنعت کشور و بهینه ‌سازی مصرف انرژی برداشته و به عنوان یکی از
                        پیشتـازان ساخت ساندویچ پانل و سازه‌های سبک در ایران وخـاورمیانه باشد.
                    </p>
                </div>
                <div class="flex flex-row justify-between mt-[30px] lg:flex-none xl:ml-8 lg:ml-3 lg:mt-0 lg:flex-col lg:gap-5 lg:items-start lg:py-6">
                    <a class="py-2 px-6 bg-primary-50 text-xs rounded-3xl text-primary-500 font-semibold order-2 lg:order-1">
                        تماس با ما
                    </a>
                    <a class="flex gap-4 items-center lg:order-2" href="tel:02145510">
                        <div class="bg-primary-500 rounded-2xl inline-block	p-2.5 relative before:content-[''] before:w-8 before:h-[1px] before:absolute before:-bottom-1.5 before:right-1 before:left-0 before:bg-gray-400 before:rounded-[50%]">
                            <svg class="h-5 w-5">
                                <use href="#phone" />
                            </svg>
                        </div>
                        <span dir="ltr" class="text-base text-primary-400 font-bold">
                        021 - 45510
                    </span>
                    </a>
                </div>
                <div class="mt-[18px] lg:mt-0 lg:relative lg:h-36 lg:w-56 lg:flex-none xl:ml-16 lg:ml-3 flex justify-center max-h-44">
                    <NuxtImg class="h-full lg:absolute lg:h-[169px] lg:w-auto lg:bottom-[-1px]" src="/assets/img/home/contactus.webp" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeContactPanel",
})
</script>
