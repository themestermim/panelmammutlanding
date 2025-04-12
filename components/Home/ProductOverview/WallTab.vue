<template>
    <div :class="{
        'relative': true,
        'pb-10 md:pb-0': !isDescriptionVisible,
        'pb-0': isDescriptionVisible,
    }">
        <div class="flex flex-col gap-6 md:pt-4">
            <p class="text-sm text-primary-50 text-justify">
                از انواع ساندویچ پانل که برای پوشش سقف سازه‌های مختلف مورد استفاده قرار می‌گیرد، پانل
                سقفی
                بوده
                و به
                دلیل ساختار کامپوزیتی خود توانسته جایگزین مناسبی برای مصالح سنتی باشد. ویژگی‌های این
                متریال
                و
                مزایای
                متعدد آن‌ها سبب شده تا با افزایش دوام ساختمان و عایق‌سازی بنا، یک سقف با عملکردی چندگانه
                در
                اختیار
                افراد قرار گیرد. پانل‌های سقفی به عنوان متریالی صنعتی و مدرن جهت اجرا در پوشش سقف
                سازه‌هایی
                چون
                سوله
                صنعتی، ساختمان‌های مسکونی، انبارها و… به کار رفته و عموما از دو دسته مواد برای ساختار آن
                استفاده
                می‌شود که شامل مواد عایق برای هسته مرکزی و ورق‌هایی مقاوم برای لایه‌های جانبی می‌شود.  
            </p>

            <button v-show="!isDescriptionVisible" class="absolute bottom-0 right-0 text-secondary-500 text-xs max-w-max flex items-center gap-2 md:static" type="button" aria-label="مشاهده بیشتر" @click="showMore">
                مشاهده بیشتر
                <svg class="w-4	h-4">
                    <use href="#down" />
                </svg>
            </button>
        </div>

        <div class="px-4 md:pr-0 md:pl-8">
            <div class="aspect-video">
                <video class="w-full h-full" controls>
                    <source src="/assets/video/home/video_mammut.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div v-show="isDescriptionVisible" class="col-span-full">
            <div>
                <h2 class="text-xl font-bold">
                    انواع ساندویچ پانل سقفی
                </h2>
                <p class="mt-4">
                    ساندویچ پنل سقفی انواع مختلفی دارد که بر اساس شمایل ظاهری و همچنین جنس متریال به کار رفته در ساخت
                    لایه‌های آن تقسیم‌بندی می‌گردد. در ادامه به تفصیل به انواع این مصالح پرداخته خواهد شد. 
                    ساندویچ پانل سقفی (Roof Sandwich Panel) چیست؟ساندویچ پانل سقفی (Roof Sandwich Panel) پوششی برای سقف
                    است
                    و به صورت دو لایه ورق که میان آن‌ها فوم عایق تزریق شده است ساخته می‌شود. در محیط‌ هایی با میزان بارش
                    سالیانه زیاد از ورق آردواز و ورق کرکره‌ای برای کاهش آسیب پذیری ساندویچ پانل استفاده می‌شود.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:gap-16">
                <div>
                    <h2 class="text-xl font-bold">
                        انواع پنل سقفی از لحاظ شکل ظاهری 
                    </h2>
                    <p class="mt-4">
                        ظاهر پنل‌های ساندویچی سقفی متفاوت بوده و براساس کاربری سازه، اقلیم منطقه مربوط به اجرای پروژه،
                        میزان وزن بار، بار قابل تحمل و… انتخاب خواهد شد. در ادامه به برخی از معروف‌ترین پنل‌ها از نظر
                        ظاهر اشاره خواهد شد: 
                    </p>
                    <ul class="list-disc pr-4">
                        <li>
                            طرح شادولاین: طراحی این مصالح به صورت موجی بوده و به دلیل شکل ظاهری خود مزایای متعددی را نیز
                            شامل می‌شوند. برخی از این مزایا شامل مواردی چون افزایش مقاومت در مقابل آسیب‌های فیزیکی،
                            مقاومت بیشتر در برابر آب باران و رطوبت هوا، تنوع زیاد در طرح، رنگ و… می‌شود. 
                        </li>
                        <li>
                            طرح ذوزنقه: یک طرح کلاسیک به نام طرح ذوزنقه جهت آب‌بندی سقف در برابر نفوذ آب تعبیه می‌گردد
                            که تعداد خطوط ذوزنقه‌ای در پنل‌ها متفاوت خواهد بود. هرچه تعداد این خطوط بیشتر باشد مقاومت
                            نیز افزایش پیدا می‌کند. از این ورق‌ها بیشتر در کانکس‌ها، سوله‌ها، ویلاها و… استفاده می‌شود. 
                        </li>
                    </ul>
                </div>
                <div class="md:pl-8">
                    <div class="relative w-full pt-[57%]">
                        <NuxtImg class="size-full absolute top-0 right-0" draggable="false"
                                 src="/assets/img/home/sandwich-panel-roof.webp" alt="انواع ساندویچ پانل سقفی" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeProductOverviewWallTab",
})

const isDescriptionVisible = ref(false);

const showMore = () => {
    isDescriptionVisible.value = true;
}
</script>