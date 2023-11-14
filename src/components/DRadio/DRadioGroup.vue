<script setup lang="ts">
import { computed } from 'vue';

export interface DRadioGroupProps {
  modelValue?: string;
  name: string;
  options: { id: string; label: string; value: string }[];
  legend: string;
  description?: string;
  inline?: boolean;
  hideLegend?: boolean;
}

const props = withDefaults(defineProps<DRadioGroupProps>(), { modelValue: '' });

const emit = defineEmits(['update:modelValue']);

const describedBy = props.description ? `${props.name}Description` : undefined;

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
  <fieldset :aria-describedby="describedBy">
    <legend class="text-base font-semibold" :class="{ 'sr-only': hideLegend }">
      {{ props.legend }}
    </legend>
    <p v-if="props.description" :id="describedBy" class="text-sm text-black/60 dark:text-white/60">
      {{ props.description }}
    </p>
    <div
      class="flex flex-col gap-x-10 gap-y-4"
      :class="{ 'sm:flex-row': props.inline, 'mt-4': !props.hideLegend }"
    >
      <div v-for="opt in props.options" :key="opt.id" class="flex items-center">
        <input
          :id="opt.id"
          v-model="checked"
          :value="opt.value"
          :name="props.name"
          type="radio"
          class="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500 dark:border-white/30 dark:bg-white/5 dark:ring-offset-gray-800 dark:checked:border-current dark:checked:bg-current"
        />
        <label :for="opt.id" class="ml-3 block text-sm font-medium leading-6">
          {{ opt.label }}
        </label>
      </div>
    </div>
  </fieldset>
</template>
