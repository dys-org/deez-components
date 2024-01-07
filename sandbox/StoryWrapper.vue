<script lang="ts" setup>
import type { Story, Variant } from 'histoire';

const props = defineProps<{
  story: Story;
  variant?: Variant;
}>();

function hasWrapper() {
  // @ts-ignore
  return props.story.meta?.wrapper !== false && props.variant?.meta?.wrapper !== false;
}
</script>

<template>
  <div :class="{ 'p-2 font-sans text-black dark:text-gray-50': hasWrapper() }">
    <slot />
  </div>
</template>
