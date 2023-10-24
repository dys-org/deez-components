<script setup lang="ts">
import DBadge from './DBadge.vue';
import { logEvent } from 'histoire/client';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <DBadge>Badge</DBadge>
    </Variant>

    <Variant title="Red removeable">
      <DBadge removeable color="red" @click="logEvent('Default', $event)">Badge</DBadge>
    </Variant>

    <Variant title="Yellow removeable">
      <DBadge removeable color="yellow" @click="logEvent('Default', $event)">Badge</DBadge>
    </Variant>

    <Variant title="Green">
      <DBadge color="green">Badge</DBadge>
    </Variant>

    <Variant title="Blue removeable">
      <DBadge removeable color="blue" @click="logEvent('Default', $event)">Badge</DBadge>
    </Variant>

    <Variant title="Indigo removeable">
      <DBadge removeable color="indigo" @click="logEvent('Default', $event)">Badge</DBadge>
    </Variant>

    <Variant title="Purple">
      <DBadge color="purple">Badge</DBadge>
    </Variant>
    p
    <Variant title="Pink removeable">
      <DBadge removeable color="pink" @click="logEvent('Default', $event)">Badge</DBadge>
    </Variant>
  </Story>
</template>
