<script setup lang="ts">
import DDropdown from './DDropdown.vue';
import IconDollarSign from '~icons/feather/dollar-sign';
const options = [
  {
    label: 'Jay Gatsby',
    id: 'jay_gatsby',
  },
  {
    label: 'Daisy Buchanan',
    id: 'daisy_buchanan',
    icon: IconDollarSign,
  },
  {
    divider: true,
    id: 'd1',
  },
  {
    label: 'Nick Carraway',
    id: 'nick_carraway',
    disabled: true,
  },
  {
    label: 'Others',
    id: 'others',
    children: [
      {
        label: 'Jordan Baker',
        id: 'jordan baker',
      },
      {
        label: 'Tom Buchanan',
        id: 'tom buchanan',
      },
    ],
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
