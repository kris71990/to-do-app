import React from 'react';
import NoteItem from '../note-item/note-item';
import './note-list.scss';

class NoteList extends React.Component {
  render() {
    return (
      <ul className="list">
      {
        this.props.data.length > 0 ? <h3>Notes<span>({this.props.data.length})</span></h3>
        : undefined
      }
      { 
        this.props.data.map((item, index) => {
          return (
            <li key={item.id}>
              <NoteItem 
                data={item} key={index}
                handleRemoveNote={this.props.handleRemoveNote}
                handleUpdateNote={this.props.handleUpdateNote}
              />
            </li>
          );
        })
      }
      </ul>
    );
  }
}

export default NoteList;
