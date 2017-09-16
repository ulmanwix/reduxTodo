import types from './types';

// let todoId = 1;

export function addTodo(title) {
    return {
        type: types.addTodo,
        payload: {
            // id: todoId++,
            title
        }
    };
};

export function removeTodo(id) {
    return {
        type: types.removeTodo,
        payload: { id }
    };
};

export function toggleTodo(id) {    
    return {
        type: types.toggleTodo,
        payload: { id }
    };
};

export function setFilter(filter) {
    return {
        type: types.setFilter,
        payload: { filter }
    }
};

