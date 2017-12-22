import React, { Component } from 'react';


export default class TodoList extends Component {
    render() {
        let todoNodes = this.props.data.map(todo => {
            return (
                <div className="panel panel-primary">
                    Title : {todo.title}
                </div>
            )
        })
        return (

            <div className="panel panel-success">
                <h1> All Todos </h1>
                { todoNodes }
            </div>
        )
    }
}