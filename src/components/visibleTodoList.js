import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import TodoList from './TodoList';
import Filters from '../store/Filters';

class VisibleTodoList extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo() {
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <TodoList 
                todos={this.props.todos} 
                onTodoClick={(id) => {this.props.toggleTodo(id)}}
            />
        )
    }
}

const isTodoCompleted = (todo) => todo.done === true;

const getFilterFunc = filter => {
    switch (filter) {
        case Filters.all: 
            return todo => todo;
        case Filters.completed: 
            return todo => isTodoCompleted(todo);
        case Filters.pending:
            return todo => !isTodoCompleted(todo);
        default:
            return x => x;
    }
}

function mapStateToProps(state, ownProps) {
    const isTodoVisible = getFilterFunc(state.filter);

    return {
        todos: state.todos.filter(isTodoVisible), // TODO: Add filtering logic
    }
}

export default connect(mapStateToProps, actions)(VisibleTodoList);