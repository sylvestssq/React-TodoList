import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import {v4 as uuid} from 'uuid';
import axios from 'axios';

export default class App extends Component{
  
  state = {
    todos: [
    ]
  }
  
  componentDidMount () {
    //gives us a promise
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .then(response => this.setState({todos: response.data}))
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }
  
  //Delete todo
  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  //Add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(response => this.setState({ todos: [...this.state.todos, response.data]}))
  }
  
  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header/>
          <Route exact path='/' render={props => (
            <React.Fragment>
              {/* Calling the Todos component */}
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              <AddTodo addTodo={this.addTodo}/>
            </React.Fragment>
          )} />
          <Route path='/about' component={About}/>
        </div>
      </div>
      </Router>
    );    
  }
}
  