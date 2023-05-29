<script setup lang="ts">
import DButton from './DButton.vue';
import { logEvent } from 'histoire/client';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Primary">
      <DButton @click="logEvent('Clicked Primary', $event)"> Click Me </DButton>
    </Variant>
  </Story>
</template>
