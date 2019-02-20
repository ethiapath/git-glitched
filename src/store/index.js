import { createStore } from 'smitty'

// Create a store with initial state
const initialState = { 
  nextId: 1,
  notes: [
    {id:0, title:'First Note', slug:'first-note', text:'Hello World!'}
    
  ]
}
const store = createStore(initialState)

store.createActions({
  addNote: 'notes/ADD',
  editNote: 'notes/EDIT',
  updateNote: 'notes/UPDATE'
})

// add a reducer
store.handleActions({
  [store.actions.addNote]: (state, e, type) => {
    let newNote = {id: state.nextId, title: 'New Note', text: 'Add a note.'}
    return Object.assign({}, state, { notes: [...state.notes, newNote], nextId: (state.nextId + 1)})
  },
  [store.actions.updateNote]: (state, e, type) => {
    let updatedNote = Object.assign({}, e.note )
    let updateIndex = state.notes.findIndex(note => note.id === updatedNote.id)
    return Object.assign({}, state, { notes: [
      ...state.notes.slice(0, updateIndex),
      updatedNote,
      ...state.notes.slice(updateIndex + 1)
    ]})
  },
  '*': (state, e, type) => {
    // '*' can be used for all kinds of fun stuff
    console.log('*', type, e)
    return state
  }
})

export default store