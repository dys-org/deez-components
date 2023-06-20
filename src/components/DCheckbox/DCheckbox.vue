<script setup lang="ts">
import { computed } from 'vue';

export interface DCheckboxProps {
  modelValue: boolean | string[];
  name: string;
  id: string;
  value?: string;
  label: string;
  description?: string;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DCheckboxProps>(), { value: 'on' });

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
        :id="props.id"
        :name="props.name"
        type="checkbox"
        :value="props.value"
        v-model="checked"
        class="h-4 w-4 rounded border-black/40 text-indigo-600 focus:ring-indigo-600 dark:border-white/30 dark:bg-white/5 dark:checked:bg-current"
        v-bind="$attrs"
      />
    </div>
    <label :for="props.id" class="ml-3 select-none text-sm leading-6">
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
    </label>
  </div>
</template>
