<script setup lang="ts">
import { computed } from 'vue';

export interface DAvatarProps {
  image?: string;
  notifications?: number;
}

const props = withDefaults(defineProps<DAvatarProps>(), { notifications: 0 });

const hasNotif = computed(() => props.notifications > 0);
</script>

<template>
  <span class="relative inline-block">
    <img v-if="props.image" class="size-10 rounded-full" :src="props.image" alt="" />
    <svg
      v-else
      class="size-10 rounded-full bg-gray-100 text-gray-300 dark:bg-gray-800 dark:text-gray-600"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <span
      v-if="hasNotif"
      class="absolute bottom-0 right-0 block size-2.5 rounded-full bg-green-400 ring-2 ring-white"
    />
  </span>
</template>
