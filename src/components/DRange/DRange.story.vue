<script setup lang="ts">
import { ref } from 'vue';
import DRange from './DRange.vue';

const val1 = ref(50);
const val2 = ref(0);
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="w-96">
        <DRange id="slide1" v-model.number="val1" label="Range Slider" />
        <p class="mt-4 font-mono">Value: {{ val1 }}</p>
      </div>
    </Variant>
    <Variant title="Min Max w/ Step">
      <div class="w-96">
        <DRange id="slide1" v-model="val2" label="Range Slider" :min="0" :max="5" :step="0.5" />
        <p class="mt-4 font-mono">Value: {{ val2 }}</p>
      </div>
    </Variant>
  </Story>
</template>
