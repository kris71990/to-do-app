import React from 'react';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
import autoBind from '../../utils/index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };

    autoBind.call(this, Dashboard);
  }

  handleAddNote(note) {
    if (note.title === '' || note.text === '' || note.id === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemoveNote(note) {
    if (!note.id) {
      return this.setState({ error: true });
    }

    const newNotes = this.state.notes.filter(n => n.id !== note.id);

    return this.setState(() => {
      return {
        notes: newNotes,
        error: null,
      };
    });
  }

  handleUpdateNote(noteToUpdate) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => 
          (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>To-Do Dashboard</h1>
        <NoteForm
          handleComplete={this.handleAddNote} 
        />
        <NoteList
          data={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdateNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
}

export default Dashboard;
