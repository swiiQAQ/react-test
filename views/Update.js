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
        let {id, username, password} = this.props.location.state;
        
        this.state={
            id: id,
            username: username,
            password: password
        }
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }
    changeUserName(e){
        var username = e.target.value;
        this.setState({ username : username })
    }
    changePassword(e){
        var password = e.target.value;
        this.setState({ password: password});
    }
    saveHandler(){
        let updateData ={
            id: this.state.id,
            username: this.state.username,
            password: this.state.password
        }
        post('/user/update',updateData).then((res)=>{
            console.log(res);
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
                    <input value={this.state.username} onChange={this.changeUserName}  ref="username" type="text" />
                </p>
                <p>
                    <span>Password</span>
                    <input value={this.state.password} onChange={this.changePassword} ref="password" type="text" />
                </p>
                <div onClick={this.saveHandler} className="createBtn">save</div>
                <Link to="/">
                    <p>back to list</p>
                </Link>
            </div>
        )
    }
}

export default Update;