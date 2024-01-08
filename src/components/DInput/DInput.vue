<script setup lang="ts">
import { computed, ref } from 'vue';
import { twMerge } from 'tailwind-merge';

import type { VueClass } from '../../types';
import { DFormGroup } from '../DFormGroup';

import IconEye from '~icons/lucide/eye';
import IconEyeOff from '~icons/lucide/eye-off';

export interface DInputProps {
  modelValue?: string;
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  type?: 'text' | 'email' | 'url' | 'password' | 'tel';
  status?: 'error';
  errorMessage?: string;
  class?: VueClass;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DInputProps>(), {
  modelValue: '',
  type: 'text',
  hideLabel: false,
  errorMessage: 'This field is invalid.',
  class: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: DInputProps['modelValue']];
}>();

const showPassword = ref(false);

const isPassword = props.type === 'password';

const isError = computed(() => props.status === 'error');

const input = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
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
    <div :class="['relative flex', !props.hideLabel && 'mt-2']">
      <slot name="before" />
      <input
        v-bind="$attrs"
        :id="props.id"
        v-model.trim="input"
        :name="($attrs.name as string) || props.id"
        :type="isPassword ? (showPassword ? 'text' : props.type) : props.type"
        :class="
          twMerge([
            'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 sm:text-sm sm:leading-6 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35]',
            isError
              ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
              : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
            isPassword && 'pr-10',
            props.class as string,
          ])
        "
        :aria-invalid="isError"
        :aria-describedby="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
      />
      <div class="absolute inset-y-0 right-0 mr-2 flex items-center">
        <!-- show/hide password -->
        <button v-if="isPassword" type="button" class="px-1" @click="showPassword = !showPassword">
          <IconEyeOff v-if="showPassword" class="size-5" aria-hidden="true" />
          <IconEye v-else class="size-5" aria-hidden="true" />
        </button>
      </div>
      <slot name="after" />
    </div>
  </DFormGroup>
</template>
