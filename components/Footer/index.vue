<template>
    <footer
        class="text-white py-6 relative  before:content-[''] before:absolute before:-right-16 before:-bottom-20 before:w-40 before:h-32 before:bg-primary-200 before:blur-4xl overflow-hidden lg:before:w-80 lg:before:h-28	lg:before:-right-5 lg:before:-bottom-36 lg:py-10 xl:before:right-24">
        <div class="container grid grid-cols-1 items-center gap-6 lg:flex-row lg:grid-cols-3">
            <div>
                <NuxtImg class="m-auto lg:m-0 w-36" src="/assets/img/shared/logo.png" alt="ماموت ساختمان" />
            </div>
            <div class="w-full">
                <ul class="grid grid-cols-2 gap-4 lg:gap-2.5">
                    <li class="text-xs text-primary-200">
                        ساندویچ پانل سقفی
                    </li>
                    <li class="text-xs text-primary-200">
                        ساندویچ پانل دیواری
                    </li>
                    <li class="text-xs text-primary-200">
                        خرید اعتباری
                    </li>
                    <li class="text-xs text-primary-200">
                        درباره ی ما
                    </li>
                    <li class="text-xs text-primary-200">
                        بلاگ
                    </li>
                    <li class="text-xs text-primary-200">
                        پیش فاکتور آنلاین
                    </li>
                </ul>
            </div>
            <div>
                <span class="text-xs text-primary-50 font-semibold block text-center mb-3 lg:mb-4">
                    با ما همراه باشید ...
                </span>
                <ul class="flex gap-6 justify-center">
                    <li>
                        <a href="#">
                            <svg class="size-5 opacity-50 hover:opacity-100 transition-opacity duration-300">
                                <use href="#telegram" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg class="size-5 opacity-50 hover:opacity-100 transition-opacity duration-300">
                                <use href="#whatsapp" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg class="size-5 opacity-50 hover:opacity-100 transition-opacity duration-300">
                                <use href="#linkedin" />
                            </svg>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineOptions({
    name: "layoutsFooter",
});
</script>