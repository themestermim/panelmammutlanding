<template>

    <div class="container grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 items-end lg:py-16">
        <div class="flex flex-col gap-6">
            <h2 class="text-base font-bold lg:text-2xl">محصولات پانل ماموت</h2>

            <HLTabGroup as="div">
                <HLTabList as="div" class="flex max-w-max border-b border-primary-400 mb-4 lg:mb-8">
                    <HLTab v-slot="{ selected }" as="template">
                        <button :class="{
                            'py-2 px-4 text-xs ml-4 transition-all outline-0 duration-200 lg:text-sm': true,
                            'bg-white rounded-t-2xl shadow-md text-primary-500': selected,
                            'text-primary-300': !selected
                        }">
                            ساندویچ پانل سقفی
                        </button>
                    </HLTab>
                    <HLTab v-slot="{ selected }" as="template">
                        <button :class="{
                            'py-2 px-4 text-xs transition-all outline-0 duration-200 lg:text-sm': true,
                            'bg-white rounded-t-2xl shadow-md text-primary-500': selected,
                            'text-primary-300': !selected
                        }">
                            ساندویچ پانل دیواری
                        </button>
                    </HLTab>
                </HLTabList>

                <HLTabPanels as="div">
                    <HLTabPanel as="div">
                        <p class="text-sm text-primary-50 text-justify">
                            از انواع ساندویچ پانل که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد، پانل سقفی
                            بوده
                            و به
                            دلیل ساختار کامپوزیتی خود توانسته جایگزین مناسبی برای مصالح سنتی باشد. ویژگی‌های این متریال
                            و
                            مزایای
                            متعدد آن‌ها سبب شده تا با افزایش دوام ساختمان و عایق‌سازی بنا، یک سقف با عملکردی چندگانه در
                            اختیار
                            افراد قرار گیرد. پانل‌های سقفی به عنوان متریالی صنعتی و مدرن جهت اجرا در پوشش سقف سازه‌هایی
                            چون
                            سوله
                            صنعتی، ساختمان‌های مسکونی، انبارها و… به کار رفته و عموما از دو دسته مواد برای ساختار آن
                            استفاده
                            می‌شود که شامل مواد عایق برای هسته مرکزی و ورق‌هایی مقاوم برای لایه‌های جانبی می‌شود.  
                        </p>
                    </HLTabPanel>
                    <HLTabPanel as="div">
                        <p class="text-sm text-primary-50 text-justify">
                            از انواع ساندویچ پانل که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد، پانل سقفی
                            بوده
                            و به
                            دلیل ساختار کامپوزیتی خود توانسته جایگزین مناسبی برای مصالح سنتی باشد. ویژگی‌های این متریال
                            و
                            مزایای
                            متعدد آن‌ها سبب شده تا با افزایش دوام ساختمان و عایق‌سازی بنا، یک سقف با عملکردی چندگانه در
                            اختیار
                            افراد قرار گیرد. پانل‌های سقفی به عنوان متریالی صنعتی و مدرن جهت اجرا در پوشش سقف سازه‌هایی
                            چون
                            سوله
                            صنعتی، ساختمان‌های مسکونی، انبارها و… به کار رفته و عموما از دو دسته مواد برای ساختار آن
                            استفاده
                            می‌شود که شامل مواد عایق برای هسته مرکزی و ورق‌هایی مقاوم برای لایه‌های جانبی می‌شود.  
                        </p>
                    </HLTabPanel>
                </HLTabPanels>
            </HLTabGroup>

       <button class="hidden text-secondary-500 text-xs max-w-max lg:flex items-center gap-2 mb-7">
        مشاهده بیشتر
        <svg class="w-4	h-4">
            <use href="#down"/>
        </svg>
       </button>
        </div>
        <div class="max-h-72 px-4">
            <video class="w-full h-full" controls>
                <source src="/assets/video/home/video_mammut.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>


<script setup>
defineOptions({
    name: "HomeProductOverview",
})
</script>
