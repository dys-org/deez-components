<script setup lang="ts">
import { ref } from 'vue';

// import { logEvent } from 'histoire/client';
import { DButton } from '../DButton';

import DToast from './DToast.vue';

const show = ref(false);
</script>

<template>
  <Story :layout="{ type: 'single', iframe: true }">
    <Variant title="Success">
      <DButton @click="show = true">Show Toast</DButton>
      <div
        aria-live="assertive"
        class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <!-- Toast component goes here -->
        <DToast
          v-model:show="show"
          title="Succesful Operation!"
          description="You updated your user profile."
        />
      </div>
    </Variant>
    <Variant title="Error">
      <DButton @click="show = true">Show Toast</DButton>
      <div
        aria-live="assertive"
        class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <!-- Toast component goes here -->
        <DToast
          v-model:show="show"
          title="An error occured"
          danger
          description="Table users does not exist."
        />
      </div>
    </Variant>
  </Story>
</template>
