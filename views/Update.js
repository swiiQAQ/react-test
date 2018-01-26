import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
import { get, post } from '../server/fetch.js'

class Update extends React.Component{
    constructor(props){
        super(props);
        this.saveHandler = this.saveHandler.bind(this);
        this.data = this.props.location.state;
    }
    saveHandler(){
        post('/user/update',this.data).then((res)=>{
            if(res.status){
                this.props.history.push('/');
            }
        })
    }
    render(){
        return(
            <div className="insertPlate">
                <p>
                    <span>UserName</span>
                    <input ref="username" type="text" />
                </p>
                <p>
                    <span>Password</span>
                    <input ref="password" type="text" />
                </p>
                <div ref onClick={this.saveHandler} className="createBtn">save</div>
                <Link to="/">
                    <p>back to list</p>
                </Link>
            </div>
        )
    }
}

export default Update;