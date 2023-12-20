<script setup lang="ts">
import { ref } from 'vue';
import { logEvent } from 'histoire/client';

import DButton from './DButton.vue';

import IconCheckCircle from '~icons/lucide/check-circle';
import IconChevronRight from '~icons/lucide/chevron-right';

const bool = ref(true);
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <DButton @click="logEvent('Default', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Primary">
      <DButton variant="primary" @click="logEvent('Primary', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Primary Icon Start">
      <DButton variant="primary" @click="logEvent('Primary Icon Start', $event)">
        <template #iconStart><IconCheckCircle aria-hidden="true" /></template>
        Click Me
      </DButton>
    </Variant>

    <Variant title="Default Danger">
      <DButton danger @click="logEvent('Default Danger', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Default Danger Icon End">
      <DButton danger @click="logEvent('Default Danger Icon End', $event)">
        Click Me
        <template #iconEnd><IconChevronRight aria-hidden="true" /></template>
      </DButton>
    </Variant>

    <Variant title="Primary Danger">
      <DButton variant="primary" danger @click="logEvent('Primary Danger', $event)">
        Click Me
      </DButton>
    </Variant>

    <Variant title="Link">
      <DButton variant="link" @click="logEvent('Text', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Link Danger">
      <DButton variant="link" danger @click="logEvent('Text Danger', $event)"> Click Me </DButton>
    </Variant>

    <Variant title="Primary Loading">
      <DButton variant="primary" loading @click="logEvent('Primary Loading', $event)">
        Click Me
      </DButton>
    </Variant>

    <Variant title="Small">
      <DButton size="sm" @click="logEvent('Small', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Large">
      <DButton size="lg" @click="logEvent('Large', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Using Tailwind-Merge">
      <DButton
        :class="[
          { 'bg-green-600 hover:bg-orange-600 dark:bg-green-500 dark:hover:bg-orange-500': bool },
          'rounded-full p-2',
        ]"
        variant="primary"
        @click="bool = !bool"
      >
        <span class="sr-only">Check</span>
        <IconCheckCircle aria-hidden="true" class="size-4" />
      </DButton>
    </Variant>
  </Story>
</template>
