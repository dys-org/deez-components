<script setup lang="ts">
import { ref } from 'vue';
import DAutoComplete from './DAutoComplete.vue';
import { logEvent } from 'histoire/client';

const person = ref(null);

const people = [
  {
    id: 1,
    name: 'David Youngquist Soards',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Gretel Durruty Soards',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Sebastian Alexander Soards',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
</script>

<template>
  <Story>
    <Variant title="Default">
      <DAutoComplete
        label="Assign to"
        :options="people"
        v-model="person"
        @update:modelValue="logEvent('autocomplete update', $event)"
      />
    </Variant>
    <Variant title="Hidden Label">
      <DAutoComplete
        label="Assign to"
        :options="people"
        v-model="person"
        @update:modelValue="logEvent('autocomplete update', $event)"
        hideLabel
        placeholder="Type the person's name"
      />
    </Variant>
  </Story>
</template>
