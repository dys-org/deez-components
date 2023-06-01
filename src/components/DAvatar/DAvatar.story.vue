<script setup lang="ts">
import DAvatar from './DAvatar.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="No Avatar">
      <DAvatar />
    </Variant>
    <Variant title="Image with Notif">
      <DAvatar
        image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        :notifications="1"
      />
    </Variant>
  </Story>
</template>
