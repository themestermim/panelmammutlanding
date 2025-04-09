<template>
    <div class="container lg:py-16">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 items-end pb-3">
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
                        </HLTabPanel>
                        <HLTabPanel as="div">
                            <p class="text-sm text-primary-50 text-justify">
                                ساندویچ پانل‌ها سهم بزرگی در صنعت ساختمان سازی دارند. کاربرد این مصالح در سازه‌هایی که
                                نیاز به مقاومت بالا و وزن کم باشد، بیشتر مشخص می‌شود. از آنجا که دیوارها بخش‌های مهمی در
                                یک ساختمان هستند، نحوه درست ساخت آن‌ها می‌تواند عملکرد سازه را به شکل قابل توجهی بهبود
                                دهد. کاربرد ساندویچ پانل از زمان تولید تا به امروز در سازه‌های متعددی بوده و مورد توجه
                                سازندگان و مهندسان زیادی قرار گرفته است.

                                شاید در نگاه اول ساختار ترکیبی پانل‌های دیواری طراحی ساده‌ای داشته باشد، ولی امکانات
                                جدیدی را در اختیار معماران قرار داده است. بهبود عملکرد مقطع چه از نظر سازه‌ای و چه از
                                لحاظ نفوذپذیری از مزیت‌های لایه‌ای بودن این پنل‌ها می‌باشد.
                            </p>
                        </HLTabPanel>
                    </HLTabPanels>
                </HLTabGroup>

                <button class="hidden text-secondary-500 text-xs max-w-max lg:flex items-center gap-2 mb-7">
                    مشاهده بیشتر
                    <svg class="w-4	h-4">
                        <use href="#down" />
                    </svg>
                </button>
            </div>
            <div class="aspect-video px-4">
                <video class="w-full h-full" controls>
                    <source src="/assets/video/home/video_mammut.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 pt-3">
            <div class="lg:mb-4">
                <h2 class="text-xl font-bold">
                    انواع ساندویچ پانل سقفی
                </h2>
                <p class="text-sm font-normal text-primary-50 mt-4 leading-7">
                    ساندویچ پنل سقفی انواع مختلفی دارد که بر اساس شمایل ظاهری و همچنین جنس متریال به کار رفته در ساخت
                    لایه‌های آن تقسیم‌بندی می‌گردد. در ادامه به تفصیل به انواع این مصالح پرداخته خواهد شد. 
                    ساندویچ پانل سقفی (Roof Sandwich Panel) چیست؟ساندویچ پانل سقفی (Roof Sandwich Panel) پوششی برای سقف
                    است
                    و به صورت دو لایه ورق که میان آن‌ها فوم عایق تزریق شده است ساخته می‌شود. در محیط‌ هایی با میزان بارش
                    سالیانه زیاد از ورق آردواز و ورق کرکره‌ای برای کاهش آسیب پذیری ساندویچ پانل استفاده می‌شود.
                </p>
            </div>
            <div class="lg:mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h2 class="text-xl font-bold">
                        انواع پنل سقفی از لحاظ شکل ظاهری 
                    </h2>
                    <p class="text-sm font-normal text-primary-50 mt-4 leading-7">
                        ظاهر پنل‌های ساندویچی سقفی متفاوت بوده و براساس کاربری سازه، اقلیم منطقه مربوط به اجرای پروژه،
                        میزان وزن بار، بار قابل تحمل و… انتخاب خواهد شد. در ادامه به برخی از معروف‌ترین پنل‌ها از نظر
                        ظاهر اشاره خواهد شد: 
                    </p>
                    <ul class="list-disc pr-4">
                        <li class="text-sm font-normal text-primary-50 leading-7">
                            طرح شادولاین: طراحی این مصالح به صورت موجی بوده و به دلیل شکل ظاهری خود مزایای متعددی را نیز
                            شامل می‌شوند. برخی از این مزایا شامل مواردی چون افزایش مقاومت در مقابل آسیب‌های فیزیکی،
                            مقاومت بیشتر در برابر آب باران و رطوبت هوا، تنوع زیاد در طرح، رنگ و… می‌شود. 
                        </li>
                        <li class="text-sm font-normal text-primary-50 leading-7">
                            طرح ذوزنقه: یک طرح کلاسیک به نام طرح ذوزنقه جهت آب‌بندی سقف در برابر نفوذ آب تعبیه می‌گردد
                            که تعداد خطوط ذوزنقه‌ای در پنل‌ها متفاوت خواهد بود. هرچه تعداد این خطوط بیشتر باشد مقاومت
                            نیز افزایش پیدا می‌کند. از این ورق‌ها بیشتر در کانکس‌ها، سوله‌ها، ویلاها و… استفاده می‌شود. 
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="relative w-full pt-[57%]">
                        <NuxtImg class="size-full absolute top-0 right-0"
                            src="/assets/img/home/sandwich-panel-roof.webp" alt="انواع ساندویچ پانل سقفی" />
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4 pt-3">
            <div class="lg:mb-4">
                <h2 class="text-xl font-bold">
                    ساختار ساندویچ پانل دیواری
                </h2>
                <p class="text-sm font-normal text-primary-50 mt-4 leading-7">
                    ساندویچ پنل‌ها مصالحی نوین در عصر امروز به شمار می‌روند که از زمان به‌کارگیری آن‌ها، صنعت ساخت و ساز
                    به طور ویژه‌ای تغییر یافت. تمامی انواع این مصالح از یک هسته مرکزی و دو متریال جانبی تشکیل شده‌اند که
                    این موارد در کنار هم یک کلیت واحد را ارائه می‌دهند. عنصر مرکزی در ساختار این مصالح از یک فوم عایق
                    بوده و طرفین آن از دو ورق مقاوم استفاده می‌شود که کارایی و بازدهی بالایی را ارائه می‌دهند. این
                    ساختار علاوه‌بر ساخت ساندویچ پانل در محصولات و صنایع دیگر نیز استفاده می‌گردد و دلیل ارجحیت آن‌ها به
                    مصالح بنایی نیز همین ساختار کامپوزیتی می‌باشد.

                </p>
            </div>
            <div class="lg:mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h2 class="text-xl font-bold">
                        انواع ساندویچ پانل دیواری
                    </h2>
                    <p class="text-sm font-normal text-primary-50 mt-4 leading-7">
                        این متریال پیش ساخته از نظر جنس مواد اولیه به‌کار رفته در ساختار آن‌ها به دو دسته کلی طبقه‌بندی
                        می‌گردند که هرکدام از آن‌ها باتوجه‌به ویژگی‌های منحصر به فرد خود در سازه‌های مختلف با کاربری
                        متفاوت به‌کار می‌روند و در ادامه به آن‌ها اشاره خواهیم کرد:
                        همانطور که پیش‌تر به آن اشاره شد، پانل‌های ساندویچی دارای سه لایه هستند که جنس متریال به کار
                        رفته در این ساختار با یکدیگر متفاوت است و براساس نوع کاربری سازه‌ها انتخاب خواهند شد. در هسته
                        مرکزی این مصالح مواد مختلفی به عنوان عایق استفاده می‌شود که از مهم‌ترین آن‌ها می‌توان به
                        پلی‌اورتان، پلی استایرن، پشم شیشه و… اشاره نمود. از پرکاربردترین مصالحی که از فوم‌های ذکر شده در
                        ساختار آن‌ها استفاده شده در کنار مزایای انواع فوم ساندویچ پانل در ادامه ذکر شده است:
                    </p>

                </div>
                <div>
                    <div class="relative w-full pt-[57%]">
                        <NuxtImg class="size-full absolute top-0 right-0"
                            src="/assets/img/home/wall-panel-streucture.webp" alt="انواع ساندویچ پانل سقفی" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
defineOptions({
    name: "HomeProductOverview",
})
</script>
