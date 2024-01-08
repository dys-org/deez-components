<script setup lang="ts">
import { computed, ref } from 'vue';
import { twMerge } from 'tailwind-merge';

import type { VueClass } from '../../types';
import { DFormGroup } from '../DFormGroup';

import IconMinus from '~icons/lucide/minus';
import IconPlus from '~icons/lucide/plus';

export interface DInputNumberProps {
  modelValue?: number | string;
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
  class?: VueClass;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DInputNumberProps>(), {
  modelValue: '',
  hideLabel: false,
  errorMessage: 'Invalid input',
  class: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: DInputNumberProps['modelValue']];
}>();

const inputEl = ref<HTMLInputElement | null>(null);

const isError = computed(() => props.status === 'error');

const input = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <DFormGroup
    :for="props.id"
    :label="props.label"
    :hide-label="props.hideLabel"
    :description="props.description"
    :status="props.status"
    :error-message="props.errorMessage"
  >
    <div :class="['relative', !props.hideLabel && 'mt-2']">
      <input
        v-bind="$attrs"
        :id="props.id"
        ref="inputEl"
        v-model="input"
        type="number"
        :name="($attrs.name as string) || props.id"
        :class="
          twMerge(
            'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset [-moz-appearance:_textfield] placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 sm:text-sm sm:leading-6 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
            isError
              ? 'pr-10 text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
            props.class as string,
          )
        "
        :aria-invalid="isError"
        :aria-errormessage="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
      />

      <div class="absolute inset-y-0 right-0 flex items-center pr-2">
        <!-- increment/decrement buttons -->
        <button
          type="button"
          aria-label="Decrement value"
          class="p-0.5 hover:bg-gray-50 dark:hover:bg-white/5"
          @click="
            inputEl?.stepDown(1);
            emit('update:modelValue', parseFloat(inputEl?.value as string));
          "
        >
          <IconMinus class="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Increment value"
          class="p-0.5 text-lg hover:bg-gray-50 dark:hover:bg-white/5"
          @click="
            inputEl?.stepUp(1);
            emit('update:modelValue', parseFloat(inputEl?.value as string));
          "
        >
          <IconPlus class="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </DFormGroup>
</template>
