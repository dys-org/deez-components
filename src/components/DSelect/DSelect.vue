<script setup lang="ts">
import { computed } from 'vue';

export interface DSelectOption {
  value: string;
  display: string;
  disabled?: boolean;
}
export interface DSelectProps {
  modelValue: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  labelLeft?: boolean;
  options: DSelectOption[];
}

const props = withDefaults(defineProps<DSelectProps>(), {
  hideLabel: false,
  defaultText: 'Choose an option',
  labelLeft: false,
});

const emit = defineEmits(['update:modelValue']);

const picked = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <div :class="{ 'flex items-center gap-4': props.labelLeft }">
    <label :for="props.name" class="block whitespace-nowrap text-sm font-medium leading-6">
      {{ props.label }}
    </label>
    <select
      :id="props.name"
      :name="props.name"
      class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:ring-white/10 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
      :class="{ 'mt-2': !props.labelLeft }"
      v-model="picked"
    >
      <option
        v-for="opt in props.options"
        :value="opt.value"
        :disabled="opt.disabled"
        :key="opt.value"
      >
        {{ opt.display }}
      </option>
    </select>
  </div>
</template>
==
