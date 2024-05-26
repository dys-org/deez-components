<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { ref } from 'vue';

import DInputNumber from './DInputNumber.vue';

const num1 = ref('');
const num2 = ref(0);
const num3 = ref(0);
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="w-96">
        <DInputNumber
          id="number"
          v-model="num1"
          label="Pick a number"
          description="Any even number 0 - 10"
          min="0"
          max="10"
          step="2"
          @update:modelValue="logEvent('num1 updated', $event)"
        />
      </div>
      <p class="mt-8 font-mono">Value: {{ num1 }}</p>
    </Variant>
    <Variant title="Error">
      <div class="w-96">
        <DInputNumber
          id="number"
          v-model="num2"
          label="Pick a number"
          description="Any odd number 0 - 9"
          min="0"
          max="10"
          status="error"
          @update:modelValue="logEvent('num 2 updated', $event)"
        />
      </div>
      <p class="mt-8 font-mono">Value: {{ num2 }}</p>
    </Variant>
    <Variant title="Hidden label with error">
      <div class="w-96">
        <DInputNumber
          id="number"
          v-model="num3"
          label="Pick a number"
          description="Any even number 0 - 10"
          min="0"
          max="10"
          step="2"
          status="error"
          hide-label
          @update:modelValue="logEvent('num3 updated', $event)"
        />
      </div>
      <p class="mt-8 font-mono">Value: {{ num3 }}</p>
    </Variant>
  </Story>
</template>
