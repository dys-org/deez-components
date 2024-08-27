<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

import { cn } from '@/utils';

import { DLink } from '../DLink';

export interface DropOption {
  label?: string;
  key: string | number;
  to?: RouteLocationRaw;
  fn?: () => void;
  icon?: string;
  children?: DropOption[];
  divider?: boolean;
  disabled?: boolean;
  danger?: boolean;
}

export interface DDropdownProps {
  label: string;
  minimal?: boolean;
  options: DropOption[];
  aligned?: 'right' | 'left';
  buttonClass?: HTMLAttributes['class'];
  menuClass?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<DDropdownProps>(), {
  minimal: false,
  aligned: 'right',
  buttonClass: '',
  menuClass: '',
});
</script>
<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger
      :class="
        cn(
          'relative inline-block text-left',
          props.minimal
            ? cn(
                'flex items-center rounded-full bg-black/5 p-0.5 text-gray-400 transition-colors hover:bg-black/10 hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary-500 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-gray-200',
                props.buttonClass,
              )
            : cn(
                'inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-white/10 dark:ring-transparent dark:hover:bg-white/[.15]',
                props.buttonClass,
              ),
        )
      "
    >
      <template v-if="props.minimal">
        <span class="sr-only">{{ props.label }}</span>
        <span class="i-lucide-more-horizontal size-5" aria-hidden="true"></span>
      </template>
      <template v-else>
        <slot>
          {{ props.label }}
          <span class="i-lucide-chevron-down -mr-1 size-5 text-gray-400" aria-hidden="true"></span>
        </slot>
      </template>
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="
          cn(
            'z-50 mt-2 min-w-40 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-white dark:ring-opacity-10',
            props.aligned === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right',
            props.menuClass,
          )
        "
      >
        <div class="p-1">
          <template v-for="opt in options" :key="opt.key">
            <DropdownMenuSeparator
              v-if="opt.divider"
              class="m-1 h-px bg-gray-200 dark:bg-gray-700"
            />
            <DropdownMenuItem
              v-else
              as-child
              :disabled="opt.disabled"
              :class="[
                'inline-flex w-full items-center rounded-md px-3 py-2 text-left text-sm ring-2 ring-inset ring-transparent focus:outline-none focus:ring-primary-500',
                opt.danger && 'text-danger-600 dark:text-danger-500',
                opt.disabled && 'cursor-not-allowed opacity-40',
              ]"
            >
              <component
                :is="opt.to ? DLink : 'button'"
                :to="opt.to"
                :type="opt.to ? undefined : 'button'"
                @click="opt.fn"
              >
                <span
                  v-if="opt.icon"
                  :class="[opt.icon, 'mr-2 size-4', opt.danger ? 'text-current' : 'text-gray-400']"
                  aria-hidden="true"
                ></span>
                {{ opt.label }}
              </component>
            </DropdownMenuItem>
          </template>
        </div>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
