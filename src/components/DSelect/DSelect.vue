<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { DInlineError } from '../DInlineError';

export interface DSelectProps {
  modelValue: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  labelLeft?: boolean;
  status?: 'error';
  errorMessage?: string;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DSelectProps>(), {
  hideLabel: false,
  labelLeft: false,
  errorMessage: 'Invalid input',
});

const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();

// static computed values
const id = (attrs.id as string) || props.name;

const isError = computed(() => props.status === 'error');
const picked = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <div :class="{ 'flex items-center gap-4': props.labelLeft }">
    <label
      :for="id"
      class="block whitespace-nowrap text-sm leading-6"
      :class="{ 'sr-only': props.hideLabel }"
    >
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
      <DInlineError v-if="isError" :message="props.errorMessage" />
    </label>
    <select
      v-bind="attrs"
      :id="id"
      v-model="picked"
      :name="props.name"
      class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 dark:bg-white/5 sm:text-sm sm:leading-6"
      :class="[
        isError
          ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
          : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
        { 'mt-2': !props.labelLeft && !props.hideLabel },
      ]"
      :aria-invalid="isError"
      :aria-errormessage="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
    >
      <slot />
    </select>
    <DInlineError
      v-if="isError && props.hideLabel"
      :id="`${id}ErrorMessage`"
      :message="props.errorMessage"
      class="mt-2"
    />
  </div>
</template>
==
