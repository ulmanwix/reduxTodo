import React from 'react';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        { todos.map((todo) => <Todo onClick={onTodoClick} todo={todo} key={todo.key} />) }
    </ul>
)