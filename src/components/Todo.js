import React, { Component } from 'react';
import propTypes from 'prop-types';

import './App.css';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            done: false
        }
    }

    render() {
        return (
            <li className="Todo">
                <input type="checkbox"
                       value={this.state.done}
                       onChange={this.props.onTodoClick}
                />

                <h1> {this.props.title} </h1>
            </li>
        );
    }
}

const Todo1 =  ({title, done}) => (
    <li className="Todo">
        <input type="checkbox" value={done} onChange={} />
        <h1> {title} </h1>
    </li>
);

Todo.propTypes = {

}

export default Todo;
