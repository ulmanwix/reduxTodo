import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddTodo from './components/AddTodo';
import todosReducer from './store/reducers';

import logo from './logo.svg';
import './App.css';

const store = createStore(todosReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <AddTodo />
        </Provider>
    );
  }
}

export default App;
