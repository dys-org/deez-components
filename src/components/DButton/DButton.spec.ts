import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import DButton from './DButton.vue';

describe('DButton', () => {
  it('renders properly', () => {
    const wrapper = mount(DButton, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
