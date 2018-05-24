import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <div>
        {
        this.props.data ?
        <div>
          <h2>Notes</h2>
          <ul>
            { this.props.data.map((item, index) => {
              return (
                <li key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </li>
              );
            }, 0)}
          </ul>
        </div>
      : undefined
      }
      </div>
    );
  }
}
