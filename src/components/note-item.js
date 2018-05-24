import React from 'react';
import autoBind from '../utils/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteItem);
  }

  handleDelete() {
    this.props.handleRemoveNote(this.props.data);
  }

  render() {
    return (
      <li key={this.props.data.index}>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.content}</p>
        <button onClick={this.handleDelete}>Delete item</button>
      </li>
    );
  }
}
