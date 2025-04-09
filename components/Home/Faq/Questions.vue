<template>
    <div>
        <ul class="flex flex-col gap-4">
            <li v-for="item in questionList" :key="item.id" :class="{
                'p-4 rounded-2xl border transition-all': true,
                'border-primary-50': activeItem == item.id,
                'border-primary-400': activeItem != item.id,
            }">
                <h3 @click="toggleActive(item.id)" :class="{
                    'text-sm font-normal flex items-start justify-between cursor-pointer transition-all lg:text-base': true,
                    'text-gray-100': activeItem == item.id,
                    'text-primary-400': activeItem != item.id,
                }">
                    <span>{{item.question}}</span>
                    <div class="size-4 flex items-center justify-center flex-none mt-1">
                        <svg class="w-3 h-0.5" v-show="activeItem == item.id">
                            <use href="#minus"/>
                        </svg>
                        <svg class="size-3" v-show="activeItem != item.id">
                            <use href="#plus"/>
                        </svg>
                    </div>
                </h3>
                <p :class="{
                    'text-xs text-primary-50 overflow-hidden': true,
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
        question: "کاربردهای اصلی ساندویچ پانل‌ها چیست؟",
        answer: "ساندویچ پانل‌ها به‌طور گسترده در ساختمان‌های صنعتی، تجاری و مسکونی استفاده می‌شوند.",
        id: 1,
    },
    {
        question: "آیا امکان استفاده از ساندویچ پانل‌ها در مناطق مرطوب وجود دارد؟",
        answer: "بله، برخی انواع ساندویچ پانل همچون پانل پلی یورتان، مقاومت خوبی در برابر رطوبت دارند که آن‌ها را مناسب مناطق مرطوب می‌کند.",
        id: 2,
    },
    {
        question: "آیا ساندویچ پانل‌ها مناسب ساخت انبارها هستند؟",
        answer: "بله، پنل‌های ساندویچی معمولاً در ساخت انبارها و سالن‌های صنعتی به دلیل سرعت نصب و کارایی بالا مورد استفاده قرار می‌گیرند.",
        id: 3,
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