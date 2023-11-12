<script setup lang="ts">
import { type ButtonHTMLAttributes, computed } from 'vue';
import { twMerge } from 'tailwind-merge';

export interface DButtonProps {
  variant?: 'default' | 'primary' | 'link';
  danger?: boolean;
  loading?: boolean;
  type?: ButtonHTMLAttributes['type'];
  size?: 'sm' | 'lg';
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DButtonProps>(), {
  variant: 'default',
  danger: false,
  loading: false,
  type: 'button',
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

// static computed values
const isDefault = props.variant === 'default';
const isPrimary = props.variant === 'primary';
const isLink = props.variant === 'link';
const isDanger = props.danger === true;
const isSmall = props.size === 'small';
const isLarge = props.size === 'large';

const isLoading = computed(() => props.loading === true);

function onClick(e: MouseEvent) {
  if (isLoading.value) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  emit('click', e);
}
</script>

<template>
  <button
    :type="props.type"
    :class="
      twMerge(
        'inline-flex items-center gap-x-2 rounded px-3 py-1.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:pointer-events-none disabled:opacity-60',
        isLoading && 'cursor-not-allowed opacity-60',

        isSmall && 'px-2 py-1 text-xs',
        isLarge && 'px-4 py-2.5 text-base',

        isDefault &&
          'bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-transparent dark:hover:bg-white/[.15]',
        isDefault && isDanger && 'text-danger-600 dark:text-danger-500',

        isPrimary &&
          'bg-primary-600 text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400',
        isPrimary &&
          isDanger &&
          'bg-danger-600 hover:bg-danger-700 dark:bg-danger-500 dark:hover:bg-danger-400',

        isLink &&
          'text-primary-600 hover:text-primary-700 hover:underline focus:underline dark:text-primary-500 dark:hover:text-primary-400',
        isLink &&
          isDanger &&
          'text-danger-600 hover:text-danger-700 dark:text-danger-500 dark:hover:text-danger-400',

        $attrs.class as string,
      )
    "
    :aria-disabled="isLoading || undefined"
    v-bind="$attrs"
    @click="onClick"
  >
    <span v-if="$slots.iconStart || isLoading" class="-ml-0.5 h-5 w-5 text-current">
      <svg
        v-if="isLoading"
        aria-label="Loading"
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
      <slot v-else name="iconStart" />
    </span>
    <slot>Default Text</slot>
    <span v-if="$slots.iconEnd" class="-mr-0.5 h-5 w-5 text-current">
      <slot name="iconEnd" />
    </span>
  </button>
</template>
