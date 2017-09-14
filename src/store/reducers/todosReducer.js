import actionTypes from '../actions/types';

let todoId = 1;

const todo = (action, currTodo) => {
    switch (action.type) {
        case actionTypes.addTodo:
            return {
                id: todoId++,
                title: action.payload.title
            };
        case actionTypes.toggleTodo:
            return Object.assign({}, currTodo, { done: !currTodo.done });
        default:
            return currTodo;
    }
}

const getTodoIndex = (state, id) => state.findIndex((todo) => todo.id === id);

export default function (state = [], action) {
    switch (action.type) {
        case actionTypes.addTodo:
            return [
                ...state,
                todo(action)
            ];
            break;
        case actionTypes.removeTodo:
            let index1 = getTodoIndex(state, action.payload.id);
            return [
                ...state.slice(0, index1),
                ...state.slice(index1 + 1)
            ];
        case actionTypes.toggleTodo:
            let index2 = getTodoIndex(state, action.payload.id);
            return [
                ...state.slice(0, index2),
                todo(action),
                ...state.slice(index2 + 1)
            ]
        default:
            return state;
    }
}