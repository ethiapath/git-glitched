import { h, render, Component } from 'preact';

import NoteList from './NoteList'

class Notes extends Component {
    constructor () {
      super()
    }

    render({notes, addNote}, {}) {
      return (
        <div>
          <button onClick={addNote} class="button btn-default">Add</button>
          <NoteList notes={notes} />          
        </div>
      )
    }
  }

export default Notes