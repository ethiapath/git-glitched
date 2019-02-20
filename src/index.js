import { h, render, Component } from 'preact'
import { Provider } from 'preact-smitty'
/** @jsx h */
import store from './store/'
import App from './App'

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById("container"));