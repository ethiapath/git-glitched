import { h, render, Component } from 'preact';
import Router from 'preact-router'
import { connect } from 'preact-smitty'
import Home from './components/Home'
import Notes from './components/Notes'

function mapStateToProps (state) {
  return {
    nextId: state.nextId,
    notes:state.notes
  }
}

const App = connect(mapStateToProps)(
  class App extends Component {
    render({notes, actions}) {
      return (
        <div>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a> 
            <a href="/notes">Notes</a>
            <a href="https://glitch.com/edit/#!/preact-sandbox-1" target="_blank">Edit</a> 
          </nav>
          <Router>
            <Home path="/" />
            <div path="/about">
              <h1>About</h1>
            </div>
            <Notes path="/notes" notes={notes} addNote={actions.addNote}/>
          </Router>
        </div> 
      )
    }
  }
)
export default App
