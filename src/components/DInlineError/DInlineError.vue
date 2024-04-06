<script setup lang="ts">
export interface DInlineErrorProps {
  message: string;
}

const props = withDefaults(defineProps<DInlineErrorProps>(), {
  message: 'This field is invalid.',
});
</script>

<template>
  <span class="flex items-center gap-1.5 text-danger-600 dark:text-danger-500">
    <slot>
      <span class="i-lucide-alert-circle size-4 text-danger-500" aria-hidden="true"></span>
      {{ props.message }}
    </slot>
  </span>
</template>
