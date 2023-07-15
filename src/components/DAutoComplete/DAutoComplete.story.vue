<script setup lang="ts">
import { ref } from 'vue';
import DAutoComplete, { type Option } from './DAutoComplete.vue';
import { logEvent } from 'histoire/client';

import IconSearch from '~icons/feather/search';
import IconPaperclip from '~icons/feather/paperclip';
import IconZap from '~icons/feather/zap';
import IconAperture from '~icons/feather/aperture';

const selected = ref<Option | null>(null);

const basic = [
  { id: 1, label: 'David Youngquist Soards', description: 'Software Engineer' },
  { id: 2, label: 'Gretel Durruty Soards', description: 'OR Nurse' },
  { id: 3, label: 'Sebastian Alexander Soards', description: 'Toddler' },
];
const people = [
  {
    id: 1,
    label: 'David Youngquist Soards',
    description: 'Software Engineer',
    left: {
      imgURL:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    label: 'Gretel Durruty Soards',
    description: 'OR Nurse',
    left: {
      imgURL:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    label: 'Sebastian Alexander Soards',
    description: 'Toddler',
    left: {
      imgURL:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];
const things = [
  { id: 'pa', label: 'Paperclip', left: { icon: IconPaperclip } },
  { id: 'za', label: 'Zap', left: { icon: IconZap } },
  { id: 'ap', label: 'Aperture', left: { icon: IconAperture } },
];
</script>

<template>
  <Story>
    <Variant title="Basic with description">
      <DAutoComplete
        label="Assign to"
        name="auto1"
        :options="basic"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
        description="Select a person to assign to this task."
      />
      <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
    </Variant>
    <Variant title="With Error">
      <DAutoComplete
        label="Assign to"
        name="auto2"
        :options="basic"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
        description="Select a person to assign to this task."
        error-message="This is a required field."
        status="error"
      />
      <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
    </Variant>
    <Variant title="Images">
      <DAutoComplete
        label="Assign to"
        name="auto3"
        :options="people"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
      />
      <p class="mt-8 font-mono">ID Value: {{ selected?.id }}</p>
    </Variant>
    <Variant title="Icons">
      <DAutoComplete
        label="Check these out"
        name="auto4"
        :options="things"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
      />
      <p class="mt-8 font-mono">Value: {{ selected }}</p>
    </Variant>
    <Variant title="Hidden Label">
      <DAutoComplete
        label="Assign to"
        name="auto5"
        :options="people"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
        hideLabel
        placeholder="Type the person's name"
      />
      <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
    </Variant>
    <Variant title="Hidden Label with Error">
      <DAutoComplete
        label="Assign to"
        name="auto6"
        :options="people"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
        hideLabel
        placeholder="Type the person's name"
        status="error"
        error-message="This is a required field."
      />
      <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
    </Variant>
    <Variant title="With icon (Search)">
      <DAutoComplete
        label="Assign to"
        name="auto7"
        :options="people"
        v-model="selected"
        @update:modelValue="logEvent('autocomplete update', $event)"
        hideLabel
        placeholder="Search"
      >
        <template #icon> <IconSearch class="h-5 w-5" aria-hidden="true" /></template>
      </DAutoComplete>
      <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
    </Variant>
  </Story>
</template>
