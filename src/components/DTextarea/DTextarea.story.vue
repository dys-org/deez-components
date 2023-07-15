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

    <Variant title="With Description">
      <DTextarea
        v-model="content"
        name="ta1"
        label="Add a Comment"
        description="You can enter text in this area."
      />
      <p class="mt-8 font-mono">Value: {{ content }}</p>
    </Variant>

    <Variant title="With Error">
      <DTextarea
        v-model="content"
        name="ta1"
        label="Add a Comment"
        status="error"
        errorMessage="This text is the wrong format."
      />
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

    <Variant title="Hidden Label with Error">
      <DTextarea
        v-model="content"
        name="ta2"
        :hideLabel="true"
        placeholder="Label is sr-only..."
        label="Add a Comment"
        status="error"
        errorMessage="This text is the wrong format."
      />
      <p class="mt-8 font-mono">Value: {{ content }}</p>
    </Variant>
  </Story>
</template>
