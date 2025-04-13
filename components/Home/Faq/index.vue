<template>
    <div class="container c-padding" id="faq">
        <h2 class="text-base font-bold lg:text-2xl">سوالات متداول</h2>
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Form />
            <Questions />
        </div>
    </div>
</template>

<script setup>
import Form from "./Form.vue";
import Questions from "./Questions.vue";

defineOptions({
    name: "HomeFaq",
})
</script>
