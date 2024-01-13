<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, type RouterLinkProps } from 'vue-router';

defineOptions({ inheritAttrs: false });

export type { RouterLinkProps as DLinkProps };

const props = defineProps<RouterLinkProps>();

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
    @click="emit('click')"
  >
    <slot />
  </a>
  <RouterLink v-else v-slot="{ href, navigate, isActive }" v-bind="props" custom>
    <a
      v-bind="$attrs"
      :class="isActive ? activeClass : ''"
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
