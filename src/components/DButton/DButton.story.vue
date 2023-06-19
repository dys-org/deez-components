<script setup lang="ts">
import DButton from './DButton.vue';
import { logEvent } from 'histoire/client';
import IconCheckCircle from '~icons/feather/check-circle';
import IconChevronRight from '~icons/feather/chevron-right';
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
      <DButton @click="logEvent('Default Danger', $event)" danger>Click Me</DButton>
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
  </Story>
</template>
