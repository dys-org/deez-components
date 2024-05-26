<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { twMerge } from 'tailwind-merge';
import type { RouteLocationRaw } from 'vue-router';

import type { VueClass } from '../../types';
import SubMenuItem from './SubMenuItem.vue';

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
  buttonClass?: VueClass;
  menuClass?: VueClass;
}

const props = withDefaults(defineProps<DDropdownProps>(), {
  minimal: false,
  aligned: 'right',
  buttonClass: '',
});
</script>
<template>
  <Menu as="div" :class="twMerge('relative inline-block text-left')">
    <!-- minimal dots button -->
    <MenuButton
      v-if="props.minimal"
      :class="
        twMerge(
          'flex items-center rounded-full bg-black/5 p-0.5 text-gray-400 transition-colors hover:bg-black/10 hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary-500 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-gray-200',
          props.buttonClass as string,
        )
      "
    >
      <span class="sr-only">{{ props.label }}</span>
      <span class="i-lucide-more-horizontal size-5" aria-hidden="true"></span>
    </MenuButton>
    <!-- button with text -->
    <MenuButton
      v-else
      :class="
        twMerge(
          'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-white/10 dark:ring-transparent dark:hover:bg-white/[.15]',
          props.buttonClass as string,
        )
      "
    >
      <slot>
        {{ props.label }}
        <span class="i-lucide-chevron-down -mr-1 size-5 text-gray-400" aria-hidden="true"></span>
      </slot>
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        :class="
          twMerge(
            'absolute z-10 mt-2 min-w-40 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-white dark:ring-opacity-10',
            props.aligned === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right',
            props.menuClass as string,
          )
        "
      >
        <div class="p-1">
          <template v-for="opt in options" :key="opt.id">
            <hr v-if="opt.divider" class="m-1 border-gray-200 dark:border-gray-700" />
            <MenuItem
              v-else
              v-slot="{ active }"
              :disabled="opt.disabled"
              :class="[
                'inline-flex w-full items-center rounded-md px-3 py-2 text-left text-sm ring-2 ring-inset',
                opt.danger && 'text-danger-600 dark:text-danger-500',
                opt.disabled && 'cursor-not-allowed opacity-40',
              ]"
            >
              <SubMenuItem :opt="opt" :active="active">
                <span
                  v-if="opt.icon"
                  :class="[opt.icon, 'mr-2 size-4', opt.danger ? 'text-current' : 'text-gray-400']"
                  aria-hidden="true"
                ></span>
                {{ opt.label }}
              </SubMenuItem>
            </MenuItem>
          </template>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
