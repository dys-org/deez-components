<script setup lang="ts">
import DToast, { type DToastProps } from './DToast.vue';
import DToastWrapper from './DToastWrapper.vue';

const props = defineProps<{ notifications: DToastProps[] }>();

const emit = defineEmits<{
  dismiss: [id: string];
}>();
</script>

<template>
  <DToastWrapper>
    <DToast
      v-for="toast in props.notifications"
      :key="toast.id"
      v-bind="toast"
      @dismiss="emit('dismiss', $event)"
    />
  </DToastWrapper>
</template>
