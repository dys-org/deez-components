<script setup lang="ts">
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
        </div>
      </DCollapse>
      <DCollapse button-text="Things" arrow-style="end">
        <div class="flex flex-col gap-8 px-4 pb-6 pt-3">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis excepturi
            aspernatur sunt! Repudiandae natus ea minus, aliquam minima quaerat quo vero. Illum
            inventore atque voluptate quidem maxime fugiat quam.
          </p>
        </div>
      </DCollapse>
      <DCollapse button-text="Other Stuff" arrow-style="none">
        <div class="flex flex-col gap-8 bg-gray-100 px-4 pb-6 pt-3 dark:bg-gray-800">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
      </DCollapse>
    </Variant>
  </Story>
</template>
