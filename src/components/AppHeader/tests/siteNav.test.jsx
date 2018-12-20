import React from 'react';
import { mount } from 'enzyme';

import SiteNav from './SiteNav';

describe('<SiteNav />', () => {
  const wrapper = mount(<SiteNav />);

  it('renders the site nav', () => {
    expect(wrapper.find('#primary-menu-bar').exists()).toBe(true);
    const menuItems = wrapper.find('.menu-item');
    expect(menuItems.length).toBe(4);
    expect(menuItems.at(0).text()).toEqual('Courses');
    expect(menuItems.at(0).prop('href')).toEqual('/course?course=all');
    expect(menuItems.at(1).text()).toEqual('Programs');
    expect(menuItems.at(1).prop('href')).toEqual('/course?program=all');
    expect(menuItems.at(2).text()).toEqual('Schools & Partners');
    expect(menuItems.at(2).prop('href')).toEqual('/schools-partners');
    expect(menuItems.at(3).text()).toEqual('About');
    expect(menuItems.at(3).prop('href')).toEqual('/about-us');
  });

  it('should add a mobile menu button', () => {
    expect(wrapper.find('.js-mobile-menu-button').length).toBe(1);
  });

  it('should create a tab view on click of a menu button', () => {
    const coursesBtn = wrapper.find('#menu-trigger-courses');
    expect(coursesBtn.prop('aria-expanded')).toBe(false);
    expect(wrapper.find('#menu-tab-view-courses').exists()).toBe(false);

    coursesBtn.simulate('click');
    expect(coursesBtn.prop('aria-expanded')).toBe(true);
    expect(wrapper.find('#menu-tab-view-courses').exists()).toBe(true);
  });
});
