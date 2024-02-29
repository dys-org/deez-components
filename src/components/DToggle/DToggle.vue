<script setup lang="ts">
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue';

export interface DToggleProps {
  label: string;
  description?: string;
  hideLabel?: boolean;
  labelLeft?: boolean;
}

const model = defineModel<boolean>({ default: false });

const props = withDefaults(defineProps<DToggleProps>(), {
  hideLabel: false,
  labelSide: 'right',
});
</script>

<template>
  <SwitchGroup as="div" class="flex items-center" :class="{ 'justify-between': props.labelLeft }">
    <span v-if="props.labelLeft && !props.hideLabel" class="flex flex-grow flex-col">
      <SwitchLabel as="span" class="text-sm font-medium leading-6" passive>
        {{ props.label }}
      </SwitchLabel>
      <SwitchDescription
        v-if="props.description"
        as="span"
        class="text-sm text-black/60 dark:text-white/60"
      >
        {{ props.description }}
      </SwitchDescription>
    </span>
    <Switch
      v-model="model"
      :class="[
        model ? 'bg-primary-500' : 'bg-gray-200 dark:bg-white/10',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-800',
      ]"
    >
      <span v-if="!props.hideLabel" class="sr-only">{{ props.label }}</span>
      <span
        aria-hidden="true"
        :class="[
          model ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      />
    </Switch>
    <SwitchLabel v-if="!props.labelLeft && !props.hideLabel" as="span" class="ml-3 text-sm">
      <span class="font-medium">{{ props.label }}</span>
      <span v-if="props.description" class="ml-2 text-black/60 dark:text-white/60">
        ({{ props.description }})
      </span>
    </SwitchLabel>
  </SwitchGroup>
</template>
