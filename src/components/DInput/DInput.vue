<script setup lang="ts">
import { type HTMLAttributes, computed, ref } from 'vue';

import { cn } from '../../utils';
import { DFormGroup } from '../DFormGroup';

export interface DInputProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  type?: 'text' | 'email' | 'url' | 'password' | 'tel' | 'date' | 'time' | 'datetime-local';
  status?: 'error';
  errorMessage?: string;
  class?: HTMLAttributes['class'];
}

defineOptions({ inheritAttrs: false });

const model = defineModel<string>({ default: '' });

const props = withDefaults(defineProps<DInputProps>(), {
  type: 'text',
  hideLabel: false,
  errorMessage: 'This field is invalid.',
  class: '',
});

const showPassword = ref(false);

const isPassword = props.type === 'password';

const isError = computed(() => props.status === 'error');
</script>

<template>
  <DFormGroup
    :for="props.id"
    :label="props.label"
    :hide-label="props.hideLabel"
    :description="props.description"
    :status="props.status"
    :error-message="props.errorMessage"
  >
    <div :class="['relative', !props.hideLabel && 'mt-2']">
      <slot name="before" />
      <input
        v-bind="$attrs"
        :id="props.id"
        v-model.trim="model"
        :name="($attrs.name as string) || props.id"
        :type="isPassword ? (showPassword ? 'text' : props.type) : props.type"
        :class="
          cn([
            'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-opacity-50 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] dark:disabled:ring-opacity-50 sm:text-sm sm:leading-6',
            isError
              ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
            isPassword && 'pr-10',
            props.class,
          ])
        "
        :aria-invalid="isError"
        :aria-describedby="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
      />
      <div class="absolute inset-y-0 right-0 mr-2 flex items-center">
        <!-- show/hide password -->
        <button v-if="isPassword" type="button" class="px-1" @click="showPassword = !showPassword">
          <span v-if="showPassword" class="i-lucide-eye-off block size-5" aria-hidden="true"></span>
          <span v-else class="i-lucide-eye block size-5" aria-hidden="true"></span>
        </button>
      </div>
      <slot name="after" />
    </div>
  </DFormGroup>
</template>
