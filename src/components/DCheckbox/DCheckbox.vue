<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean | string[];
    name: string;
    value?: string;
    label: string;
    description?: string;
  }>(),
  { value: 'on' },
);

const emit = defineEmits(['update:modelValue']);

const checked = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input
        :id="props.name"
        :name="props.name"
        type="checkbox"
        :value="props.value"
        v-model="checked"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
    </div>
    <label :for="$attrs.id as string || props.name" class="ml-3 select-none text-sm leading-6">
      <span class="font-medium text-gray-900">{{ props.label }}</span>
      <span v-if="props.description" class="block text-gray-500"> {{ props.description }} </span>
    </label>
  </div>
</template>
