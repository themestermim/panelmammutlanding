<template>
<!--    lg:py-16-->
    <div class="container c-padding">
        <h2 class="text-base font-bold lg:text-2xl">محصولات پانل ماموت</h2>
        <HLTabGroup as="div" class="mt-6">
            <HLTabList as="div" class="flex max-w-max border-b border-primary-400 mb-4 lg:mb-8">
                <HLTab v-slot="{ selected }" as="template">
                    <button :class="{
                        'py-2 px-4 rounded-t-2xl text-xs ml-4 transition-all outline-0 lg:text-sm': true,
                        'bg-white shadow-md text-primary-500': selected,
                        'text-primary-300': !selected
                    }">
                        ساندویچ پانل سقفی
                    </button>
                </HLTab>
                <HLTab v-slot="{ selected }" as="template">
                    <button :class="{
                        'py-2 px-4 rounded-t-2xl text-xs transition-all outline-0 lg:text-sm': true,
                        'bg-white shadow-md text-primary-500': selected,
                        'text-primary-300': !selected
                    }">
                        ساندویچ پانل دیواری
                    </button>
                </HLTab>
            </HLTabList>

            <HLTabPanels as="div" class="*:grid *:grid-cols-1 *:gap-6 md:*:grid-cols-2 lg:*:gap-x-20 *:text-primary-50 *:text-sm *:font-normal *:leading-7">
                <HLTabPanel as="template">
                    <Roof />
                </HLTabPanel>
                <HLTabPanel as="template">
                    <Wall />
                </HLTabPanel>
            </HLTabPanels>
        </HLTabGroup>
    </div>
</template>


<script setup>
import Roof from "./RoofTab.vue";
import Wall from "./WallTab.vue";

defineOptions({
    name: "HomeProductOverview",
})
</script>
