<script setup lang="ts">
import DButton from '../DButton/DButton.vue';
import DInput from '../DInput/DInput.vue';
import DCollapse from './DCollapse.vue';
</script>

<template>
  <Story :layout="{ type: 'single', iframe: true }">
    <Variant title="Basic with description">
      <DCollapse button-text="Settings">
        <div class="flex flex-col gap-8 px-4 pb-6 pt-3">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, modi harum. Vitae
            quibusdam vero, asperiores itaque eaque accusantium maxime est voluptatibus, quis in
            optio cum provident exercitationem ab ipsa nihil!
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, iste perferendis
            laboriosam dolorem aspernatur sint ipsam quaerat, id porro illo vitae perspiciatis ullam
            saepe mollitia hic numquam deserunt tempore impedit!
          </p>
          <DButton>Button</DButton>
          <DInput id="input" label="Input" />
        </div>
      </DCollapse>
      <!-- use v-model:defaultOpen to persist expanded state -->
      <DCollapse button-text="Default Open Arrow End" arrow-style="end" :default-open="true">
        <div class="flex flex-col gap-8 px-4 pb-6 pt-3">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis excepturi
            aspernatur sunt! Repudiandae natus ea minus, aliquam minima quaerat quo vero. Illum
            inventore atque voluptate quidem maxime fugiat quam.
          </p>
        </div>
      </DCollapse>
      <DCollapse button-text="Arrow None" arrow-style="none">
        <div class="flex flex-col gap-8 bg-gray-100 px-4 pb-6 pt-3 dark:bg-gray-800">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
      </DCollapse>
    </Variant>
  </Story>
</template>
