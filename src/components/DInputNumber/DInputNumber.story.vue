<script setup lang="ts">
import { ref } from 'vue';
import DInputNumber from './DInputNumber.vue';
import { logEvent } from 'histoire/client';

const num = ref(0);
</script>

<template>
  <Story>
    <Variant title="Default">
      <DInputNumber
        name="number"
        label="Pick a number"
        description="Any even number 0 - 10"
        min="0"
        max="10"
        step="2.0"
        v-model="num"
        @update:modelValue="logEvent('number updated', $event)"
      />
      <p class="mt-8 font-mono">Value: {{ num }}</p>
    </Variant>
    <Variant title="Error">
      <DInputNumber
        name="number"
        label="Pick a number"
        description="Any even number 0 - 10"
        min="0"
        max="10"
        step="2.0"
        v-model="num"
        @update:modelValue="logEvent('number updated', $event)"
        status="error"
      />
      <p class="mt-8 font-mono">Value: {{ num }}</p>
    </Variant>
    <Variant title="Hidden label with error">
      <DInputNumber
        name="number"
        label="Pick a number"
        description="Any even number 0 - 10"
        min="0"
        max="10"
        step="2.0"
        v-model="num"
        @update:modelValue="logEvent('number updated', $event)"
        status="error"
        hideLabel
      />
      <p class="mt-8 font-mono">Value: {{ num }}</p>
    </Variant>
  </Story>
</template>
