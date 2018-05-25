import React from 'react';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="info">
        <p>Add or remove notes from your list to keep track of your tasks.</p>
        <p>Click on dashboard to get started.</p>
      </div>
    );
  }
}

