<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';
import { computed } from 'vue';

defineOptions({
  name: 'DInput',
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    modelValue: string;
    name: string;
    label: string;
    hideLabel?: boolean;
    description?: string;
    type?: 'text' | 'email' | 'url' | 'password';
    status?: 'valid' | 'error';
    errorMessage?: string;
  }>(),
  {
    type: 'text',
    hideLabel: false,
    status: 'valid',
  },
);

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
      <span class="font-medium text-gray-900">{{ props.label }}</span>
      <span v-if="isError" class="block text-red-600">
        {{ props.errorMessage || 'This field is invalid.' }}
      </span>
      <span v-else-if="props.description" class="block text-gray-500">
        {{ props.description }}
      </span>
    </label>

    <div class="relative mt-2">
      <input
        :type="props.type"
        :name="props.name"
        :id="props.name"
        class="disabled:ring-gray-200s block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 sm:text-sm sm:leading-6"
        :class="[
          isError
            ? 'pr-10 text-red-800 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
            : 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-blue-500',
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
