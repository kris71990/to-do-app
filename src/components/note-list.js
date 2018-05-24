import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <div>
        {
        this.props.data.length > 0 ?
        <div>
          <h2>Notes</h2>
          <ul className="notes">
          { this.props.data.map((item, index) => {
              return (
                <NoteItem data={item} key={index} index={index}
                handleRemoveNote={this.props.handleRemoveNote}
                />
              );
            })}
          </ul>
        </div>
      : undefined
      }
      </div>
    );
  }
}

// put <NoteItem/> inside <li>
