<script setup lang="ts">
const props = defineProps<{ open: boolean }>();
</script>

<template>
  <div
    :class="[
      'grid overflow-hidden transition-[opacity_grid-template-rows] duration-300 ease-in-out',
      props.open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
    ]"
  >
    <div
      :class="[
        'overflow-hidden transition-[visibility] ease-linear',
        props.open ? 'visible' : 'invisible delay-300',
      ]"
    >
      <slot />
    </div>
  </div>
</template>
