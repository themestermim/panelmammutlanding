<template>
    <div class="relative">
        <!-- right squares -->
        <div
            class="hidden lg:block absolute -right-10 top-16 size-46 border border-gray-500 -rotate-[31deg] before:content-[''] before:absolute before:size-46 before:right-0 before:top-0 before:border before:border-gray-900 before:-rotate-[18deg]">
        </div>

        <div class="container">
            <Swiper class="w-full" v-bind="settings">
                <SwiperSlide>
                    <h2 class="text-base text-white font-extrabold block text-center">ساندویچ پانل سقفی</h2>
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