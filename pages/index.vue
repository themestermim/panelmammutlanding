<template>
    <div class="text-white w-full overflow-hidden">
        <Svg />
        <Hero />
        <ProductDetailsWithOrder />
        <ProductSoftware />
        <ContactPanel />
        <ProductOverview />
        <PricePanel />
        <Faq />
    </div>
</template>

<script setup>
import Hero from "~/components/Home/Hero";
import ProductDetailsWithOrder from "~/components/Home/ProductDetailsWithOrder";
import ProductSoftware from "~/components/Home/ProductSoftware";
import ContactPanel from "~/components/Home/ContactPanel";
import ProductOverview from "~/components/Home/ProductOverview";
import PricePanel from "~/components/Home/PricePanel";
import Faq from "~/components/Home/Faq";
import Svg from "~/components/Home/Svg";

defineOptions({
    name: "Homapage",
})

useSeoMeta({
    title: "ماموت | تولیدکننده انواع ساندویچ پانل",
    description: "دنیای ماموت قطب اصلی تولید محصولات پیش‌ساخته در خاورمیانه است. ساندویچ پانل، کانکس، کانتینر، تریلر و اتاق ایزوله از جمله مهمترین محصولات دنیای ماموت هستند."
})
</script>