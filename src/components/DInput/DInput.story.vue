<script setup lang="ts">
import { ref } from 'vue';
import DInput from './DInput.vue';

const val1 = ref('');
const val2 = ref('');
const val3 = ref('');
const val4 = ref('');
const val5 = ref('');
const lastName = ref('Soards');
</script>

<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default with description">
      <div class="w-96">
        <DInput
          v-model="val1"
          label="First Name"
          name="firstName"
          placeholder="Don't use placeholders."
          description="Enter your first name."
        />
        <p class="mt-4 font-mono">Value: {{ val1 }}</p>
      </div>
    </Variant>

    <Variant title="Email Invalid no description">
      <div class="w-96">
        <DInput
          v-model="val2"
          type="email"
          label="Email"
          name="email"
          status="error"
          error-message="Not a valid email address"
          placeholder="Don't use placeholders."
        />
        <p class="mt-4 font-mono">Value: {{ val2 }}</p>
      </div>
    </Variant>

    <Variant title="Disabled">
      <div class="w-96">
        <DInput v-model="lastName" label="Last Name" name="lastName" disabled />
        <p class="mt-4 font-mono">Value: {{ lastName }}</p>
      </div>
    </Variant>

    <Variant title="Hidden Label with ID passed">
      <div class="w-96">
        <DInput
          v-model="val3"
          type="password"
          label="Invisible"
          name="invisible"
          id="attrs-id"
          hide-label
          placeholder="This is terrible for a11y"
        />
        <p class="mt-4 font-mono">Value: {{ val3 }}</p>
      </div>
    </Variant>

    <Variant title="Hidden Label with Error">
      <div class="w-96">
        <DInput
          v-model="val4"
          type="password"
          label="Invisible"
          name="invisible"
          hide-label
          placeholder="This is terrible for a11y"
          status="error"
          error-message="This is an error message."
        />
        <p class="mt-4 font-mono">Value: {{ val4 }}</p>
      </div>
    </Variant>

    <Variant title="Password">
      <div class="w-96">
        <DInput
          v-model="val5"
          label="Password"
          name="password"
          description="ABC 123 is good."
          type="password"
        />
        <p class="mt-4 font-mono">Value: {{ val5 }}</p>
      </div>
    </Variant>
  </Story>
</template>
