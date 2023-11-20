<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, type RouterLinkProps } from 'vue-router';

defineOptions({ inheritAttrs: false });

export type { RouterLinkProps as DLinkProps };

const props = defineProps<RouterLinkProps>();

const emit = defineEmits(['click']);

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<template>
  <!-- prettier-ignore -->
  <a
    v-if="isExternal"
    :href="(props.to as string)"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
    @click="emit('click')"
  >
    <slot />
  </a>
  <RouterLink v-else v-slot="{ href, navigate }" v-bind="props" custom>
    <a
      :href="href"
      v-bind="$attrs"
      @click.prevent="
        navigate();
        emit('click');
      "
    >
      <slot />
    </a>
  </RouterLink>
</template>
