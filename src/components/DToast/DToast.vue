<script setup lang="ts">
import DButton from '../DButton/DButton.vue';

export interface DToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: 'success' | 'error'; // | "info" | "warning";
}

const props = withDefaults(defineProps<DToastProps>(), {
  variant: 'success',
});

const emit = defineEmits<{
  dismiss: [id: string];
}>();

// static computed
const isSuccess = props.variant === 'success';
const isError = props.variant === 'error';
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
      appear
    >
      <div
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white dark:ring-opacity-10"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span
                v-if="isSuccess"
                class="i-lucide-check-circle size-6 text-green-500 dark:text-green-400"
                aria-hidden="true"
              ></span>
              <span
                v-else-if="isError"
                class="i-lucide-alert-triangle size-6 text-danger-500 dark:text-danger-400"
                aria-hidden="true"
              ></span>
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
                @click="emit('dismiss', props.id)"
              >
                <span class="sr-only">Close</span>
                <span class="i-lucide-x block size-5" aria-hidden="true"></span>
              </DButton>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
