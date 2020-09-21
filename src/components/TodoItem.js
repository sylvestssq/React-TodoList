import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

    /* Function within the class to set dynamic style */
    getStyle = () => {
        return {
            // this is a turnary operatior. 
            //If true use line-through, if false use none
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'

        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title}
                {/* button for deleting todo list*/}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

//To have fixed CSS styling 
const itemStyle = {
    backgroundColor: '#f4f4f4'
}
//css styling for x button
const btnStyle = {
    backgroundColor: '#20A4F3',
    color: '#ffffff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}