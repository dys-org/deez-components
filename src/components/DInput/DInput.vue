<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import { DInlineError } from '../DInlineError';

import IconEye from '~icons/feather/eye';
import IconEyeOff from '~icons/feather/eye-off';

export interface DInputProps {
  modelValue: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  type?: 'text' | 'email' | 'url' | 'password' | 'tel';
  status?: 'error';
  errorMessage?: string;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DInputProps>(), {
  type: 'text',
  hideLabel: false,
  errorMessage: 'This field is invalid.',
});

const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();

const showPassword = ref(false);

// static computed values
const id = (attrs.id as string) || props.name;
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
  <div>
    <label class="block text-sm leading-6" :class="{ 'sr-only': props.hideLabel }" :for="id">
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
      <DInlineError v-if="isError" :message="errorMessage" />
    </label>

    <div :class="['relative', !props.hideLabel && 'mt-2']">
      <input
        v-bind="attrs"
        :id="id"
        v-model.trim="input"
        :type="isPassword ? (showPassword ? 'text' : props.type) : props.type"
        :name="props.name"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6"
        :class="[
          isError
            ? 'text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
            : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
          { 'pr-16': isPassword && isError },
          { 'pr-10': isPassword || isError },
        ]"
        :aria-invalid="isError"
        :aria-errormessage="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
      />
      <div class="absolute inset-y-0 right-0 mr-2 flex items-center">
        <!-- show/hide password -->
        <button v-if="isPassword" type="button" class="px-1" @click="showPassword = !showPassword">
          <IconEyeOff v-if="showPassword" class="h-5 w-5" aria-hidden="true" />
          <IconEye v-else class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
    <DInlineError
      v-if="isError && props.hideLabel"
      :id="`${id}ErrorMessage`"
      :message="props.errorMessage"
      class="mt-2"
    />
  </div>
</template>
