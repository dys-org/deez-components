<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import IconAlertCircle from '~icons/feather/alert-circle';

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
      <span v-if="isError" class="block text-danger-600 dark:text-danger-500">
        {{ props.errorMessage }}
      </span>
      <span v-else-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
    </label>

    <div class="relative mt-2">
      <input
        type="number"
        :name="props.name"
        :id="id"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset [-moz-appearance:_textfield] placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        :class="[
          isError
            ? 'pr-10 text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
            : 'ring-gray-300 focus:ring-primary-500 dark:ring-white/10 dark:focus:ring-primary-500',
        ]"
        v-model="input"
        :aria-invalid="isError"
        v-bind="attrs"
        ref="inputEl"
      />
      <!-- increment/decrement buttons -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-2">
        <button
          type="button"
          @click="
            inputEl?.stepUp(1);
            emit('update:modelValue', parseFloat(inputEl?.value as string));
          "
          class="px-1.5 text-lg hover:bg-gray-50 dark:hover:bg-white/5"
        >
          +
        </button>
        <button
          type="button"
          @click="
            inputEl?.stepDown(1);
            emit('update:modelValue', parseFloat(inputEl?.value as string));
          "
          class="px-1.5 text-lg hover:bg-gray-50 dark:hover:bg-white/5"
        >
          -
        </button>
      </div>
      <!-- error state icon -->
      <div
        v-if="isError"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <IconAlertCircle class="h-5 w-5 text-danger-500" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
