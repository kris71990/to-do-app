import React from 'react';
import uuid from 'uuid';
import autoBind from '../../utils/index';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      id: '',
    };

    autoBind.call(this, NoteForm);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(() => {
      return { id: uuid() };
    }, () => this.props.handleAddNote(this.state));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="form">
        <h1>Add a note</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text-area"
            name="content"
            placeholder="note"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Create Note</button>
        </form>
      </div>
    );
  }
}
