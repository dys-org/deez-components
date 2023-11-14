<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';

import { DFormGroup } from '../DFormGroup';

export interface DTextareaProps {
  modelValue?: string;
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  rows?: number;
  status?: 'error';
  errorMessage?: string;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DTextareaProps>(), {
  modelValue: '',
  hideLabel: false,
  errorMessage: 'This field is invalid.',
});

const emit = defineEmits(['update:modelValue']);

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
      <slot name="before" />
      <textarea
        v-bind="$attrs"
        :id="props.id"
        v-model="input"
        :rows="props.rows"
        :name="($attrs.name as string) || props.id"
        :class="
          twMerge(
            'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset dark:bg-white/5  dark:placeholder:text-white/30 sm:text-sm sm:leading-6',
            isError
              ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-600 dark:ring-gray-600 dark:focus:ring-primary-500',
            $attrs.class as string,
          )
        "
      />
      <slot name="after" />
    </div>
  </DFormGroup>
</template>
