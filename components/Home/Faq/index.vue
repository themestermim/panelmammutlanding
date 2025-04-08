<template>
    <div class="container">
        <h2 class="text-base font-bold">سوالات متداول</h2>
        <div class="py-6 flex flex-col gap-6 lg:flex-row">
            <div class="flex flex-col gap-4 flex-1">
                <p class="text-sm text-primary-100">در این بخش، به رایج‌ترین سوالات و ابهامات کاربران پاسخ داده شده است.
                    هدف
                    ما این است که به شما کمک کنیم تا
                    با آگاهی کامل‌تری از خدمات و محصولات ما استفاده کنید. اگر سوال خاصی دارید که در اینجا پاسخ آن را
                    پیدا
                    نکردید، لطفاً با تیم پشتیبانی ما تماس بگیرید یا از طریق تکمیل فرم ذیل با ما در ارتباط باشید . ما در
                    تلاش
                    هستیم تا تجربه‌ای مثبت و بدون دغدغه را برای شما فراهم کنیم.</p>
                <form action="#" class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div class="text-sm text-right w-full font-normal h-14 rounded-2xl text-gray-500 bg-transparent border border-gray-500 relative flex flex-row items-center gap-4 px-3">
                        <svg class="h-5 w-5">
                            <use href="#user"/>
                        </svg>
                    <input
                        class="text-sm text-right w-full font-normal h-full text-gray-500 bg-transparent border-none p-0"
                        type="text" placeholder="نام و نام خانوادگی">
                    </div>
                    <div class="text-sm text-right w-full font-normal h-14 rounded-2xl text-gray-500 bg-transparent border border-gray-500 relative flex flex-row items-center gap-4 px-3">
                        <svg class="h-5 w-5">
                            <use href="#call"/>
                        </svg>
                        <input
                        class="text-sm text-right w-full font-normal h-full text-gray-500 bg-transparent border-none p-0"
                        type="text" placeholder="شماره تماس">
                    </div>
                   <div class="lg:col-span-2 h-[150px] border border-gray-500 rounded-2xl">
                    <textarea 
                        class="text-sm text-right w-full font-normal py-3.5 px-3.5 text-gray-500 h-full bg-transparent border-none"
                        name="" placeholder="عنوان"></textarea>
                   </div>
                </form>
                <div class="mt-7 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:gap-8 lg:justify-end">
                        <a href="tel:12345" class="c-btn btn-danger-fill btn-md">
                            <span>
                                تماس با ما
                            </span>
                        </a>
                        <button class="c-btn btn-secondary-fill btn-md">
                            <span>
                                ارسال پیام
                            </span>
                        </button>
                    </div>
            </div>
            <div class="flex-1">
                <ul class="flex flex-col gap-4">
                    <li class="p-4 flex flex-col gap-4 rounded-2xl border border-primary-50">
                        <h3 class="text-sm font-normal text-gray-100 flex items-center justify-between">
                            ساندویچ پانل ها در چه بخش هایی کاربرد دارند؟
                            <svg class="w-3 h-0.5">
                                <use href="#minus" />
                            </svg>
                        </h3>
                        <p class="text-xs text-primary-50">
                            از ساندویچ پانل برای پوشش سقف و دیوار ساختمان‌های اقامتگاهی، اداری، تجاری، آموزشی، سالن‌های
                            صنعتی، سردخانه‌ها، کلین روم‌ها، آشیانه هواپیما‌ها، سوله‌های کشاورزی، سالن‌های ورزشی، انبار
                            سیلو‌ها، گاوداری‌ها، مرغداری‌ها و بسیاری از موارد دیگر استفاده می‌شود.
                        </p>
                    </li>
                    <li class="p-4 flex flex-col gap-4 rounded-2xl border border-primary-50">
                        <h3 class="text-sm font-normal text-gray-100 flex items-center justify-between">
                            ساندویچ پانل ها در چه بخش هایی کاربرد دارند؟
                            <svg class="h-3 w-3">
                                <use href="#plus" />
                            </svg>
                        </h3>
                        <p class="text-xs text-primary-50">
                            از ساندویچ پانل برای پوشش سقف و دیوار ساختمان‌های اقامتگاهی، اداری، تجاری، آموزشی، سالن‌های
                            صنعتی، سردخانه‌ها، کلین روم‌ها، آشیانه هواپیما‌ها، سوله‌های کشاورزی، سالن‌های ورزشی، انبار
                            سیلو‌ها، گاوداری‌ها، مرغداری‌ها و بسیاری از موارد دیگر استفاده می‌شود.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeFaq",
})
</script>
