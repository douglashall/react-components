import React from 'react';
import { mount } from 'enzyme';

import SiteHeader from './SiteHeader';

describe('<SiteHeader />', () => {
  it('renders the site header with search', () => {
    const wrapper = mount(<SiteHeader enableSearch />);

    expect(wrapper.find('.edx-logo').exists()).toBe(true);
    expect(wrapper.find('.edx-logo-heading').exists()).toBe(true);
    expect(wrapper.find('.js-edx-header-ui .course-search-bar').exists()).toBe(true);
    expect(wrapper.find('.js-user-cta').exists()).toBe(true);
  });

  it('renders the site header without search', () => {
    const wrapper = mount(<SiteHeader enableSearch={false} />);

    expect(wrapper.find('.edx-logo').exists()).toBe(true);
    expect(wrapper.find('.edx-logo-heading').exists()).toBe(true);
    expect(wrapper.find('.js-edx-header-ui .course-search-bar').exists()).toBe(false);
    expect(wrapper.find('.js-user-cta').exists()).toBe(true);
  });
});
