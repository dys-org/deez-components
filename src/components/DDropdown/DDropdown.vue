<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import type { Component } from 'vue';
import IconChevronDown from '~icons/feather/chevron-down';
import IconMoreHorizontal from '~icons/feather/more-horizontal';

export interface DropOption {
  label?: string;
  id: string | number;
  to?: string;
  icon?: string | Component;
  children?: DropOption[];
  divider?: boolean;
  disabled?: boolean;
}

export interface DDropdownProps {
  label: string;
  minimal?: boolean;
  options: DropOption[];
}

const props = withDefaults(defineProps<DDropdownProps>(), {});
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <!-- minimal dots button -->
      <MenuButton
        v-if="props.minimal"
        class="flex items-center rounded-full bg-black/5 p-0.5 text-gray-400 transition-colors hover:bg-black/10 hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary-500 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-gray-200"
      >
        <span class="sr-only">{{ props.label }}</span>
        <IconMoreHorizontal class="h-5 w-5" aria-hidden="true" />
      </MenuButton>
      <!-- button with text -->
      <MenuButton
        v-else
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-white/10 dark:ring-white/5 dark:hover:bg-white/[.15]"
      >
        {{ props.label }} <IconChevronDown class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
      >
        <div class="p-1">
          <template v-for="opt in options" :key="opt.id">
            <hr v-if="opt.divider" class="mx-1.5 border-black/5 dark:border-white/5" />
            <MenuItem v-else v-slot="{ active }" :disabled="opt.disabled">
              <button
                type="button"
                :class="[
                  'inline-flex w-full items-center px-4 py-2 text-left text-sm',
                  active && 'rounded-md bg-primary-600 text-white dark:bg-primary-600',
                  opt.disabled && 'cursor-not-allowed opacity-40',
                ]"
              >
                <component
                  v-if="opt.icon"
                  :is="opt.icon"
                  class="mr-2 h-3.5 w-3.5 text-gray-400"
                  aria-hidden="true"
                />
                {{ opt.label }}
              </button>
            </MenuItem>
          </template>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
