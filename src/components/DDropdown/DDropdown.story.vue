<script setup lang="ts">
import { createMemoryHistory, createRouter } from 'vue-router';

import DDropdown from './DDropdown.vue';

//@ts-expect-error
//eslint-disable-next-line @typescript-eslint/no-unused-vars
function setupApp({ app, story, variant }) {
  // Router mock
  app.use(
    createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/profile', name: 'Profile', component: { render: () => null } },
        { path: '/settings', name: 'Settings', component: { render: () => null } },
      ],
    }),
  );
}

const options = [
  {
    label: 'Profile',
    key: 'profile',
    to: '/profile',
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: 'i-lucide-cog',
    to: '/settings',
  },
  { divider: true, key: 'd1' },
  {
    label: 'Disabled Option',
    key: 'disabled_option',
    disabled: true,
  },
  {
    label: 'Other People',
    key: 'other_people',
    // TODO implement nested dropdowns
    children: [
      {
        label: 'Jordan Baker',
        key: 'jordan_baker',
      },
      {
        label: 'Tom Buchanan',
        key: 'tom_buchanan',
      },
    ],
  },
  { divider: true, key: 'd2' },
  {
    label: 'Sign Out',
    key: 'sign_out',
    icon: 'i-lucide-dollar-sign',
    danger: true,
    fn: () => {
      console.log('sign out');
    },
  },
];

// const items = [ [ { label: 'Edit', to: '#' }, { label: 'Duplicate', to: '#' }, ], [ { label: 'Archive', to: '#' }, { label: 'Move', to: '#' }, ], [ { label: 'Share', to: '#' }, { label: 'Add to favorites', to: '#' }, ], [{ label: 'Delete', to: '#' }], ];
</script>

<template>
  <Story :setup-app="setupApp" :layout="{ type: 'single', iframe: true }">
    <Variant title="Minimal button">
      <div class="flex justify-center">
        <DDropdown :options="options" minimal label="Open Options" menu-class="w-32" />
      </div>
    </Variant>
    <Variant title="Button with text">
      <div class="flex justify-center">
        <DDropdown :options="options" label="Options" menu-class="w-48" />
      </div>
    </Variant>
  </Story>
</template>
