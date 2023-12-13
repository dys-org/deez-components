<script setup lang="ts">
import DSpinner from './DSpinner.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <DSpinner />
    </Variant>

    <Variant title="h-8 w-8 fill-green-500">
      <DSpinner class="h-8 w-8 fill-green-500" />
    </Variant>

    <Variant title="h-6 w-6 fill-danger-500">
      <DSpinner class="h-6 w-6 fill-danger-500" />
    </Variant>

    <Variant title="h-4 w-4">
      <DSpinner class="h-4 w-4" />
    </Variant>

    <Variant title="h-24 w-24">
      <DSpinner class="h-24 w-24" />
    </Variant>
  </Story>
</template>
