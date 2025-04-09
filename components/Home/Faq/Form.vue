<template>
    <div>
        <p class="text-sm text-primary-100 leading-7">در این بخش، به رایج‌ترین سوالات و ابهامات کاربران پاسخ داده شده است.
            هدف
            ما این است که به شما کمک کنیم تا
            با آگاهی کامل‌تری از خدمات و محصولات ما استفاده کنید. اگر سوال خاصی دارید که در اینجا پاسخ آن را
            پیدا
            نکردید، لطفاً با تیم پشتیبانی ما تماس بگیرید یا از طریق تکمیل فرم ذیل با ما در ارتباط باشید . ما در
            تلاش
            هستیم تا تجربه‌ای مثبت و بدون دغدغه را برای شما فراهم کنیم.</p>
        <form action="#" class="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
            <div class="c-input-parent">
                <svg class="icon">
                    <use href="#user"/>
                </svg>
                <input class="input" type="text" v-model="name" placeholder="نام و نام خانوادگی" />
            </div>
            <div class="c-input-parent">
                <svg class="icon">
                    <use href="#call"/>
                </svg>
                <input class="input" type="text" v-model="phone" placeholder="شماره تماس" />
            </div>
            <div :class="{
                'md:col-span-2 c-input-parent has-textarea relative': true,
                'has-error': description.length > descriptionMax,
            }">
                <textarea class="textarea" v-model="description" placeholder="عنوان"></textarea>
                <span class="absolute bottom-1 left-4 select-none text-gray-300 text-xs">{{description.length}}/{{descriptionMax}}</span>
            </div>
        </form>

        <div class="mt-6 flex flex-col gap-4 lg:mt-10 md:flex-row lg:gap-6 xl:gap-8 md:justify-end">
            <a href="tel:02145510" class="c-btn btn-danger-fill btn-md">
                        <span>
                            تماس با ما
                        </span>
            </a>
            <button type="button" class="c-btn btn-secondary-fill btn-md">
                        <span>
                            ارسال پیام
                        </span>
            </button>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeFaqForm",
})

const name = ref("");
const phone = ref("");
const description = ref("");
const descriptionMax = ref(200);
</script>