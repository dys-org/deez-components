<script setup lang="ts">
import { ref } from 'vue';
import DRadioGroup from './DRadioGroup.vue';

const notificationMethods = [
  { id: 'email', label: 'Email', value: 'email' },
  { id: 'sms', label: 'Phone (SMS)', value: 'sms' },
  { id: 'push', label: 'Push notification', value: 'push' },
];

const chosen = ref('email');
</script>

<template>
  <Story>
    <Variant title="Default">
      <DRadioGroup
        :options="notificationMethods"
        name="notifMethods"
        v-model="chosen"
        legend="Notifications"
        description="How would you prefer to be notified?"
      />
      <p class="mt-8 font-mono dark:text-white/40">Chosen: {{ chosen }}</p>
    </Variant>
    <Variant title="Inline">
      <DRadioGroup
        :options="notificationMethods"
        name="notifMethods"
        v-model="chosen"
        legend="Notifications"
        description="How would you prefer to be notified?"
        inline
      />
      <p class="mt-8 font-mono dark:text-white/40">Chosen: {{ chosen }}</p>
    </Variant>
    <Variant title="Hidden Legend no description">
      <DRadioGroup
        :options="notificationMethods"
        name="notifMethods"
        v-model="chosen"
        legend="Notifications"
        hide-legend
      />
      <p class="mt-8 font-mono dark:text-white/40">Chosen: {{ chosen }}</p>
    </Variant>
  </Story>
</template>
