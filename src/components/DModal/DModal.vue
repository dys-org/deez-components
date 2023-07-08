<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import IconAlertTriangle from '~icons/feather/alert-triangle';
import IconCheckCircle from '~icons/feather/check-circle';
import { DButton } from '../DButton';

export interface DModalProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  danger?: boolean;
  hideIcon?: boolean;
}

const props = withDefaults(defineProps<DModalProps>(), {
  title: 'Confirm Action',
  description: 'Would you like to continue with this action?',
  confirmText: 'Yes, Continue',
  danger: false,
});

const emit = defineEmits(['update:open', 'confirm']);

// static computed values
const isDanger = props.danger === true;

function closeDialog() {
  emit('update:open', false);
}
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="closeDialog">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-950 dark:bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start sm:gap-4">
                  <div
                    v-if="!hideIcon"
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
                    :class="
                      isDanger
                        ? 'bg-danger-100 dark:bg-danger-400/10'
                        : 'bg-primary-100 dark:bg-primary-400/10'
                    "
                  >
                    <span
                      class="h-6 w-6"
                      :class="
                        isDanger
                          ? '-mt-1 text-danger-600 dark:text-danger-400'
                          : 'text-primary-600  dark:text-primary-400'
                      "
                    >
                      <slot name="icon">
                        <IconAlertTriangle v-if="isDanger" aria-hidden="true" />
                        <IconCheckCircle v-else aria-hidden="true" />
                      </slot>
                    </span>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6">
                      {{ props.title }}
                    </DialogTitle>
                    <div class="mt-2">
                      <slot name="content">
                        <p class="text-sm text-black/60 dark:text-white/60">
                          {{ props.description }}
                        </p>
                      </slot>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col gap-3 bg-gray-50 px-4 py-3 dark:bg-white/5 sm:flex-row-reverse sm:px-6"
              >
                <DButton variant="primary" :danger="isDanger" @click="emit('confirm')">
                  {{ props.confirmText }}
                </DButton>
                <DButton @click="closeDialog">Cancel</DButton>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
