import { combineReducers } from 'redux';
import todoReducer from './todosReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default rootReducer;