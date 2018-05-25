# To-Do App

**Author** Kris Sakarias

**Version** 1.0.0 

## Overview
This is a React app that allows a user to organize tasks on a to-do list. A task can be created, removed, or updated. Tasks are displayed in a grid.

### Documentation
Starting the Webpack Dev Server:

```
git clone https://github.com/kris71990/to-do-app

npm i

npm run watch
```

**Component Structure**
```
App
  Landing
  Dashboard
    NoteForm
    NoteList
      Noteitem
        Modal
```

- Component 1 - App
  - Hosts the routing functionality, rendering a nav list and rendering components based on selection from nav list

- Component 2 - Landing
  - Renders instructions on using the app

- Component 3 - Dashboard
  - Handles all of the action
    - hosts add and delete methods for addition and deletion of notes
    - Renders the NoteForm and NoteList components, and passes them the relevant data

- Component 4 - NoteForm
  - Renders a form
    - Field 1 - enter the title of a task
    - Field 2 - enter a description of the task
  - On submission, a note is added to the array of notes

- Component 5 - NoteList
  - Renders a visual representation of the list of all NoteItems

- Component 6 - NoteItem
  - Renders a single task from the notes array with the relevant information, with a delete button to delete the task, and an update button to edit the task

- Component 7 - Modal
  - When choosing to update a note, the modal appears with a NoteForm component to submit an edit.
