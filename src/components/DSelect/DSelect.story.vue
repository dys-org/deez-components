<script setup lang="ts">
import { ref } from 'vue';
import { logEvent } from 'histoire/client';
import DSelect from './DSelect.vue';

const people = [
  { value: '', display: 'Choose an option', disabled: true },
  { value: '1', display: 'Wade Cooper' },
  { value: '2', display: 'Arlene Mccoy' },
  { value: '3', display: 'Devon Webb' },
  { value: '4', display: 'Tom Cook' },
  { value: '5', display: 'Tanya Fox' },
  { value: '6', display: 'Hellen Schmvaluet' },
  { value: '7', display: 'Caroline Schultz' },
  { value: '8', display: 'Mason Heaney' },
  { value: '9', display: 'Claudie Smitham' },
  { value: '10', display: 'Emil Schaefer' },
];

const select1 = ref('');
const select2 = ref('');
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <DSelect
        v-model="select1"
        label="Assign To"
        name="people"
        :options="people"
        @update:modelValue="logEvent('updated select', { value: select1 })"
      />
    </Variant>

    <Variant title="Label on Left">
      <DSelect
        v-model="select2"
        label="Assign To"
        name="people"
        :options="people"
        label-left
        @update:modelValue="logEvent('updated select', { value: select2 })"
      />
    </Variant>
  </Story>
</template>
