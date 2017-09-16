import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddTodo from './components/AddTodo';
import todosReducer from './store/reducers';
import TodoList from './components/visibleTodoList';
import Footer from './components/Footer';

import './App.css';

const store = createStore(todosReducer ,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="app-container">
            <AddTodo />
            <TodoList />      
            <Footer />      
          </div>
        </Provider>
    );
  }
}

export default App;
