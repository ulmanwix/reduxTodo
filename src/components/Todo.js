import React, { Component } from 'react';
import propTypes from 'prop-types';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            done: false
        }
    }

    render() {
        return (
            <li className="todo">
                <input type="checkbox"
                       checked={this.props.todo.done}
                       onChange={() => this.props.onClick(this.props.todo.id)}
                    //    onClick={() => this.props.onClick(this.props.todo.id)}
                />

                <h4> {this.props.todo.title} </h4>
            </li>
        );
    }
}

export default Todo;
