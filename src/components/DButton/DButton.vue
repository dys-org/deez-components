<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'tertiary' | null;
    danger?: boolean;
    loading?: boolean;
  }>(),
  { variant: 'primary', danger: false, loading: false },
);

// const isPrimary = computed(() => props.variant === 'primary');
// const isSecondary = computed(() => props.variant === 'secondary');
// const isTertiary = computed(() => props.variant === 'tertiary');
const isDanger = computed(() => props.danger === true);
</script>

<template>
  <button
    type="button"
    class="rounded bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    :class="[
      isDanger
        ? 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
        : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
    ]"
  >
    <slot>Button text</slot>
  </button>
</template>
