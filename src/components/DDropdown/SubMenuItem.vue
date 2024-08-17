<script setup lang="ts">
import type { DropOption } from '.';
import { DLink } from '../DLink';

const props = defineProps<{ opt: DropOption; active: boolean }>();
</script>
<template>
  <DLink
    v-if="props.opt.to"
    :to="props.opt.to"
    :class="props.active ? 'ring-primary-500' : 'ring-transparent'"
  >
    <slot />
  </DLink>
  <button
    v-else
    type="button"
    :class="props.active ? 'ring-primary-500' : 'ring-transparent'"
    @click="props.opt.fn"
  >
    <slot />
  </button>
</template>
