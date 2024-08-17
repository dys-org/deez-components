<script setup lang="ts">
// import { logEvent } from 'histoire/client';
import { ref } from 'vue';

import { useToast } from '@/composables/useToast';

import { DButton } from '../DButton';
import { DCheckbox } from '../DCheckbox';
import DToastList from './DToastList.vue';

const { add, remove, notifications } = useToast();
const autoDismiss = ref(false);
</script>

<template>
  <Story :layout="{ type: 'single', iframe: true }">
    <DCheckbox
      id="autoDismiss"
      v-model="autoDismiss"
      label="Auto Dismiss after 5 seconds"
      name="autoDismiss"
      class="mb-8"
    />
    <DButton
      class="mb-4 block"
      @click="
        add({
          title: 'Succesful Operation!',
          description: 'You updated your user profile.',
          duration: autoDismiss ? 5000 : undefined,
        })
      "
    >
      Success
    </DButton>
    <DButton
      class="mb-4 block"
      @click="
        add({
          title: 'An error occurred!',
          description: 'Table Users not found.',
          variant: 'error',
          duration: autoDismiss ? 5000 : undefined,
        })
      "
    >
      Error
    </DButton>
    <DToastList :notifications="notifications" @dismiss="remove" />
    <DButton
      class="mb-4 block"
      @click="
        add({
          title: 'Succesful Operation!',
          duration: autoDismiss ? 5000 : undefined,
        })
      "
    >
      Success No Description
    </DButton>
    <DButton
      class="mb-4 block"
      @click="
        add({
          title: 'An error occurred!',
          variant: 'error',
          duration: autoDismiss ? 5000 : undefined,
        })
      "
    >
      Error with duration
    </DButton>
    <DToastList :notifications="notifications" @dismiss="remove" />
  </Story>
</template>
