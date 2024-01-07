<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { twMerge } from 'tailwind-merge';

import type { VueClass } from '../../types';

import IconChevronRight from '~icons/lucide/chevron-right';

export interface DCollapseProps {
  buttonText: string;
  arrowStyle?: 'start' | 'end' | 'none';
  buttonClasses?: string;
  class?: VueClass;
}

const props = withDefaults(defineProps<DCollapseProps>(), {
  arrowStyle: 'start',
  buttonClasses: '',
  class: '',
});
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="div"
    :class="
      twMerge('border-b-[1.5px] border-black/10 dark:border-white/[0.15]', props.class as string)
    "
  >
    <DisclosureButton
      :class="
        twMerge(
          'flex w-full items-center gap-2 rounded-sm p-3 text-left text-xs font-semibold uppercase transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:hover:bg-white/5',
          props.arrowStyle === 'end' && 'justify-between',
          props.buttonClasses,
        )
      "
    >
      <span
        v-if="props.arrowStyle !== 'none'"
        :class="[
          open
            ? 'rotate-90 text-black dark:text-white'
            : 'text-black/60 transition dark:text-white/60',
          'size-4 shrink-0 transition-[transform_color]',
          props.arrowStyle === 'end' && 'order-last justify-between',
        ]"
      >
        <slot name="icon">
          <IconChevronRight />
        </slot>
      </span>
      {{ props.buttonText }}
    </DisclosureButton>

    <div
      class="grid overflow-hidden transition-[opacity_grid-rows] duration-300 ease-in-out"
      :class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <DisclosurePanel as="div" class="overflow-hidden" :static="true">
        <slot />
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>
