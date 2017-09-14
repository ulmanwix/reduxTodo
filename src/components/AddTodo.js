import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

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
            <div>
                <input
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                />

                <button onClick={() => this.addTodo('test')}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {

    }
}

export default connect(mapStateToProps, actions)(AddTodo);