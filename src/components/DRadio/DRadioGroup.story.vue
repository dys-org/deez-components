<script setup lang="ts">
import { ref } from 'vue';
import DRadioGroup from './DRadioGroup.vue';

const notificationMethods = [
  { id: 'email', label: 'Email', value: 'email' },
  { id: 'sms', label: 'Phone (SMS)', value: 'sms' },
  { id: 'push', label: 'Push notification', value: 'push' },
];

const selected = ref('email');
</script>

<template>
  <Story>
    <Variant title="Default">
      <DRadioGroup :options="notificationMethods" name="notifMethods" v-model="selected" />
      <p class="mt-8 font-mono">Chosen: {{ selected }}</p>
    </Variant>
  </Story>
</template>
