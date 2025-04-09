<template>
    <footer class="text-white py-6">
        <div class="container flex flex-col items-center gap-6 lg:flex-row justify-between">
            <div>
                <NuxtImg src="/assets/img/shared/logo.png" alt="ماموت ساختمان" />
            </div>
            <div class="w-full">
                <ul class="grid grid-cols-2 gap-4">
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
                <span class="text-xs text-primary-50 font-semibold block text-center mb-3">
                    با ما همراه باشید ...
                </span>
            <ul class="flex gap-6">
                <li>
                    <a href="#">
                        <svg class="size-5">
                            <use href="#telegram" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="size-5">
                            <use href="#whatsapp" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="size-5">
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