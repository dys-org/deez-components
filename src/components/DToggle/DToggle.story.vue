<script setup lang="ts">
import { ref } from 'vue';
import DToggle from './DToggle.vue';
import { logEvent } from 'histoire/client';

const tg1 = ref(false);
const tg2 = ref(false);
const tg3 = ref(false);
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <DToggle
        v-model="tg1"
        label="Feature Flag"
        @update:modelValue="logEvent('Clicked Toggle', { tg1 })"
      />
    </Variant>
    <Variant title="Label Right">
      <DToggle
        v-model="tg2"
        label="Feature Flag"
        description="Additonal information provided."
        labelSide="right"
        @update:modelValue="logEvent('Clicked Toggle', { tg2 })"
      />
    </Variant>
    <Variant title="Label Left">
      <DToggle
        v-model="tg3"
        label="Feature Flag"
        description="Additonal information is provided about this toggle."
        labelSide="left"
        @update:modelValue="logEvent('Clicked Toggle', { tg3 })"
      />
    </Variant>
  </Story>
</template>
