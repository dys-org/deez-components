<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { ref } from 'vue';

import { DButton } from '../DButton';
import DDialog from './DDialog.vue';

const isOpen = ref(false);
const isNonModalOpen = ref(false);

function onConfirm(e: Event) {
  logEvent('Confirm', e);
  isOpen.value = false;
  isNonModalOpen.value = false;
}
</script>

<template>
  <Story :layout="{ type: 'single', iframe: true }">
    <Variant title="Default">
      <DDialog v-model:open="isOpen" @confirm="onConfirm">
        <template #trigger>
          <DButton>Open Dialog</DButton>
        </template>
      </DDialog>
    </Variant>

    <Variant title="Danger">
      <DDialog
        v-model:open="isOpen"
        danger
        title="Delete Account"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
        confirm-text="Yes, Delete"
        @confirm="onConfirm"
      >
        <template #trigger>
          <DButton danger>Delete Account</DButton>
        </template>
      </DDialog>
    </Variant>

    <Variant title="Content slot hide icon">
      <DDialog
        v-model:open="isOpen"
        title="Yay, this is awesome!"
        confirm-text="Do it!"
        hide-icon
        @confirm="onConfirm"
      >
        <template #trigger>
          <DButton>Open Custom Dialog</DButton>
        </template>
        <template #content>
          <h4 class="text-xl">XL Text</h4>
          <ul class="ml-4 mt-4 list-disc text-base text-black/60 dark:text-white/60">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
        </template>
      </DDialog>
    </Variant>

    <Variant title="Non-modal">
      <DDialog
        v-model:open="isNonModalOpen"
        :modal="false"
        title="Non-modal Dialog"
        description="This dialog is non-modal, meaning you can interact with elements behind it."
        @confirm="onConfirm"
      >
        <template #trigger>
          <DButton>Open Non-modal Dialog</DButton>
        </template>
      </DDialog>
    </Variant>
  </Story>
</template>
