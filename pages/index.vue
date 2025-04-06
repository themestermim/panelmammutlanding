<template>
    <div class="text-white">
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
</script>