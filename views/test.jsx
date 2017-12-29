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

class Test extends React.Component {
    render() {
        return (
            <div className="indexPage">
                <p className="indexTitle">Index</p>
                <p>Create New</p>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Test