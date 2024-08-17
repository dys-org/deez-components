<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { ref } from 'vue';

import DSelect from './DSelect.vue';

interface Person {
  value: { int: number; str: string };
  display: string;
}

const people = [
  { value: '1', display: 'Wade Cooper' },
  { value: '2', display: 'Arlene Mccoy' },
  { value: '3', display: 'Devon Webb' },
  { value: '4', display: 'Tom Cook' },
  { value: '5', display: 'Tanya Fox' },
];
const people2: Person[] = [
  { value: { int: 1, str: 'abc' }, display: 'Hellen Schmvaluet' },
  { value: { int: 2, str: '123' }, display: 'Caroline Schultz' },
  { value: { int: 3, str: 'def' }, display: 'Mason Heaney' },
  { value: { int: 4, str: '456' }, display: 'Claudie Smitham' },
  { value: { int: 5, str: 'ghi' }, display: 'Emil Schaefer' },
];

const selectStr = ref('');

const selectObj = ref<Person>();
const selectArray = ref(['Wade Cooper', 'Arlene Mccoy']);
</script>

<template>
  <Story :layout="{ type: 'grid', width: 400 }">
    <Variant title="Default">
      <DSelect
        id="people"
        v-model="selectObj"
        label="Assign To"
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option :value="undefined" disabled>Choose an option</option>
        <option v-for="person in people2" :key="person.value.int" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="With Description and ID">
      <DSelect
        id="people"
        v-model="selectStr"
        name="name-attr"
        label="Assign To"
        description="Select a person to assign to this task."
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="With Error">
      <DSelect
        id="people"
        v-model="selectStr"
        label="Assign To"
        status="error"
        error-message="This field is required."
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Label on Left">
      <DSelect
        id="people"
        v-model="selectStr"
        label="Assign To"
        label-left
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Hidden Label">
      <DSelect
        id="people"
        v-model="selectStr"
        label="Assign To"
        hide-label
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Hidden Label with Error">
      <DSelect
        id="people"
        v-model="selectStr"
        label="Assign To"
        hide-label
        status="error"
        error-message="This field is required."
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display" :value="person.value">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>

    <Variant title="Multiple">
      <DSelect
        id="people"
        v-model="selectArray"
        label="Assign To"
        multiple
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option value="" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>
    <Variant title="Size 5">
      <DSelect
        id="people"
        v-model="selectStr"
        label="Assign To"
        :size="5"
        @update:modelValue="logEvent('updated select', $event)"
      >
        <option :value="undefined" disabled>Choose an option</option>
        <option v-for="person in people" :key="person.display">
          {{ person.display }}
        </option>
      </DSelect>
    </Variant>
  </Story>
</template>
