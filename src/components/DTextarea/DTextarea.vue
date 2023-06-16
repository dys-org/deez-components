<script setup lang="ts">
export interface DTextareaProps {
  modelValue: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  rows?: number;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DTextareaProps>(), {
  hideLabel: false,
  rows: 4,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label
      :for="$attrs.id as string || props.name"
      class="block text-sm font-medium leading-6"
      :class="{ 'sr-only': hideLabel }"
    >
      {{ props.label }}
    </label>
    <div class="mt-2">
      <textarea
        :rows="props.rows"
        :name="props.name"
        :id="props.name"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-white/5 dark:ring-white/10 dark:placeholder:text-white/30 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :value="props.modelValue"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
