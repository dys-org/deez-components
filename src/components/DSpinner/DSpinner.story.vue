<script setup lang="ts">
import DSpinner from './DSpinner.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <DSpinner />
    </Variant>

    <Variant title="size-8 fill-green-500">
      <DSpinner class="size-8 fill-green-500" />
    </Variant>

    <Variant title="size-6 fill-danger-500">
      <DSpinner class="size-6 fill-danger-500" />
    </Variant>

    <Variant title="size-4">
      <DSpinner class="size-4" />
    </Variant>

    <Variant title="size-24">
      <DSpinner class="size-24" />
    </Variant>
  </Story>
</template>
