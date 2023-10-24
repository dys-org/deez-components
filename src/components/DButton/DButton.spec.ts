import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import DButton from './DButton.vue';

describe('DButton', () => {
  it('renders properly', () => {
    const wrapper = mount(DButton, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
