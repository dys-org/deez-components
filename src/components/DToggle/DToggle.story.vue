<script setup lang="ts">
import { ref } from 'vue';
import DToggle from './DToggle.vue';
import { logEvent } from 'histoire/client';

const tg1 = ref(false);
const tg2 = ref(false);
const tg3 = ref(false);
const tg4 = ref(false);
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <DToggle
        v-model="tg1"
        label="Feature Flag"
        hide-label
        @update:modelValue="logEvent('Clicked Toggle', { tg1 })"
      />
    </Variant>
    <Variant title="Label with Description">
      <DToggle
        v-model="tg2"
        label="Feature Flag"
        description="Additonal information provided."
        @update:modelValue="logEvent('Clicked Toggle', { tg2 })"
      />
    </Variant>
    <Variant title="Label Left">
      <DToggle
        v-model="tg3"
        label="Feature Flag"
        label-left
        @update:modelValue="logEvent('Clicked Toggle', { tg3 })"
      />
    </Variant>
    <Variant title="Label Left with Description">
      <DToggle
        v-model="tg4"
        label="Feature Flag"
        label-left
        description="Additonal information is provided about this toggle."
        @update:modelValue="logEvent('Clicked Toggle', { tg4 })"
      />
    </Variant>
  </Story>
</template>
