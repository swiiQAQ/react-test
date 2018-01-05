import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
import Login from './login'
import Register from './register'
import Home from './Home'
import {get,post} from '../server/fetch.js'

class Test extends React.Component {
    constructor(props){
        super(props);
        this.getTable = this.getTable.bind(this);
    }
    getTable(){
        var a  = get('/user/getUser');
        debugger;
    }
    render() {
        return (
            <div className="indexPage">
                <p className="indexTitle">Index</p>
                <p onClick={this.getTable}>Create New</p>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Test