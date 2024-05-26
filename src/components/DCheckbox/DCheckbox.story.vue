<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { ref } from 'vue';

import DCheckbox from './DCheckbox.vue';

const cb1 = ref(false);
const cb2 = ref(false);
const cb3 = ref(false);
const checkedNames = ref([]);
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default (single boolean value)">
      <DCheckbox
        id="box1"
        v-model="cb1"
        label="Candidates"
        name="box1"
        @update:modelValue="logEvent('Clicked CB1', { cb1 })"
      />
    </Variant>

    <Variant title="With Description">
      <DCheckbox
        id="box2"
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
          id="david"
          v-model="checkedNames"
          label="David"
          name="checkedNames"
          value="david"
          @update:modelValue="logEvent('Clicked David', checkedNames)"
        />
        <DCheckbox
          id="gretel"
          v-model="checkedNames"
          label="Gretel"
          name="checkedNames"
          value="gretel"
          @update:modelValue="logEvent('Clicked Gretel', checkedNames)"
        />
        <DCheckbox
          id="sebastian"
          v-model="checkedNames"
          label="Sebastian"
          name="checkedNames"
          value="sebastian"
          @update:modelValue="logEvent('Clicked Sebastian', checkedNames)"
        />
      </div>
    </Variant>

    <Variant title="Hidden Label">
      <DCheckbox
        id="box3"
        v-model="cb3"
        label="Hello Aria"
        hide-label
        name="box3"
        @update:modelValue="logEvent('Clicked CB3', { cb3 })"
      />
    </Variant>
  </Story>
</template>
