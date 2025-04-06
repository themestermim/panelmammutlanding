<template>
    <div class="container flex flex-col gap-6">
        <h2 class="text-base font-bold lg:text-2xl">محصولات پانل ماموت</h2>

        <HLTabGroup as="div">
            <HLTabList as="div" class="flex">
                <HLTab v-slot="{ selected }" as="template">
                    <button :class="{
                        'py-2 px-4 text-xs ml-4 transition-all duration-200': true,
                        'bg-white rounded-t-2xl shadow-md text-primary-500': selected,
                        'bg-primary-500 text-gray-500': !selected
                    }">
                        سsxsاندویچ پانل دیواری
                    </button>
                </HLTab>
                <HLTab v-slot="{ selected }" as="template">
                    <button :class="{
                        'py-2 px-4 text-xs ml-4 transition-all duration-200': true,
                        'bg-white rounded-t-2xl shadow-md text-primary-500': selected,
                        'bg-primary-500 text-gray-500': !selected
                    }">
                        ساندویچ پانل دیواری
                    </button>

                </HLTab>
            </HLTabList>

            <HLTabPanels as="div">
                <HLTabPanel as="div">
                    از انواع ساندویچ پانل که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد...
                </HLTabPanel>
            </HLTabPanels>
        </HLTabGroup>
    </div>
</template>


<script setup>
defineOptions({
    name: "HomeProductOverview",
})
</script>
