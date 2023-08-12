<script setup lang="ts">
import { ref } from 'vue';
import DInputNumber from './DInputNumber.vue';
import { logEvent } from 'histoire/client';

const num1 = ref(0);
const num2 = ref(0);
const num3 = ref(0);
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="w-96">
        <DInputNumber
          v-model="num1"
          name="number"
          label="Pick a number"
          description="Any even number 0 - 10"
          min="0"
          max="10"
          step="2.0"
          @update:modelValue="logEvent('num1 updated', $event)"
        />
      </div>
      <p class="mt-8 font-mono">Value: {{ num1 }}</p>
    </Variant>
    <Variant title="Error">
      <div class="w-96">
        <DInputNumber
          v-model="num2"
          name="number"
          label="Pick a number"
          description="Any even number 0 - 10"
          min="0"
          max="10"
          step="2.0"
          status="error"
          @update:modelValue="logEvent('num 2 updated', $event)"
        />
      </div>
      <p class="mt-8 font-mono">Value: {{ num2 }}</p>
    </Variant>
    <Variant title="Hidden label with error">
      <div class="w-96">
        <DInputNumber
          v-model="num3"
          name="number"
          label="Pick a number"
          description="Any even number 0 - 10"
          min="0"
          max="10"
          step="2.0"
          status="error"
          hide-label
          @update:modelValue="logEvent('num3 updated', $event)"
        />
      </div>
      <p class="mt-8 font-mono">Value: {{ num3 }}</p>
    </Variant>
  </Story>
</template>
