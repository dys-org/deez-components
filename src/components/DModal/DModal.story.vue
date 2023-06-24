<script setup lang="ts">
import { ref } from 'vue';
import { logEvent } from 'histoire/client';
import DModal from './DModal.vue';
import { DButton } from '../DButton';

const isOpen = ref(false);

function onConfirm(e: Event) {
  logEvent('Confirm', e);
  isOpen.value = false;
}
</script>

<template>
  <Story>
    <Variant title="Default">
      <DButton @click="isOpen = true">Open</DButton>
      <DModal v-model:open="isOpen" @confirm="onConfirm" />
    </Variant>

    <Variant title="Danger">
      <DButton @click="isOpen = true">Open</DButton>
      <DModal
        v-model:open="isOpen"
        @confirm="onConfirm"
        danger
        title="Delete Account"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
        confirm-text="Yes, Delete"
      />
    </Variant>

    <Variant title="Content slot hide icon">
      <DButton @click="isOpen = true">Open</DButton>
      <DModal
        v-model:open="isOpen"
        @confirm="onConfirm"
        title="Yay, this is awesome!"
        confirm-text="Do it!"
        hide-icon
      >
        <template #content>
          <h4 class="text-xl">XL Text</h4>
          <ul class="ml-4 mt-4 list-disc text-base text-black/60 dark:text-white/60">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
        </template>
      </DModal>
    </Variant>
  </Story>
</template>
