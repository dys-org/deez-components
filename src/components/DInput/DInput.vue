<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import IconAlertCircle from '~icons/feather/alert-circle';
import IconEye from '~icons/feather/eye';
import IconEyeOff from '~icons/feather/eye-off';

export interface DInputProps {
  modelValue: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  description?: string;
  type?: 'text' | 'email' | 'url' | 'password';
  status?: 'error';
  errorMessage?: string;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<DInputProps>(), {
  type: 'text',
  hideLabel: false,
  errorMessage: 'Invalid input',
});

const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();

const showPassword = ref(false);

// static computed values
const id = (attrs.id as string) || props.name;
const isPassword = props.type === 'password';

const isError = computed(() => props.status === 'error');
</script>

<template>
  <div>
    <label class="block text-sm leading-6" :class="{ 'sr-only': props.hideLabel }" :for="id">
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="isError" class="block text-danger-600 dark:text-danger-500">
        {{ props.errorMessage || 'This field is invalid.' }}
      </span>
      <span v-else-if="props.description" class="block text-black/60 dark:text-white/60">
        {{ props.description }}
      </span>
    </label>

    <div class="relative mt-2">
      <input
        :type="isPassword ? (showPassword ? 'text' : props.type) : props.type"
        :name="props.name"
        :id="id"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-black/40 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black/50 disabled:ring-gray-200 dark:bg-white/5 dark:placeholder:text-white/30 dark:disabled:bg-black/10 dark:disabled:text-white/[.35] sm:text-sm sm:leading-6"
        :class="[
          isError
            ? 'pr-10 text-danger-600 ring-danger-500 focus:ring-danger-500 dark:text-danger-500'
            : 'ring-gray-300 focus:ring-primary-500 dark:ring-white/10 dark:focus:ring-primary-500',
        ]"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :value="props.modelValue"
        :aria-invalid="isError"
        v-bind="attrs"
      />
      <!-- show/hide password -->
      <button
        v-if="isPassword"
        type="button"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
        @click="showPassword = !showPassword"
      >
        <IconEyeOff v-if="showPassword" class="h-5 w-5" aria-hidden="true" />
        <IconEye v-else class="h-5 w-5" aria-hidden="true" />
      </button>
      <!-- error state icon -->
      <div
        v-if="isError"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <IconAlertCircle class="h-5 w-5 text-danger-500" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
