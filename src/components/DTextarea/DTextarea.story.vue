<script setup lang="ts">
import { ref } from 'vue';
import DTextarea from './DTextarea.vue';
const content1 = ref('');
const content2 = ref('');
const content3 = ref('');
const content4 = ref('');
const content5 = ref('');
</script>

<template>
  <Story :layout="{ type: 'grid', width: '50%' }">
    <Variant title="Default">
      <DTextarea v-model="content1" name="ta1" label="Add a Comment" />
      <p class="mt-4 font-mono">Value: {{ content1 }}</p>
    </Variant>

    <Variant title="With Description">
      <DTextarea
        v-model="content2"
        name="ta1"
        label="Add a Comment"
        description="You can enter text in this area."
      />
      <p class="mt-4 font-mono">Value: {{ content2 }}</p>
    </Variant>

    <Variant title="With Error">
      <DTextarea
        v-model="content3"
        name="ta1"
        label="Add a Comment"
        status="error"
        errorMessage="This text is the wrong format."
      />
      <p class="mt-4 font-mono">Value: {{ content3 }}</p>
    </Variant>

    <Variant title="Hidden Label">
      <DTextarea
        v-model="content4"
        name="ta2"
        :hideLabel="true"
        placeholder="Label is sr-only..."
        label="Add a Comment"
      />
      <p class="mt-4 font-mono">Value: {{ content4 }}</p>
    </Variant>

    <Variant title="Hidden Label with Error">
      <DTextarea
        v-model="content5"
        name="ta2"
        :hideLabel="true"
        placeholder="Label is sr-only..."
        label="Add a Comment"
        status="error"
        errorMessage="This text is the wrong format."
      />
      <p class="mt-4 font-mono">Value: {{ content5 }}</p>
    </Variant>
  </Story>
</template>
