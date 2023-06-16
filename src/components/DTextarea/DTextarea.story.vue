<script setup lang="ts">
import { ref } from 'vue';
import DTextarea from './DTextarea.vue';
const content = ref('');
</script>

<template>
  <Story>
    <Variant title="Default">
      <DTextarea v-model="content" name="ta1" label="Add a Comment" />
      <p class="mt-8 font-mono">Value: {{ content }}</p>
    </Variant>

    <Variant title="Hidden Label">
      <DTextarea
        v-model="content"
        name="ta2"
        :hideLabel="true"
        placeholder="Label is sr-only..."
        label="Add a Comment"
      />
      <p class="mt-8 font-mono">Value: {{ content }}</p>
    </Variant>
  </Story>
</template>
