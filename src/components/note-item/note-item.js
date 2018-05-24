import React from 'react';
import autoBind from '../../utils/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteItem);
  }

  handleDelete() {
    this.props.handleRemoveNote(this.props.data);
  }

  render() {
    // const { data } = this.props.data;
    return (
      <div key={this.props.index}>
        <h3>{this.props.index + 1} - {this.props.data.title}</h3>
        <p>{this.props.data.content}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

// add modal component here, append note form inside modal component
// show, hide, update, close, model
