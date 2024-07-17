<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import type { HTMLAttributes } from 'vue';

import { cn } from '../../utils';
import TransitionHeight from './TransitionHeight.vue';

const defaultOpen = defineModel<boolean>('defaultOpen', { default: false });

export interface DCollapseProps {
  buttonText: string;
  arrowStyle?: 'start' | 'end' | 'none';
  buttonClass?: HTMLAttributes['class'];
  class?: HTMLAttributes['class'];
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
    :class="cn('border-b-[1.5px] border-black/10 dark:border-white/[0.15]', props.class)"
    :default-open="defaultOpen"
  >
    <DisclosureButton
      :class="
        cn(
          'flex w-full items-center gap-2 rounded-sm p-3 text-left text-xs font-semibold uppercase transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:hover:bg-white/5',
          props.arrowStyle === 'end' && 'justify-between',
          props.buttonClass,
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
