<script setup lang="ts">
import { computed } from 'vue';

import { DFormGroup } from '../DFormGroup';

export interface DRangeProps {
  modelValue: number;
  id: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  status?: 'error';
  errorMessage?: string;
  min?: number;
  max?: number;
  step?: number;
  hideValue?: boolean;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<DRangeProps>(), {
  min: 0,
  max: 100,
  step: 1,
  hideLabel: false,
});

const emit = defineEmits(['update:modelValue']);

const progressStyle = computed(() => {
  const { modelValue, min, max } = props;
  const clampedValue = Math.max(min, Math.min(modelValue, max));
  const relativeValue = (clampedValue - min) / (max - min);
  return {
    width: `${relativeValue * 100}%`,
  };
});

const rangeVal = computed({
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
    <template #label>
      <div class="flex justify-between font-medium">
        <span class="whitespace-nowrap">{{ props.label }}</span>
        <span v-if="!hideValue" aria-hidden="true">{{ rangeVal }}</span>
      </div>
    </template>
    <div :class="['relative flex h-2 w-full items-center', !props.hideLabel && 'mt-3']">
      <input
        v-bind="$attrs"
        :id="props.id"
        v-model.number="rangeVal"
        :name="($attrs.name as string) || props.id"
        type="range"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-gray-700 dark:text-primary-400 dark:focus-visible:ring-primary-400 dark:focus-visible:ring-offset-gray-900 [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:z-[1] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-current [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current [&::-webkit-slider-thumb]:dark:bg-gray-900"
      />
      <span
        class="pointer-events-none absolute h-2 rounded-s-lg bg-primary-500 peer-disabled:bg-opacity-50 dark:bg-primary-400"
        :style="progressStyle"
      ></span>
    </div>
  </DFormGroup>
</template>
