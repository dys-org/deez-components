<script setup lang="ts">
import { ref, watch } from 'vue';
import { logEvent } from 'histoire/client';

import { DBadge } from '../DBadge';

import DAutoComplete, { type DAutoCompleteOption } from './DAutoComplete.vue';

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
  { id: 'pa', label: 'Paperclip', left: { icon: 'i-lucide-paperclip' } },
  { id: 'za', label: 'Zap', left: { icon: 'i-lucide-zap' } },
  { id: 'ap', label: 'Aperture', left: { icon: 'i-lucide-aperture' } },
];

const selected = ref<DAutoCompleteOption | null>(null);
const selectedList = ref<DAutoCompleteOption[]>([]);

watch(
  () => selected.value,
  (newValue) => {
    logEvent('autocomplete update', newValue);
  },
);
</script>

<template>
  <Story :layout="{ type: 'single', iframe: true }">
    <Variant title="Basic with description">
      <div class="w-96">
        <DAutoComplete
          v-model="selected"
          label="Assign to"
          name="auto1"
          :options="basic"
          description="Select a person to assign to this task."
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
        />
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>

    <Variant title="Images">
      <div class="w-96">
        <DAutoComplete v-model="selected" label="Assign to" name="auto3" :options="people" />
        <p class="mt-8 font-mono">ID Value: {{ selected?.id }}</p>
      </div>
    </Variant>

    <Variant title="Icons">
      <div class="w-96">
        <DAutoComplete v-model="selected" label="Check these out" name="auto4" :options="things" />
        <p class="mt-8 font-mono">Value: {{ selected }}</p>
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
          icon-start="i-lucide-search"
        >
        </DAutoComplete>
        <p class="mt-8 font-mono">Label Value: {{ selected?.label }}</p>
      </div>
    </Variant>

    <Variant title="Mutiple with description">
      <div class="w-96">
        <ul class="flex min-h-[2rem] gap-4">
          <li v-for="person in selectedList" :key="person.id">
            <DBadge>{{ person.label }}</DBadge>
          </li>
        </ul>
        <DAutoComplete
          v-model="selectedList"
          label="Assign to"
          name="auto8"
          :options="basic"
          description="Select people to assign to this task."
          multiple
          class="mt-2"
        />
      </div>
    </Variant>
  </Story>
</template>
