<script setup lang="ts">
import DDropdown from './DDropdown.vue';
import IconDollarSign from '~icons/feather/dollar-sign';
const options = [
  {
    label: 'Profile',
    key: 'profile',
    to: '/profile',
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: IconDollarSign,
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
    icon: IconDollarSign,
    fn: () => {
      console.log('sign out');
    },
  },
];

// const items = [ [ { label: 'Edit', to: '#' }, { label: 'Duplicate', to: '#' }, ], [ { label: 'Archive', to: '#' }, { label: 'Move', to: '#' }, ], [ { label: 'Share', to: '#' }, { label: 'Add to favorites', to: '#' }, ], [{ label: 'Delete', to: '#' }], ];
</script>

<template>
  <Story>
    <Variant title="Minimal button">
      <div class="flex justify-center">
        <DDropdown :options="options" minimal label="Open Options" />
      </div>
    </Variant>
    <Variant title="Button with text">
      <div class="flex justify-center">
        <DDropdown :options="options" label="Options" />
      </div>
    </Variant>
  </Story>
</template>
