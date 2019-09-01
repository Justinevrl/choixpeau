import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import Result from './Containers/Result'

const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];
const reducer = (state, action) => ({
  houses,
  selectedHouses: houses[Math.floor(Math.random() * 4)]
})
const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
      <Result />
      </Provider>
    );
  }
}

export default App;