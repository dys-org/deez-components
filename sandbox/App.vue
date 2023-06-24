<script setup lang="ts">
import { ref, watch } from 'vue';
import { DButton } from '../src/components/DButton';
import { DCheckbox } from '../src/components/DCheckbox';
import { DToggle } from '../src/components/DToggle';

const darkMode = ref(false);
const cb1 = ref(false);

watch(darkMode, (val) => {
  document.documentElement.classList.toggle('dark', val);
});
</script>

<template>
  <div class="min-h-screen text-gray-900 dark:bg-gray-900 dark:text-white">
    <header class="mx-auto max-w-screen-xl px-4 py-8">
      <h1 class="mb-4 text-2xl font-bold">Deez Components Sandbox</h1>
    </header>
    <main class="mx-auto grid w-full max-w-screen-lg gap-16 p-4">
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Button</h2>
        <DButton>Click Me</DButton>
      </div>
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Checkbox</h2>
        <DCheckbox
          id="cb1"
          name="cb1"
          label="Checkbox"
          description="Description of what this checkbox does"
          v-model="cb1"
        ></DCheckbox>
      </div>
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Toggle</h2>
        <DToggle label="Dark Mode" v-model="darkMode" />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
