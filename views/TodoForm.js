import React, { Component } from 'react';
// import style from './style';

export default  class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', text: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    }
    render() {
        return (

       <div>
            <h1> Add new Todo</h1>
            <form  onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp" 
                     placeholder="Title"/>

                </div>
                <div className="form-group">
                    <label for="exampleSelect1">Priority</label>
                    <select className="form-control" 
                    id="exampleSelect1">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Normal</option>

                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Description</label>
                    <input type="text" className="form-control" 
                     id="exampleTextarea"placeholder="Description"/>
                </div>
                <div className="form-group">
                    <label for="datetimepicker1">Due date</label>
                    <div className='input-group date' id='datetimepicker1'>
                        <input type='text' className="form-control" />
                        <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
                <button type="cancel" className="btn btn-danger">Cancel</button>
            </form>
           </div>
        )
    }
}