<script setup lang="ts">
import { type HTMLAttributes, onMounted, onUnmounted } from 'vue';

import { cn } from '../../utils';
import DButton from '../DButton/DButton.vue';

export interface DToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: 'success' | 'error'; // | "info" | "warning";
  duration?: number;
  class?: HTMLAttributes['class'];
}

let timeoutId: number;

const props = withDefaults(defineProps<DToastProps>(), {
  variant: 'success',
  class: '',
});

const emit = defineEmits<{
  dismiss: [id: string];
}>();

// static computed
const isSuccess = props.variant === 'success';
const isError = props.variant === 'error';

if (props.duration) {
  onMounted(() => {
    timeoutId = window.setTimeout(() => {
      emit('dismiss', props.id);
    }, props.duration);
  });

  onUnmounted(() => {
    clearTimeout(timeoutId);
  });
}
</script>

<template>
  <div
    :class="
      cn(
        'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white dark:ring-opacity-10',
        props.class,
      )
    "
  >
    <div class="p-4">
      <div :class="['flex gap-3', props.description ? 'items-start' : 'items-center']">
        <span
          v-if="isSuccess"
          class="i-lucide-check-circle size-6 flex-shrink-0 text-green-500 dark:text-green-400"
          aria-hidden="true"
        ></span>
        <span
          v-else-if="isError"
          class="i-lucide-alert-triangle size-6 flex-shrink-0 text-danger-500 dark:text-danger-400"
          aria-hidden="true"
        ></span>
        <div :class="['w-0 flex-1', props.description && 'pt-0.5']">
          <p class="text-sm font-medium">{{ props.title }}</p>
          <p v-if="props.description" class="mt-0.5 text-sm text-black/60 dark:text-white/60">
            {{ props.description }}
          </p>
        </div>
        <DButton
          class="flex-shrink-0 p-0 text-black/60 shadow-none ring-0 hover:text-black dark:bg-transparent dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
          @click="emit('dismiss', props.id)"
        >
          <span class="sr-only">Close</span>
          <span class="i-lucide-x block size-5" aria-hidden="true"></span>
        </DButton>
      </div>
    </div>
  </div>
</template>
