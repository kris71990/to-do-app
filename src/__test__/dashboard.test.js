import React from 'react';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('testing for initial state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('dashboard should display "To-Do Dashboard"', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard/>);
    expect(mountedDashboard.find('h2').text()).toEqual('Add Note');
  });

  test('dashboard should contain note form', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard/>);
    expect(mountedDashboard.find('NoteForm')).toBeTruthy();
  });

  test('notes should be added correctly to internal state', () => {
    const mountedDashboard = enzymeShallowMount(<Dashboard/>);
    mountedDashboard.setState({
      notes: [
        {
          title: 'Task',
          content: 'test',
        },
        {
          title: 'Task 2',
          content: 'test 2',
        },
      ],
    });
    expect(mountedDashboard.find('NoteList').props().data).toHaveLength(2);
    expect(mountedDashboard.find('li')).toBeTruthy();
  });
});
