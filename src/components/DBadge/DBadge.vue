<script setup lang="ts">
import { type ClassNameValue, twMerge } from 'tailwind-merge';

import IconX from '~icons/feather/x';

export interface DBadgeProps {
  color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
  size?: 'small' | 'default';
  removeable?: boolean;
  class?: ClassNameValue;
}

const props = withDefaults(defineProps<DBadgeProps>(), {
  color: 'gray',
  size: 'default',
  removeable: false,
});

const isGray = props.color === 'gray';
const isRed = props.color === 'red';
const isYellow = props.color === 'yellow';
const isGreen = props.color === 'green';
const isBlue = props.color === 'blue';
const isIndigo = props.color === 'indigo';
const isPurple = props.color === 'purple';
const isPink = props.color === 'pink';
</script>

<template>
  <span
    :class="
      twMerge(
        'inline-flex items-center gap-x-0.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ',
        isGray &&
          'dark: bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20',
        isRed &&
          'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
        isYellow &&
          'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20',
        isGreen &&
          'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20',
        isBlue &&
          'bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
        isIndigo &&
          'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30',
        isPurple &&
          'bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30',
        isPink &&
          'bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20',
        props.class,
      )
    "
  >
    <slot />

    <button
      v-if="props.removeable"
      type="button"
      :class="[
        'group relative -mr-1 h-3.5 w-3.5 rounded-sm',
        isGray && 'hover:bg-gray-500/20',
        isRed && 'hover:bg-red-600/20',
        isYellow && 'hover:bg-yellow-600/20',
        isGreen && 'hover:bg-green-600/20',
        isBlue && 'hover:bg-blue-600/20',
        isIndigo && 'hover:bg-indigo-600/20',
        isPurple && 'hover:bg-purple-600/20',
        isPink && 'hover:bg-pink-600/20',
      ]"
    >
      <span class="sr-only">Remove</span>
      <IconX
        :class="[
          'h-3.5 w-3.5',
          isGray && 'stroke-gray-600/50 group-hover:stroke-gray-600/75',
          isRed && 'stroke-red-600/50 group-hover:stroke-red-600/75',
          isYellow && 'stroke-yellow-700/50 group-hover:stroke-yellow-700/75',
          isGreen && 'stroke-green-700/50 group-hover:stroke-green-700/75',
          isBlue && 'stroke-blue-700/50 group-hover:stroke-blue-700/75',
          isIndigo && 'stroke-indigo-600/50 group-hover:stroke-indigo-600/75',
          isPurple && 'stroke-violet-600/50 group-hover:stroke-violet-600/75',
          isPink && 'stroke-pink-700/50 group-hover:stroke-pink-700/75',
        ]"
      />
    </button>
  </span>
</template>
