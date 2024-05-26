<script setup lang="ts">
import DToast, { type DToastProps } from './DToast.vue';

const props = defineProps<{ notifications: DToastProps[] }>();

const emit = defineEmits<{
  dismiss: [id: string];
}>();
</script>

<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex flex-col justify-end gap-3 px-4 py-6 sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <TransitionGroup
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <DToast
          v-for="toast in props.notifications"
          :key="toast.id"
          v-bind="toast"
          @dismiss="emit('dismiss', $event)"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
