import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
	state = {
		title: ''
	}

	onChange = (a) => this.setState(
		{ [a.target.name]: [a.target.value]}
	)
	
	onSubmit = (a) => {
		//to stop the default sending like in vanilla JS
		a.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' })
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{display: 'flex'}}>
				<input
					type='text'
					name='title'
					style={{
						flex: '10',
						padding: '5px'
					}}
					placeholder='Add a new todo item ...'
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input 
					type='submit'
					value='Add'
					className='btn'
					style={{
						flex: '1',
						float: 'right'
					}}
				/>	
			</form>
			)
		}
	}
	
// PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
}