<template>
    <div class="c-padding" id="contact-us">
        <div class="container lg:relative before:absolute before:content-[''] before:bg-white before:hidden lg:before:block before:h-24 xl:before:h-20 before:w-10/12 before:rounded-full before:top-1/2 before:right-1/2 before:-translate-y-1/2 before:translate-x-1/2 before:blur-2xl">
            <div class="pt-6 px-4 bg-white rounded-[50px] overflow-hidden lg:flex flex-row lg:py-6 lg:items-center lg:overflow-visible lg:relative lg:z-[1]">
                <div class="flex relative gap-4 justify-center lg:flex-none xl:ml-12 lg:ml-4">
                    <svg class="w-14 h-14 absolute right-0 lg:relative lg:h-16 lg:w-16">
                        <use href="#headphone"/>
                    </svg>
                    <div>
                        <span class="text-primary-300 text-sm font-bold lg:text-base">
                            تماس با کارشناسان
                        </span>
                        <h2 class="text-primary-500 text-xl font-bold mt-2 lg:text-4xl">پانل ماموت</h2>
                    </div>
                </div>
                <div class="mt-4 lg:mt-0 xl:ml-16 lg:ml-5 lg:flex-1">
                    <p class="text-primary-300 text-xs">
                        شرکت ماموت با در اختیار داشتن نیروهای مجرب و متعهد و با تکیه برداشتن دانش فنی بالا توانسته
                        گام‌های
                        بسیار بلندی در جهت رشد و تعالی صنعت کشور و بهینه ‌سازی مصرف انرژی برداشته و به عنوان یکی از
                        پیشتـازان ساخت ساندویچ پانل و سازه‌های سبک در ایران وخـاورمیانه باشد.
                    </p>
                </div>
                <div class="relative pb-48 flex items-center justify-between md:flex-col-reverse md:items-start md:gap-3 mt-8 md:mt-4 md:pb-24 lg:flex-1 lg:mt-0 lg:pb-0">
                    <a class="flex gap-4 items-center" href="tel:02145510">
                        <div class="bg-primary-500 rounded-2xl inline-block	p-2.5 relative before:content-[''] before:h-px before:absolute before:-bottom-1.5 before:left-0 before:w-full before:bg-gray-400 before:rounded-[100%]">
                            <svg class="size-5">
                                <use href="#phone" />
                            </svg>
                        </div>
                        <span dir="ltr" class="text-base text-primary-400 font-bold">
                            021 - 45510
                        </span>
                    </a>
                    <div class="py-2 px-6 bg-primary-50 text-xs rounded-3xl text-primary-500 font-semibold">
                        تماس با ما
                    </div>

                    <!-- sellers image -->
                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-max md:left-10 md:translate-x-0 lg:bottom-[-34px] lg:left-8 xl:-bottom-6 xl:left-12">
                        <NuxtImg class="h-44 w-auto lg:h-32 xl:h-40" draggable="false" src="/assets/img/home/contactus.webp" />
                    </div>
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
