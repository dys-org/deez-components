<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { type ButtonHTMLAttributes, computed } from 'vue';

import type { VueClass } from '../../types';

export interface DButtonProps {
  variant?: 'default' | 'primary' | 'link';
  danger?: boolean;
  loading?: boolean;
  type?: ButtonHTMLAttributes['type'];
  size?: 'sm' | 'lg';
  useFocusVisible?: boolean;
  class?: VueClass;
  iconStart?: string;
  iconEnd?: string;
}

const props = withDefaults(defineProps<DButtonProps>(), {
  variant: 'default',
  danger: false,
  loading: false,
  type: 'button',
  useFocusVisible: true,
  class: '',
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

// static computed values
const isDefault = props.variant === 'default';
const isPrimary = props.variant === 'primary';
const isLink = props.variant === 'link';
const isDanger = props.danger === true;
const isSmall = props.size === 'sm';
const isLarge = props.size === 'lg';

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
        'inline-flex items-center gap-x-2 rounded px-3 py-1.5 text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60',
        useFocusVisible
          ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'
          : 'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-500',
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

        props.class as string,
      )
    "
    :aria-disabled="isLoading || undefined"
    @click="onClick"
  >
    <svg
      v-if="isLoading"
      aria-label="Loading"
      role="status"
      class="-ml-0.5 size-5 animate-spin text-current"
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
    <span
      v-else-if="props.iconStart"
      :class="[props.iconStart, '-ml-0.5 block size-5']"
      aria-hidden="true"
    ></span>
    <slot>Default Text</slot>

    <span
      v-if="props.iconEnd"
      :class="[props.iconEnd, '-mr-0.5 block size-5']"
      aria-hidden="true"
    ></span>
  </button>
</template>
