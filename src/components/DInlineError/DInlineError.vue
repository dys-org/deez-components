<script setup lang="ts">
import IconAlertCircle from '~icons/lucide/alert-circle';

export interface DInlineErrorProps {
  message: string;
}

const props = withDefaults(defineProps<DInlineErrorProps>(), {
  message: 'This field is invalid.',
});
</script>

<template>
  <span class="flex items-center gap-1 text-danger-600 dark:text-danger-500">
    <slot>
      <IconAlertCircle class="size-4 text-danger-500" aria-hidden="true" />
      {{ props.message }}
    </slot>
  </span>
</template>
