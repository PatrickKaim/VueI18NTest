<script setup>
import Hello from './Hello.vue'
import Info from './Info.vue'

const viteRef = "https://vitejs.dev/";
const vueRef = "https://vuejs.org/";

</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ $t("title") }}</h1>
        <h3 v-html="$t('description', { 'viteRef': viteRef, 'vueRef': vueRef})"></h3>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}
h3 {
    font-size: 1.2rem;
}
.greetings h1,
.greetings h3 {
    text-align: center;
}
@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>