import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('testing for initial state', () => {
    const mountedDashboard = mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
