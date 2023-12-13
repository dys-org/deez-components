import { defineSetupVue3 } from '@histoire/plugin-vue';

import StoryWrapper from './StoryWrapper.vue';

import '../src/assets/main.css';

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(StoryWrapper);
});
