import { h, render, Component } from 'preact';

export default class Home extends Component {
  constructor () {
    super()
    this.state.count = 0
    this.handleClick = (e) => {
      this.setState({count: (this.state.count += 1)})
    }
  }
   
  
  
  render({}, {count}) {
    return (
      <div>
        <h1>Home</h1>
        <p>
        Welcome!!
        </p>
        
        <button onClick={this.handleClick} class="button btn-default">Click me. {count}</button>
      </div> 
    )
  }
}
