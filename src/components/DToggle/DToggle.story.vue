<script setup lang="ts">
import { ref } from 'vue';
import DToggle from './DToggle.vue';
import { logEvent } from 'histoire/client';

const enabled = ref(false);
</script>

<template>
  <Story>
    <Variant title="Default">
      <DToggle
        v-model="enabled"
        @update:modelValue="logEvent('Clicked Toggle', { enabled })"
        label="Feature Flag"
      />
    </Variant>
    <Variant title="Label Right">
      <DToggle
        v-model="enabled"
        @update:modelValue="logEvent('Clicked Toggle', { enabled })"
        label="Feature Flag"
        description="Additonal information provided."
        labelSide="right"
      />
    </Variant>
    <Variant title="Label Left">
      <DToggle
        v-model="enabled"
        @update:modelValue="logEvent('Clicked Toggle', { enabled })"
        label="Feature Flag"
        description="Additonal information is provided about this toggle."
        labelSide="left"
      />
    </Variant>
  </Story>
</template>
