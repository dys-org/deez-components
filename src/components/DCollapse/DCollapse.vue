<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { twMerge } from 'tailwind-merge';

import type { VueClass } from '../../types';
import TransitionHeight from './TransitionHeight.vue';

const defaultOpen = defineModel<boolean>('defaultOpen', { default: false });

export interface DCollapseProps {
  buttonText: string;
  arrowStyle?: 'start' | 'end' | 'none';
  buttonClass?: VueClass;
  class?: VueClass;
  icon?: string;
}

const props = withDefaults(defineProps<DCollapseProps>(), {
  arrowStyle: 'start',
  buttonClass: '',
  class: '',
  icon: 'i-lucide-chevron-right',
});
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="div"
    :class="
      twMerge('border-b-[1.5px] border-black/10 dark:border-white/[0.15]', props.class as string)
    "
    :default-open="defaultOpen"
  >
    <DisclosureButton
      :class="
        twMerge(
          'flex w-full items-center gap-2 rounded-sm p-3 text-left text-xs font-semibold uppercase transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:hover:bg-white/5',
          props.arrowStyle === 'end' && 'justify-between',
          props.buttonClass as string,
        )
      "
      @click="defaultOpen = !open"
    >
      <span
        v-if="props.arrowStyle !== 'none'"
        :class="[
          open
            ? 'rotate-90 text-black dark:text-white'
            : 'text-black/60 transition dark:text-white/60',
          'size-4 shrink-0 transition-[transform_color]',
          props.arrowStyle === 'end' && 'order-last justify-between',
          props.icon,
        ]"
      >
      </span>
      {{ props.buttonText }}
    </DisclosureButton>

    <TransitionHeight :open>
      <DisclosurePanel static>
        <slot />
      </DisclosurePanel>
    </TransitionHeight>
  </Disclosure>
</template>
