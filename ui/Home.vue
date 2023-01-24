<script setup>
import Hello from './Hello.vue'
import Info from './Info.vue'
</script>

<template>
  <h1 class="text-3xl font-bold my-6">{{ $t('welcome') }}</h1>
  <Hello />
  <Info />
</template>
