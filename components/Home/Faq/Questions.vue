<template>
    <div>
        <ul class="flex flex-col gap-4">
            <li v-for="item in questionList" :key="item.id" @click="toggleActive(item.id)" :class="{
                'p-4 rounded-2xl border transition-all cursor-pointer': true,
                'border-primary-50 text-gray-100': activeItem == item.id,
                'border-primary-400 hover:border-primary-300 text-primary-400 hover:text-primary-300': activeItem != item.id,
            }">
                <h3 :class="{
                    'text-sm font-normal flex text-current items-start justify-between transition-all lg:text-base': true,
                }">
                    <span>{{item.question}}</span>
                    <div class="size-4 flex items-center justify-center flex-none mt-1">
                        <svg class="w-3 h-0.5 fill-current" v-show="activeItem == item.id">
                            <use href="#minus"/>
                        </svg>
                        <svg class="size-3 fill-current" v-show="activeItem != item.id">
                            <use href="#plus"/>
                        </svg>
                    </div>
                </h3>
                <p :class="{
                    'text-xs text-primary-50 overflow-hidden cursor-default': true,
                    'max-h-96 mt-4': activeItem == item.id,
                    'max-h-0 mt-0': activeItem != item.id,
                }" v-text="item.answer">
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineOptions({
    name: "HomeFaqQuestions",
})
const questionList = [
    {
        question: "مهم‌ترین برتری ساندویچ پانل نسبت به سایر مصالح چیست؟",
        answer: "ساندویچ پانل متریالی چندعملکردی است بدین معنا که همزمان چندین ویژگی و خصوصیات کارکردی متفاوت دارد. پنل‌ها از قابلیت عایق‌بندی حرارتی و رطوبتی برخوردار هستند و همزمان در مقابل فرسایش، زنگ‌زدگی و حتی آتش‌سوزی مقاومت دارند.",
        id: 1,
    },
    {
        question: "تفاوت اصلی ساندویچ پانل سقفی و دیواری چیست؟",
        answer: "ساندویچ پانل سقفی دارای گام است اما پنل‌های دیواری فاقد گام هستند. گام به برآمدگی‌هایی گفته می‌شود که روی ورق خارجی ساندویچ پانل سقفی قرار دارند.",
        id: 2,
    },
    {
        question: "قیمت ساندویچ پانل دیواری چقدر است؟",
        answer: "برای تعیین قیمت ساندویچ پانل دیواری ابتدا باید ضخامت و نوع آن را مشخص کرد. جنس مواد اولیه یعنی ورق‌ها و فوم و همچنین ضخامت پنل به طور مستقیم بر قیمت آن تاثیر می‌گذارند.",
        id: 3,
    },
    {
        question: "آیا تعداد و فرم گام ساندویچ پانل سقفی بر عملکرد آن تاثیر می‌گذارند؟",
        answer: "تعداد و شکل گام ساندویچ پانل سقفی بر میزان مقاومت آن در برابر نیروهای وارده اثر می‌گذارند. پنل سقفی با ۵ گام ذوزنقه‌ای بهینه‌ترین عملکرد را دارد و بهترین انتخاب برای اجرای پوشش سقف سازه‌های گوناگون است.",
        id: 4,
    },
]

const activeItem = ref(null);

onMounted(() => {
    if(questionList.length > 0) {
        activeItem.value = questionList[0].id;
    }
})

const toggleActive = (id) => {
    activeItem.value = activeItem.value === id ? null : id
}
</script>