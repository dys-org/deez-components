<script setup lang="ts">
import { computed } from 'vue';

export interface DRadioGroupProps {
  modelValue: string;
  name: string;
  options: { id: string; label: string; value: string }[];
}

const props = withDefaults(defineProps<DRadioGroupProps>(), {});

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
  <fieldset>
    <legend class="text-base font-semibold">Notifications</legend>
    <p class="text-sm text-black/60 dark:text-white/60">
      How do you prefer to receive notifications?
    </p>
    <div class="mt-4 space-y-4">
      <div v-for="opt in props.options" :key="opt.id" class="flex items-center">
        <input
          :id="opt.id"
          :value="opt.value"
          :name="props.name"
          type="radio"
          v-model="picked"
          class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600 dark:border-white/30 dark:bg-white/5 dark:checked:bg-current"
        />
        <label :for="opt.id" class="ml-3 block text-sm font-medium leading-6">
          {{ opt.label }}
        </label>
      </div>
    </div>
  </fieldset>
</template>
