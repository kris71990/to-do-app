import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteItem);
  }

  handleDelete() {
    this.props.handleRemoveNote(this.props.data);
  }

  render() {
    const { 
      data, index, handleRemoveNote, handleUpdateNote,
    } = this.props;
    const showModal = () => handleRemoveNote({ ...data, editing: true });
    const hideModal = () => handleUpdateNote({ ...data, editing: false });
    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, editing: false });
    };

    return (
      <div className="note-item">
        <h3>{index + 1} - {data.title}</h3>
        <p>{data.content}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={showModal}>Update</button>
        <Modal show={data.editing} handleClose={hideModal}>
          <h3>Editing {data.title}</h3>
          <NoteForm handleComplete={updateAndClose} note={data}/>
        </Modal>
      </div>
    );
  }
}

NoteItem.propTypes = {
  data: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteItem;
