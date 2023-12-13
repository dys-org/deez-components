<script setup lang="ts">
import { ref } from 'vue';
import { logEvent } from 'histoire/client';

import DSelect from './DSelect.vue';

const people = [
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
  <Story :layout="{ type: 'grid', width: 400 }">
    <Variant title="Default">
      <DSelect
        id="people"
        v-model="select1"
        label="Assign To"
        @update:modelValue="(val) => logEvent('updated select', { value: val })"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.value" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="With Description and ID">
      <DSelect
        id="people"
        v-model="select4"
        name="name-attr"
        label="Assign To"
        description="Select a person to assign to this task."
        @update:modelValue="(val) => logEvent('updated select', { value: val })"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.value" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="With Error">
      <DSelect
        id="people"
        v-model="select5"
        label="Assign To"
        status="error"
        error-message="This field is required."
        @update:modelValue="(val) => logEvent('updated select', { value: val })"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.value" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Label on Left">
      <DSelect
        id="people"
        v-model="select2"
        label="Assign To"
        label-left
        @update:modelValue="logEvent('updated select', { value: select2 })"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.value" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Hidden Label">
      <DSelect
        id="people"
        v-model="select3"
        label="Assign To"
        hide-label
        @update:modelValue="logEvent('updated select', { value: select3 })"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.value" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Hidden Label with Error">
      <DSelect
        id="people"
        v-model="select3"
        label="Assign To"
        hide-label
        status="error"
        error-message="This field is required."
        @update:modelValue="logEvent('updated select', { value: select3 })"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.value" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>
  </Story>
</template>
