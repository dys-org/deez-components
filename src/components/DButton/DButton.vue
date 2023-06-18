<script setup lang="ts">
import { computed } from 'vue';

export interface DButtonProps {
  variant?: 'default' | 'primary' | 'text';
  danger?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
}

const props = withDefaults(defineProps<DButtonProps>(), {
  variant: 'default',
  danger: false,
  loading: false,
  type: 'button',
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const isDefault = computed(() => props.variant === 'default');
const isPrimary = computed(() => props.variant === 'primary');
const isText = computed(() => props.variant === 'text');

const isDanger = computed(() => props.danger === true);

function onClick(e: MouseEvent) {
  if (props.loading) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  emit('click', e);
}
</script>

<template>
  <button
    v-if="isPrimary"
    :type="props.type"
    class="btn inline-flex items-center gap-x-2 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[
      isDanger
        ? 'bg-danger-600 hover:bg-danger-500 focus-visible:outline-danger-600'
        : 'bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600',
      { 'btn-disabled': props.loading },
    ]"
    :aria-disabled="props.loading"
    @click="onClick"
  >
    <span v-if="$slots.icon || props.loading" class="-ml-0.5 h-5 w-5 text-white">
      <svg
        v-if="props.loading"
        aria-label="Loading..."
        role="status"
        class="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <slot v-else name="icon" />
    </span>
    <slot>Primary Button</slot>
  </button>

  <button
    v-else-if="isText"
    :type="props.type"
    class="btn hover:underline focus:underline"
    :class="[
      isDanger
        ? 'text-danger-600 hover:text-danger-500'
        : 'text-primary-600 hover:text-primary-500',
    ]"
    @click="onClick"
  >
    <slot>Text Button</slot>
  </button>

  <button
    v-else-if="isDefault"
    :type="props.type"
    class="btn bg-white shadow-sm ring-1 ring-inset"
    :class="[
      isDanger
        ? 'text-danger-600 ring-danger-300 hover:bg-danger-50'
        : 'ring-gray-300 hover:bg-gray-50',
    ]"
    @click="onClick"
  >
    <slot>Default Button</slot>
  </button>
</template>

<style>
.btn {
  @apply rounded px-3.5 py-2.5 text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60;
}
.btn-disabled {
  @apply cursor-not-allowed opacity-60;
}
</style>
