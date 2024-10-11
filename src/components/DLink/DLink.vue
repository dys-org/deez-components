<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { RouterLink, type RouterLinkProps } from 'vue-router';

import { cn } from '@/utils';

defineOptions({ inheritAttrs: false });

export type { RouterLinkProps as DLinkProps };

const props = withDefaults(defineProps<RouterLinkProps & { class?: HTMLAttributes['class'] }>(), {
  class: '',
});

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<template>
  <!-- prettier-ignore -->
  <a
    v-if="isExternal"
    v-bind="$attrs"
    :href="(props.to as string)"
    target="_blank"
    :class="cn('inline-flex items-center gap-1', props.class)"
  >
    <slot />
  </a>
  <RouterLink v-else v-slot="{ href, navigate, isActive }" v-bind="props" custom>
    <a
      v-bind="$attrs"
      :class="cn('inline-flex items-center gap-1', props.class, isActive && props.activeClass)"
      :href="href"
      @click="navigate"
    >
      <slot />
    </a>
  </RouterLink>
</template>
