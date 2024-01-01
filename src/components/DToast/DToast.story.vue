<script setup lang="ts">
// import { logEvent } from 'histoire/client';

import { useToast } from '../../composables/useToast';
import { DButton } from '../DButton';

import DToastList from './DToastList.vue';

const { add, remove, notifications } = useToast();
</script>

<template>
  <Story :layout="{ type: 'single', iframe: true }">
    <Variant title="Success">
      <DButton
        class="mb-4 block"
        @click="
          add({
            title: 'Succesful Operation!',
            description: 'You updated your user profile.',
          })
        "
      >
        Success
      </DButton>
      <DButton
        @click="
          add({
            title: 'An error occurred!',
            description: 'Table Users not found.',
            variant: 'error',
          })
        "
      >
        Error
      </DButton>
      <DToastList :notifications="notifications" @dismiss="remove" />
    </Variant>
  </Story>
</template>
