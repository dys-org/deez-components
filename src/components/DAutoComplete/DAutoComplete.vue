<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';
import IconCheck from '~icons/feather/check';
import IconChevronDown from '~icons/feather/chevron-down';
import IconX from '~icons/feather/x';

export interface Option {
  id: number;
  name: string;
  imageUrl: string;
}

export interface DAutoCompleteProps {
  modelValue: Option | null;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
  options: Option[];
  placeholder?: string;
}

const props = withDefaults(defineProps<DAutoCompleteProps>(), { placeholder: '' });

const emit = defineEmits(['update:modelValue']);

const query = ref('');

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
const filtered = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((opt) => {
        return opt.name.toLowerCase().includes(query.value.toLowerCase());
      }),
);
</script>
<template>
  <Combobox as="div" v-model="selected">
    <ComboboxLabel class="block text-sm font-medium leading-6" :class="{ 'sr-only': hideLabel }">
      {{ props.label }}
    </ComboboxLabel>
    <div class="relative mt-2">
      <ComboboxInput
        class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-white/5 dark:ring-white/10 dark:placeholder:text-white/30 dark:focus:ring-primary-500 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6"
        @change="query = $event.target.value"
        :displayValue="(opt) => (opt as Option)?.name"
        :placeholder="placeholder"
      />
      <ComboboxButton
        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <IconChevronDown class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filtered.length > 0"
        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 sm:text-sm"
      >
        <ComboboxOption
          v-for="opt in filtered"
          :key="opt.id"
          :value="opt"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-3 pr-9 dark:bg-white/5 ',
              { 'bg-primary-600 text-white dark:bg-primary-600': active },
            ]"
          >
            <div class="flex items-center">
              <img :src="opt.imageUrl" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
              <span :class="['ml-3 truncate', selected && 'font-semibold']">
                {{ opt.name }}
              </span>
            </div>

            <span
              v-if="selected"
              :class="[
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-primary-600 dark:text-primary-400',
              ]"
            >
              <IconCheck class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
      <!-- Clear Button -->
      <button
        type="button"
        @click="emit('update:modelValue', null)"
        aria-label="Clear"
        class="absolute inset-y-0 right-8 flex items-center p-0.5 text-lg hover:bg-gray-50 dark:hover:bg-white/5"
      >
        <IconX class="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  </Combobox>
</template>
