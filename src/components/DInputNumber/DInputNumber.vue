<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import { DInlineError } from '../DInlineError';

import IconPlus from '~icons/feather/plus';
import IconMinus from '~icons/feather/minus';

export interface DInputNumberProps {
  modelValue: number | string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DInputNumberProps>(), {
  hideLabel: false,
  errorMessage: 'Invalid input',
});

const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();

const inputEl = ref<HTMLInputElement | null>(null);

// static computed values
const id = (attrs.id as string) || props.name;

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
        type="number"
        :name="props.name"
        :id="id"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset [-moz-appearance:_textfield] placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        :class="[
          isError
            ? 'pr-10 text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
            : 'ring-gray-300 focus:ring-primary-500 dark:ring-gray-600 dark:focus:ring-primary-500',
        ]"
        v-model="input"
        :aria-invalid="isError"
        :aria-errormessage="isError && props.hideLabel ? `${id}ErrorMessage` : undefined"
        ref="inputEl"
      />

      <div class="absolute inset-y-0 right-0 flex items-center pr-2">
        <!-- error state icon -->
        <div v-if="isError" class="pointer-events-none mr-1">
          <IconAlertCircle class="h-5 w-5 text-danger-500" aria-hidden="true" />
        </div>
        <!-- increment/decrement buttons -->
        <button
          type="button"
          @click="
            inputEl?.stepDown(1);
            emit('update:modelValue', parseFloat(inputEl?.value as string));
          "
          aria-label="Decrement value"
          class="p-0.5 hover:bg-gray-50 dark:hover:bg-white/5"
        >
          <IconMinus class="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          @click="
            inputEl?.stepUp(1);
            emit('update:modelValue', parseFloat(inputEl?.value as string));
          "
          aria-label="Increment value"
          class="p-0.5 text-lg hover:bg-gray-50 dark:hover:bg-white/5"
        >
          <IconPlus class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
    <DInlineError
      v-if="isError && props.hideLabel"
      :message="props.errorMessage"
      class="mt-2"
      :id="`${id}ErrorMessage`"
    />
  </div>
</template>
