import React from 'react';
import NoteItem from '../note-item/note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <ul>
      {
        this.props.data.length > 0 ? <h3>Notes</h3> : undefined
      }
      { 
        this.props.data.map((item, index) => {
          return (
            <li key={item.id}>
              <NoteItem 
                data={item} key={index} index={index}
                handleRemoveNote={this.props.handleRemoveNote}
              />
            </li>
          );
        })
      }
      </ul>
    );
  }
}

// put <NoteItem/> inside <li>
