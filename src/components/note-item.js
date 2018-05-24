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
      <li key={this.props.index}>
        <div className="tasks">
          <h3>{this.props.index + 1} - {this.props.data.title}</h3>
          <p>{this.props.data.content}</p>
        </div>
        <button onClick={this.handleDelete}>Delete item</button>
      </li>
    );
  }
}
