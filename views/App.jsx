


import React, { Component } from 'react';
// import style from './style';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.handleTodoDelete = this.handleTodoDelete.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }
    loadTodosFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }
    handleTodoSubmit(comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        axios.post(this.props.url+'/todo/'+comment.id, comment)
            .catch(err => {
                console.error(err);
                this.setState({ data: comments });
            });
    }
    handleTodoDelete(id) {
        axios.delete(`${this.props.url}/${id}`)
            .then(res => {
                console.log('Comment deleted');
            })
            .catch(err => {
                console.error(err);
            });
    }
    handleTodoUpdate(id, comment) {
        //sends the comment id and new author/text to our api
        axios.put(`${this.props.url}/${id}`, comment)
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        this.loadTodosFromServer();
        setInterval(this.loadTodosFromServer, this.props.pollInterval);
    }


   render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./images/logo.svg" 

          className="App-logo" alt="logo" />
          <h2>Welcome to React+ Express +Mongo</h2>
        </div>
          <TodoList

              onTodoDelete={ this.handleTodoDelete }

              onTodoUpdate={ this.handleTodoUpdate }

              data={ this.state.data }/>
          <TodoForm onTodoSubmit={ this.handleTodoSubmit }/>


      </div>
    );
  }
}

export default App;