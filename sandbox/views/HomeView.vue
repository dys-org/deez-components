<script setup lang="ts">
import { ref, watch } from 'vue';

import { DButton } from '../../src/components/DButton';
import { DCheckbox } from '../../src/components/DCheckbox';
import { DDropdown } from '../../src/components/DDropdown';
import { DToggle } from '../../src/components/DToggle';

const options = [
  {
    label: 'About',
    key: 'about',
    to: '/about',
  },
  {
    divider: true,
    key: 'd1',
  },
  {
    label: 'Disabled Option',
    key: 'disabled_option',
    disabled: true,
  },
  {
    label: 'Other People',
    key: 'other_people',
    // TODO implement nested dropdowns
    children: [
      {
        label: 'Jordan Baker',
        key: 'jordan_baker',
      },
      {
        label: 'Tom Buchanan',
        key: 'tom_buchanan',
      },
    ],
  },
  {
    label: 'Sign Out',
    key: 'sign_out',
    icon: '<span class="i-mdi-home"></span>',
    fn: () => {
      console.log('sign out');
    },
  },
];

const darkMode = ref(false);
const cb1 = ref(false);

watch(darkMode, (val) => {
  document.documentElement.classList.toggle('dark', val);
});
</script>

<template>
  <div class="min-h-screen text-black dark:bg-gray-900 dark:text-white">
    <header class="mx-auto max-w-screen-xl px-4 py-8">
      <h1 class="mb-4 text-2xl font-bold">Deez Components Sandbox</h1>
    </header>
    <main class="mx-auto grid w-full max-w-screen-lg gap-16 p-4">
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Dropdown</h2>
        <DDropdown :options="options" label="Options" />
      </div>
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Button</h2>
        <DButton>Click Me</DButton>
      </div>
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Checkbox</h2>
        <DCheckbox
          id="cb1"
          v-model="cb1"
          name="cb1"
          label="Checkbox"
          description="Description of what this checkbox does"
        ></DCheckbox>
      </div>
      <div class="border-b p-8">
        <h2 class="mb-4 text-xl font-bold">Toggle</h2>
        <DToggle v-model="darkMode" label="Dark Mode" />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
