import React from 'react';
import { mount } from 'enzyme';

import UserMenu from './UserMenu';

describe('<UserMenu />', () => {
  it('renders the logged out user sections', () => {
    const wrapper = mount(<UserMenu settings={{ lmsBaseUrl: 'courses.edx.org' }} />);

    expect(wrapper.find('.js-user-cta').exists()).toBe(true);
    expect(wrapper.find('.btn').first().text()).toEqual('Sign In');
    expect(wrapper.find('.btn').first().prop('href')).toEqual('https://courses.edx.org/login');
    expect(wrapper.find('.btn-blue').text()).toEqual('Register');
    expect(wrapper.find('.btn-blue').first().prop('href')).toEqual('https://courses.edx.org/register');
  });

  it('renders the logged in user sections when user details present', () => {
    const wrapper = mount(<UserMenu settings={{ lmsBaseUrl: 'courses.edx.org' }} />);

    wrapper.setState({
      userLoggedIn: true,
      userDetails: {
        username: 'L. Kilmister',
        header_urls: {
          learner_profile: 'https://courses.edx.org/u/Lkilmister',
        },
      },
    });

    // Menu Closed
    expect(wrapper.find('.user-menu.logged-in').exists()).toBe(true);

    const dropdownBtn = wrapper.find('.user-menu .js-dropdown-button');
    expect(dropdownBtn.exists()).toBe(true);
    expect(dropdownBtn.prop('aria-expanded')).toEqual(false);

    let dropdownMenu = wrapper.find('#edx-user-menu');
    expect(dropdownMenu.exists()).toBe(false);

    // Menu Open
    wrapper.setState({ menuOpen: true });

    expect(wrapper.find('.js-user-cta').exists()).toBe(false);
    expect(dropdownBtn.prop('aria-expanded')).toEqual(true);

    dropdownMenu = wrapper.find('#edx-user-menu');
    expect(dropdownMenu.exists()).toBe(true);
    expect(dropdownMenu.find('.dropdown-item').length).toEqual(4);
    expect(dropdownMenu.find('.dropdown-item').at(0).text()).toEqual('Dashboard');
    expect(dropdownMenu.find('.dropdown-item').at(0).find('a').prop('href')).toEqual('courses.edx.org/dashboard');
    expect(dropdownMenu.find('.dropdown-item').at(1).text()).toEqual('Profile');
    expect(dropdownMenu.find('.dropdown-item').at(1).find('a').prop('href')).toEqual('https://courses.edx.org/u/Lkilmister');
    expect(dropdownMenu.find('.dropdown-item').at(2).text()).toEqual('Account');
    expect(dropdownMenu.find('.dropdown-item').at(2).find('a').prop('href')).toEqual('courses.edx.org/account/settings');
    expect(dropdownMenu.find('.dropdown-item').at(3).text()).toEqual('Sign Out');
    expect(dropdownMenu.find('.dropdown-item').at(3).find('a').prop('href')).toEqual('courses.edx.org/logout');
  });

  it('renders the logged in user dashboard link when logged in with no user details', () => {
    const wrapper = mount(<UserMenu settings={{ lmsBaseUrl: 'courses.edx.org' }} />);

    wrapper.setState({
      userLoggedIn: true,
      userDetails: false,
    });

    expect(wrapper.find('.js-user-cta').exists()).toBe(true);
    expect(wrapper.find('.btn').first().text()).toEqual('Dashboard');
    expect(wrapper.find('.btn').first().prop('href')).toEqual('https://courses.edx.org/dashboard');
  });
});
