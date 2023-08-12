<script setup lang="ts">
import { ref } from 'vue';
import DRadioGroup from './DRadioGroup.vue';

const notificationMethods = [
  { id: 'email', label: 'Email', value: 'email' },
  { id: 'sms', label: 'Phone (SMS)', value: 'sms' },
  { id: 'push', label: 'Push notification', value: 'push' },
];

const chosen1 = ref('email');
const chosen2 = ref('email');
const chosen3 = ref('email');
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <DRadioGroup
        v-model="chosen1"
        :options="notificationMethods"
        name="notifMethods1"
        legend="Notifications"
        description="How would you prefer to be notified?"
      />
      <p class="mt-8 font-mono dark:text-white/40">Chosen: {{ chosen1 }}</p>
    </Variant>
    <Variant title="Inline">
      <DRadioGroup
        v-model="chosen2"
        :options="notificationMethods"
        name="notifMethods2"
        legend="Notifications"
        description="How would you prefer to be notified?"
        inline
      />
      <p class="mt-8 font-mono dark:text-white/40">Chosen: {{ chosen2 }}</p>
    </Variant>
    <Variant title="Hidden Legend no description">
      <DRadioGroup
        v-model="chosen3"
        :options="notificationMethods"
        name="notifMethods3"
        legend="Notifications"
        hide-legend
      />
      <p class="mt-8 font-mono dark:text-white/40">Chosen: {{ chosen3 }}</p>
    </Variant>
  </Story>
</template>
