<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';

import { cn } from '@/utils';

import { DFormGroup } from '../DFormGroup';

export interface DTextareaProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  rows?: number;
  status?: 'error';
  errorMessage?: string;
  class?: HTMLAttributes['class'];
}

defineOptions({ inheritAttrs: false });

const model = defineModel<string>({ default: '' });

const props = withDefaults(defineProps<DTextareaProps>(), {
  hideLabel: false,
  errorMessage: 'This field is invalid.',
  class: '',
});

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
      <slot name="before" />
      <textarea
        v-bind="$attrs"
        :id="props.id"
        v-model="model"
        :rows="props.rows"
        :name="($attrs.name as string) || props.id"
        :class="
          cn(
            'form-textarea block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-opacity-50 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] dark:disabled:ring-opacity-50 sm:text-sm sm:leading-6',
            isError
              ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-600 dark:ring-gray-600 dark:focus:ring-primary-500',
            props.class,
          )
        "
      />
      <slot name="after" />
    </div>
  </DFormGroup>
</template>
