<script setup lang="ts">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';
import { type HTMLAttributes, computed, ref } from 'vue';

import { cn, dom } from '../../utils';
import { DInlineError } from '../DInlineError';

export interface DAutoCompleteOption {
  id: number | string;
  label: string;
  description?: string;
  left?: {
    imgURL?: string;
    icon?: string;
  };
}

export interface DAutoCompleteProps {
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
  options: DAutoCompleteOption[];
  placeholder?: string;
  multiple?: boolean;
  iconStart?: string;
  class?: HTMLAttributes['class'];
}

const model = defineModel<DAutoCompleteOption | DAutoCompleteOption[] | null>({ default: null });

const props = withDefaults(defineProps<DAutoCompleteProps>(), {
  hideLabel: false,
  errorMessage: 'Invalid input',
  multiple: false,
});

const query = ref('');

const inputRef = ref<HTMLInputElement | null>(null);

const isError = computed(() => props.status === 'error');

const filtered = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((opt) => {
        return (
          opt.label.toLowerCase().includes(query.value.toLowerCase()) ||
          opt.description?.toLowerCase().includes(query.value.toLowerCase())
        );
      }),
);

function onClear() {
  model.value = null;
  dom(inputRef)?.focus();
}

function handleDisplayValue(opt: unknown) {
  if (Array.isArray(opt)) {
    return opt.map((o) => o.label).join(', ');
  }
  return (opt as DAutoCompleteOption)?.label;
}
</script>
<template>
  <Combobox v-model="model" as="div" :name="props.name" :multiple="props.multiple" by="id">
    <ComboboxLabel class="block text-sm leading-6" :class="{ 'sr-only': hideLabel }">
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
      <DInlineError v-if="isError" :message="props.errorMessage" />
    </ComboboxLabel>
    <div class="relative mt-2">
      <div class="absolute inset-y-0 left-2 flex items-center text-black/60 dark:text-white/60">
        <span :class="[props.iconStart, 'size-5']" aria-hidden="true"></span>
      </div>
      <ComboboxInput
        ref="inputRef"
        :class="
          cn(
            'w-full truncate rounded-md border-0 bg-white py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6',
            isError
              ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
            model && !props.multiple ? 'pr-14' : 'pr-9',
            props.iconStart ? 'pl-9' : 'pl-3',
            props.class,
          )
        "
        :display-value="handleDisplayValue"
        :placeholder="placeholder"
        :aria-invalid="isError"
        :aria-describedby="isError && props.hideLabel ? `${props.name}ErrorMessage` : undefined"
        @change="query = $event.target.value"
      />
      <ComboboxButton
        class="absolute inset-0 flex cursor-default items-center px-2 focus:outline-none"
      >
        <span
          class="i-lucide-chevron-down ml-auto size-5 text-black/60 dark:text-white/60"
          aria-hidden="true"
        ></span>
      </ComboboxButton>

      <ComboboxOptions
        v-if="filtered.length > 0"
        class="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-white dark:ring-opacity-10 sm:text-sm"
      >
        <ComboboxOption
          v-for="opt in filtered"
          :key="opt.id"
          v-slot="{ active, selected }"
          :value="opt"
          as="template"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-3 pr-9',
              active && 'bg-primary-600 text-white',
            ]"
          >
            <div class="flex items-center">
              <img
                v-if="opt.left?.imgURL"
                :src="opt.left.imgURL"
                alt=""
                class="mr-3 size-6 flex-shrink-0 rounded-full"
              />
              <span
                v-else-if="opt.left?.icon"
                :class="[
                  'mr-3 size-3.5',
                  opt.left.icon,
                  active ? 'text-white' : 'text-black/60 dark:text-white/60',
                ]"
                aria-hidden="true"
              ></span>
              <span :class="['truncate', selected && 'font-semibold']">
                {{ opt.label }}
              </span>
              <span
                v-if="opt.description"
                :class="[
                  'ml-2 truncate',
                  active ? 'text-white/60' : 'text-black/40 dark:text-white/40',
                ]"
              >
                {{ opt.description }}
              </span>
            </div>

            <span
              v-if="selected"
              :class="[
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-primary-600 dark:text-primary-400',
              ]"
            >
              <span class="i-lucide-check size-5" aria-hidden="true"></span>
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
      <!-- Clear Button -->
      <div class="absolute inset-y-0 right-8 flex items-center">
        <button
          v-if="!props.multiple && model"
          type="button"
          aria-label="Clear"
          class="rounded-full p-0.5 text-lg text-primary-600 transition-colors hover:bg-black/5 hover:text-primary-700 dark:text-primary-500 dark:hover:bg-white/5 dark:hover:text-primary-400"
          @click="onClear()"
        >
          <span class="i-lucide-x block size-4" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <DInlineError
      v-if="isError && props.hideLabel"
      :id="`${props.name}ErrorMessage`"
      :message="props.errorMessage"
      class="mt-2"
    />
  </Combobox>
</template>
