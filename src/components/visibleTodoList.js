import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import TodoList from './TodoList';

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
            <TodoList todos={this.props.todos} onTodoClick={(id) => actions.toggleTodo(id)}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos.filter((todo) => todo === todo ), // TODO: Add filtering logic
    }
}

export default connect(mapStateToProps, actions)(VisibleTodoList);