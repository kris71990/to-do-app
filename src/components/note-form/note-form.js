import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const emptyState = {
  title: '',
  content: '',
  id: '',
};

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note ? this.props.note : emptyState;
    autoBind.call(this, NoteForm);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(() => {
      return { id: uuid() };
    }, () => this.props.handleComplete(this.state));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update' : 'Create';
    return (
      <div className="form">
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
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    );
  }
}

NoteForm.propTypes = {
  note: PropTypes.object,
  handleComplete: PropTypes.func,
};

export default NoteForm;
