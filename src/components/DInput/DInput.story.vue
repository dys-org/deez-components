<script setup lang="ts">
import { ref } from 'vue';
import DInput from './DInput.vue';

const genericVal = ref('');
const lastName = ref('Soards');
</script>

<template>
  <Story>
    <Variant title="Default">
      <div class="w-96">
        <DInput
          v-model="genericVal"
          label="First Name"
          name="firstName"
          placeholder="Don't use placeholders."
          description="Enter your first name."
        />
        <p class="mt-8 font-mono">Value: {{ genericVal }}</p>
      </div>
    </Variant>

    <Variant title="Email Invalid">
      <div class="w-96">
        <DInput
          v-model="genericVal"
          type="email"
          label="Email"
          name="email"
          status="error"
          error-message="Not a valid email address"
          placeholder="Don't use placeholders."
        />
        <p class="mt-8 font-mono">Value: {{ genericVal }}</p>
      </div>
    </Variant>

    <Variant title="Disabled">
      <div class="w-96">
        <DInput v-model="lastName" label="Last Name" name="lastName" disabled />
        <p class="mt-8 font-mono">Value: {{ lastName }}</p>
      </div>
    </Variant>

    <Variant title="Hidden Label with ID passed">
      <div class="w-96">
        <DInput
          v-model="genericVal"
          type="password"
          label="Invisible"
          name="invisible"
          id="attrs-id"
          hide-label
          placeholder="This is terrible for a11y"
        />
        <p class="mt-8 font-mono">Value: {{ genericVal }}</p>
      </div>
    </Variant>

    <Variant title="Password">
      <div class="w-96">
        <DInput
          v-model="genericVal"
          label="Password"
          name="password"
          description="ABC 123 is good."
          type="password"
        />
        <p class="mt-8 font-mono">Value: {{ genericVal }}</p>
      </div>
    </Variant>
  </Story>
</template>
