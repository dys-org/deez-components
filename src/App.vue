<script setup lang="ts">
import DButton from './components/DButton.vue';
</script>

<template>
  <div>
    <header class="mx-auto max-w-screen-xl px-4 py-8">
      <h1 class="mb-4 text-2xl font-bold">Deez Components Sandbox</h1>
    </header>

    <main class="mx-auto grid w-full max-w-screen-lg gap-16 p-4">
      <div class="">
        <h2 class="mb-4 text-xl font-bold">Button</h2>
        <DButton>Click Me</DButton>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
