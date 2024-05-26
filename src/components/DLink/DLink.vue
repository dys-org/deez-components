<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';
import { RouterLink, type RouterLinkProps } from 'vue-router';

import type { VueClass } from '../../types';

defineOptions({ inheritAttrs: false });

export type { RouterLinkProps as DLinkProps };

const props = withDefaults(defineProps<RouterLinkProps & { class?: VueClass }>(), {
  class: '',
});

const emit = defineEmits<{ click: [] }>();

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
    rel="noopener noreferrer"
    :class="twMerge('inline-flex items-center gap-1', props.class as string)"
    @click="emit('click')"
  >
    <slot />
  </a>
  <RouterLink v-else v-slot="{ href, navigate, isActive }" v-bind="props" custom>
    <a
      v-bind="$attrs"
      :class="
        twMerge(
          'inline-flex items-center gap-1',
          props.class as string,
          isActive && props.activeClass,
        )
      "
      :href="href"
      @click.prevent="
        navigate();
        emit('click');
      "
    >
      <slot />
    </a>
  </RouterLink>
</template>
