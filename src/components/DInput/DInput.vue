<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';
import { computed } from 'vue';

export interface DInputProps {
  modelValue: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  type?: 'text' | 'email' | 'url' | 'password';
  status?: 'valid' | 'error';
  errorMessage?: string;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DInputProps>(), {
  type: 'text',
  hideLabel: false,
  status: 'valid',
});

const emit = defineEmits(['update:modelValue']);

const isError = computed(() => props.status === 'error');
</script>

<template>
  <div>
    <label
      class="block text-sm leading-6"
      :class="{ 'sr-only': props.hideLabel }"
      :for="$attrs.id as string || props.name"
    >
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="isError" class="block text-red-600 dark:text-red-500">
        {{ props.errorMessage || 'This field is invalid.' }}
      </span>
      <span v-else-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
    </label>

    <div class="relative mt-2">
      <input
        :type="props.type"
        :name="props.name"
        :id="props.name"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6"
        :class="[
          isError
            ? 'pr-10 text-red-600 ring-red-500 focus:ring-red-500 dark:text-red-500'
            : 'ring-gray-300 focus:ring-indigo-500 dark:ring-white/10 dark:focus:ring-indigo-500',
        ]"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :value="props.modelValue"
        :aria-invalid="isError"
        v-bind="$attrs"
      />
      <div
        v-if="isError"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
