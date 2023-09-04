<script setup lang="ts">
import { ref } from 'vue';
import DAutoComplete, { type DAutoCompleteOption } from './DAutoComplete.vue';
import { logEvent } from 'histoire/client';

import IconSearch from '~icons/feather/search';
import IconPaperclip from '~icons/feather/paperclip';
import IconZap from '~icons/feather/zap';
import IconAperture from '~icons/feather/aperture';

const selected = ref<DAutoCompleteOption | null>(null);

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
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Basic with description">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto1"
          :options="basic"
          description="Select a person to assign to this task."
          @update:modelValue="logEvent('autocomplete update', $event)"
        />
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>
    <Variant title="With Error">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto2"
          :options="basic"
          description="Select a person to assign to this task."
          error-message="This is a required field."
          status="error"
          @update:modelValue="logEvent('autocomplete update', $event)"
        />
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>
    <Variant title="Images">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto3"
          :options="people"
          @update:modelValue="logEvent('autocomplete update', $event)"
        />
        <p class="mt-8 font-mono">ID Value: {{ selected?.id }}</p>
      </div>
    </Variant>
    <Variant title="Icons">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Check these out"
          name="auto4"
          :options="things"
          @update:modelValue="logEvent('autocomplete update', $event)"
        />
        <p class="mt-8 font-mono">Value: {{ selected }}</p>
      </div>
    </Variant>
    <Variant title="Hidden Label">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto5"
          :options="people"
          hide-label
          placeholder="Type the person's name"
          @update:modelValue="logEvent('autocomplete update', $event)"
        />
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>
    <Variant title="Hidden Label with Error">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto6"
          :options="people"
          hide-label
          placeholder="Type the person's name"
          status="error"
          error-message="This is a required field."
          @update:modelValue="logEvent('autocomplete update', $event)"
        />
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>
    <Variant title="With icon (Search)">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto7"
          :options="people"
          hide-label
          placeholder="Search"
          @update:modelValue="logEvent('autocomplete update', $event)"
        >
          <template #icon> <IconSearch class="h-5 w-5" aria-hidden="true" /></template>
        </DAutoComplete>
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>
  </Story>
</template>
