import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
import Login from './login'
import Register from './register'
import Home from './Home'

class Route extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul></ul>
                    <div>
                        <Route Component={}></Route>
                        <Route Component={}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}