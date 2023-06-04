<script setup lang="ts">
import { ref } from 'vue';
import DCheckbox from './DCheckbox.vue';
import { logEvent } from 'histoire/client';
const cb1 = ref(false);
const cb2 = ref(false);
const checkedNames = ref([]);
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default (single boolean value)">
      <DCheckbox
        v-model="cb1"
        label="Candidates"
        name="box1"
        @update:modelValue="logEvent('Clicked CB1', { cb1 })"
      />
    </Variant>

    <Variant title="With Description">
      <DCheckbox
        v-model="cb2"
        label="Comments"
        name="box2"
        description="Get notified when someones posts a comment on a posting."
        @update:modelValue="logEvent('Clicked CB2', { cb2 })"
      />
    </Variant>

    <Variant title="Multiple (bound to same string array)">
      <div class="flex gap-8">
        <DCheckbox
          v-model="checkedNames"
          label="David"
          name="david"
          value="david"
          @update:modelValue="logEvent('Clicked David', checkedNames)"
        />
        <DCheckbox
          v-model="checkedNames"
          label="Gretel"
          name="gretel"
          value="gretel"
          @update:modelValue="logEvent('Clicked Gretel', checkedNames)"
        />
        <DCheckbox
          v-model="checkedNames"
          label="Sebastian"
          name="sebastian"
          value="sebastian"
          @update:modelValue="logEvent('Clicked Sebastian', checkedNames)"
        />
      </div>
    </Variant>
  </Story>
</template>
