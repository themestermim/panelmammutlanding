<template>
    <header :class="{
        'sticky top-0': true,
    }">
        <div class="container grid grid-cols-2 h-14">
            <!-- logo -->
             <div class="flex items-center justify-end h-full">
                <NuxtImg src="" />
             </div>
        </div>
    </header>
</template>

<script setup>
defineOptions({
    name: "layoutsHeader",
});
</script>