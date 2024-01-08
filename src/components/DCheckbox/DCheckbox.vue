<script setup lang="ts">
import { computed } from 'vue';

export interface DCheckboxProps {
  modelValue?: boolean | string[];
  name: string;
  id: string;
  value?: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DCheckboxProps>(), {
  modelValue: false,
  value: 'on',
  hideLabel: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: DCheckboxProps['modelValue']];
}>();

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
        v-bind="$attrs"
        :id="props.id"
        v-model="checked"
        :name="props.name"
        type="checkbox"
        :value="props.value"
        class="size-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500 dark:border-white/30 dark:bg-white/5 dark:ring-offset-gray-800 dark:checked:border-current dark:checked:bg-current"
      />
    </div>
    <label
      :for="props.id"
      class="ml-3 select-none text-sm leading-6"
      :class="{ 'sr-only': props.hideLabel }"
    >
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
    </label>
  </div>
</template>
