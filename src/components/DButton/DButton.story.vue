<script setup lang="ts">
import DButton from './DButton.vue';
import { logEvent } from 'histoire/client';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <DButton @click="logEvent('Clicked Default', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Primary">
      <DButton variant="primary" @click="logEvent('Clicked Primary', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Default Danger">
      <DButton @click="logEvent('Clicked Default Danger', $event)" danger>Click Me</DButton>
    </Variant>

    <Variant title="Primary Danger">
      <DButton variant="primary" danger @click="logEvent('Clicked Primary Danger', $event)">
        Click Me
      </DButton>
    </Variant>

    <Variant title="Text">
      <DButton variant="text" @click="logEvent('Clicked Text', $event)">Click Me</DButton>
    </Variant>

    <Variant title="Text Danger">
      <DButton variant="text" danger @click="logEvent('Clicked Text Danger', $event)"
        >Click Me</DButton
      >
    </Variant>

    <Variant title="Primary Loading">
      <DButton variant="primary" loading @click="logEvent('Clicked Primary Loading', $event)">
        Click Me
      </DButton>
    </Variant>
  </Story>
</template>
