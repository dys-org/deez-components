<script setup lang="ts">
import { type HTMLAttributes, computed, ref } from 'vue';

import { cn } from '../../utils';
import { DFormGroup } from '../DFormGroup';

export interface DInputNumberProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
  min?: number;
  max?: number;
  step?: number;
  class?: HTMLAttributes['class'];
}

defineOptions({ inheritAttrs: false });

const model = defineModel<number | string>({ default: '' });

const props = withDefaults(defineProps<DInputNumberProps>(), {
  hideLabel: false,
  errorMessage: 'Invalid input',
  class: '',
});

const inputEl = ref<HTMLInputElement | null>(null);

const isError = computed(() => props.status === 'error');
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
        v-model="model"
        type="number"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :name="($attrs.name as string) || props.id"
        :class="
          cn(
            'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset [-moz-appearance:_textfield] placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
            isError
              ? 'pr-10 text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
            props.class,
          )
        "
        :aria-invalid="isError"
        :aria-describedby="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
      />

      <div class="absolute inset-y-0 right-0 flex items-center pr-2">
        <!-- increment/decrement buttons -->
        <button
          type="button"
          aria-label="Decrement value"
          class="p-0.5 hover:bg-gray-50 dark:hover:bg-white/5"
          @click="
            inputEl?.stepDown(1);
            model = parseFloat(inputEl?.value as string);
          "
        >
          <span class="i-lucide-minus" aria-hidden="true"></span>
        </button>
        <button
          type="button"
          aria-label="Increment value"
          class="p-0.5 hover:bg-gray-50 dark:hover:bg-white/5"
          @click="
            inputEl?.stepUp(1);
            model = parseFloat(inputEl?.value as string);
          "
        >
          <span class="i-lucide-plus" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </DFormGroup>
</template>
