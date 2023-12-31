<script setup lang="ts">
import DButton from '../DButton/DButton.vue';

import IconAlertTriangle from '~icons/lucide/alert-triangle';
import IconCheckCircle from '~icons/lucide/check-circle';
import IconX from '~icons/lucide/x';

export interface DToastProps {
  show: boolean;
  title: string;
  description?: string;
  danger?: boolean;
}

const props = withDefaults(defineProps<DToastProps>(), {
  show: false,
});

const emit = defineEmits<{
  'update:show': [value: boolean];
}>();
</script>

<template>
  <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
    <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="props.show"
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white dark:ring-opacity-10"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <IconAlertTriangle
                v-if="props.danger"
                class="h-6 w-6 text-danger-500 dark:text-danger-400"
                aria-hidden="true"
              />
              <IconCheckCircle
                v-else
                class="h-6 w-6 text-green-500 dark:text-green-400"
                aria-hidden="true"
              />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium">{{ props.title }}</p>
              <p v-if="props.description" class="mt-1 text-sm text-black/60 dark:text-white/60">
                {{ props.description }}
              </p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <DButton
                class="p-0 text-black/60 shadow-none ring-0 hover:text-black dark:bg-transparent dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                @click="emit('update:show', false)"
              >
                <span class="sr-only">Close</span>
                <IconX class="h-5 w-5" aria-hidden="true" />
              </DButton>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
