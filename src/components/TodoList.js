import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul className="todo-list">
        { todos.map((todo) => <Todo onClick={onTodoClick} todo={todo} key={todo.id} />) }
    </ul>
);

export default TodoList;