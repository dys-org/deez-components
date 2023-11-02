<script setup lang="ts">
import { computed } from 'vue';

import { DInlineError } from '../DInlineError';

export interface DFormGroupProps {
  for: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
}

const props = withDefaults(defineProps<DFormGroupProps>(), {
  hideLabel: false,
  errorMessage: 'This field is invalid.',
});

const isError = computed(() => props.status === 'error');
</script>

<template>
  <div>
    <label class="block text-sm leading-6" :class="{ 'sr-only': props.hideLabel }" :for="props.for">
      <span class="whitespace-nowrap font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
      <DInlineError v-if="isError" :message="errorMessage" />
    </label>

    <slot />
    <DInlineError
      v-if="isError && props.hideLabel"
      :id="`${props.for}ErrorMessage`"
      :message="props.errorMessage"
      class="mt-2"
    />
  </div>
</template>
