<template>
    <div class="relative">
        <!-- right squares -->
        <div
            class="hidden lg:block absolute -right-10 top-16 size-46 border border-gray-500 -rotate-[31deg] before:content-[''] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]">
        </div>

        <div class="container">
            <Swiper class="w-full" v-bind="settings">
                <SwiperSlide>
                    <div class="py-6">
                        <h2 class="text-base text-white font-extrabold block text-center">ساندویچ پانل سقفی</h2>

                        <div class="w-44 h-30 mt-4 mx-auto relative">
                            <NuxtImg src="/assets/img/home/roof-panel.webp" class="size-full object-contain" alt="ساندویچ پانل سقفی" />

                            <div></div>
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
}
</script>