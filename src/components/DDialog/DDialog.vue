<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';

import { DButton } from '../DButton';

export interface DDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  danger?: boolean;
  hideIcon?: boolean;
  confirmFormAttr?: string;
  icon?: string;
  modal?: boolean;
}

const props = withDefaults(defineProps<DDialogProps>(), {
  title: 'Confirm Action',
  description: 'Would you like to continue with this action?',
  confirmText: 'Yes, Continue',
  danger: false,
  modal: true,
});

const emit = defineEmits<{
  'update:open': [value: DDialogProps['open']];
  confirm: [e: MouseEvent];
  cancel: [e: MouseEvent];
}>();

// static computed values
const isDanger = props.danger === true;
</script>

<template>
  <DialogRoot :open="open" :modal="modal" @update:open="emit('update:open', $event)">
    <DialogTrigger as-child>
      <slot name="trigger">
        <DButton>Open Dialog</DButton>
      </slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 bg-gray-500/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-gray-950/75"
      />
      <DialogContent
        :class="[
          'fixed z-50 w-full max-w-md transform overflow-hidden rounded-2xl border border-black/5 bg-white p-6 text-left align-middle shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-gray-50/5 dark:bg-gray-800 sm:rounded-lg',
          modal
            ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        ]"
      >
        <div class="sm:flex sm:items-start sm:gap-4">
          <div
            v-if="!hideIcon"
            class="mx-auto flex size-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10"
            :class="
              isDanger
                ? 'bg-danger-100 dark:bg-danger-400/10'
                : 'bg-primary-100 dark:bg-primary-400/10'
            "
          >
            <span
              :class="[
                // prettier-ignore
                props.icon ? props.icon :
                  isDanger ? 'i-lucide-alert-triangle -mt-1' :
                  'i-lucide-check-circle',
                'size-6',
                isDanger
                  ? 'text-danger-600 dark:text-danger-400'
                  : 'text-primary-600 dark:text-primary-400',
              ]"
              aria-hidden="true"
            >
            </span>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:text-left">
            <DialogTitle class="text-base font-semibold leading-6">
              {{ props.title }}
            </DialogTitle>
            <DialogDescription class="mt-2">
              <slot name="content">
                <p class="text-sm text-black/60 dark:text-white/60">
                  {{ props.description }}
                </p>
              </slot>
            </DialogDescription>
          </div>
        </div>
        <div class="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse">
          <DButton
            variant="primary"
            :danger="isDanger"
            :use-focus-visible="false"
            :type="confirmFormAttr ? 'submit' : 'button'"
            :form="confirmFormAttr"
            @click="emit('confirm', $event)"
          >
            {{ props.confirmText }}
          </DButton>
          <DialogClose as-child>
            <DButton :use-focus-visible="false" @click="emit('cancel', $event)"> Cancel </DButton>
          </DialogClose>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
