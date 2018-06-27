import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
import {get,post} from '../server/fetch.js'

class Insert extends React.Component{
    constructor(props){
        super(props);
        this.createHandler = this.createHandler.bind(this);
    }
    createHandler(){
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let params = {
            userName: username,
            password: password
        }
        console.log(params)
        post('/user/insert',params).then((res)=>{
            console.log(res);
            if(res.status){
                this.props.history.push('/');
            }
        }).catch((err)=>{
            console.log(err);
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
                <div onClick={this.createHandler} className="createBtn">create</div>
                <Link to="/">
                    <p>back to list</p>
                </Link>
            </div>
        )
    }
}

export default Insert;