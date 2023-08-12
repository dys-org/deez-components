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
const select3 = ref('');
const select4 = ref('');
const select5 = ref('');
</script>

<template>
  <Story :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Default">
      <DSelect
        v-model="select1"
        label="Assign To"
        name="people"
        :options="people"
        @update:modelValue="(val) => logEvent('updated select', { value: val })"
      />
    </Variant>

    <Variant title="With Description">
      <DSelect
        v-model="select4"
        label="Assign To"
        name="people"
        :options="people"
        description="Select a person to assign to this task."
        @update:modelValue="(val) => logEvent('updated select', { value: val })"
      />
    </Variant>

    <Variant title="With Error">
      <DSelect
        v-model="select5"
        label="Assign To"
        name="people"
        :options="people"
        status="error"
        error-message="This field is required."
        @update:modelValue="(val) => logEvent('updated select', { value: val })"
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

    <Variant title="Hidden Label">
      <DSelect
        v-model="select3"
        label="Assign To"
        name="people"
        :options="people"
        hide-label
        @update:modelValue="logEvent('updated select', { value: select3 })"
      />
    </Variant>

    <Variant title="Hidden Label with Error">
      <DSelect
        v-model="select3"
        label="Assign To"
        name="people"
        :options="people"
        hide-label
        status="error"
        error-message="This field is required."
        @update:modelValue="logEvent('updated select', { value: select3 })"
      />
    </Variant>
  </Story>
</template>
