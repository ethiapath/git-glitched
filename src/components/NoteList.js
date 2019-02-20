import {h} from 'preact'

function Note ({key, note}) {
  return <div class="note card card-1" key={key}>
      <h3>{note.title || 'New Note'}</h3>
      <p>{note.text || 'Add some text'}</p>
    </div>
}

export default ({notes}) => (
  <div>
    {
      notes.map(note => <Note note={note} key={note.id}/>)
    }
  </div>
)
