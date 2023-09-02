<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, type RouterLinkProps } from 'vue-router';

defineOptions({ inheritAttrs: false });

export type { RouterLinkProps as DLinkProps };

const props = defineProps({
  // @ts-ignore
  ...RouterLink.props,
});

const emit = defineEmits(['click']);

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<template>
  <a
    v-if="isExternal"
    v-bind="$attrs"
    :href="(props.to as string)"
    target="_blank"
    rel="noopener noreferrer"
    @click="emit('click')"
  >
    <slot />
  </a>
  <RouterLink v-else v-slot="{ href, navigate }" v-bind="(props as RouterLinkProps)" custom>
    <a
      v-bind="$attrs"
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
