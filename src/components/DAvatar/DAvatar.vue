<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { cn } from '@/utils';

export interface DAvatarProps {
  image?: string;
  alt?: string;
  notifications?: number;
  notificationType?: 'primary' | 'danger';
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<DAvatarProps>(), {
  notifications: 0,
  notificationType: 'primary',
  alt: 'Avatar',
});
</script>

<template>
  <span class="relative inline-block">
    <img
      v-if="props.image"
      :class="cn('size-8 rounded-full', props.class)"
      :src="props.image"
      :alt="props.alt"
    />
    <svg
      v-else
      :class="
        cn(
          'size-8 rounded-full bg-gray-100 text-gray-300 dark:bg-gray-800 dark:text-gray-600',
          props.class,
        )
      "
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <title>{{ props.alt }}</title>
      <path
        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <span
      v-if="props.notifications > 0"
      :class="[
        'absolute bottom-0 right-0 block size-2.5 rounded-full ring-2 ring-white',
        props.notificationType === 'danger' ? 'bg-danger-400' : 'bg-primary-400',
      ]"
    />
  </span>
</template>
