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
import Find from './Find'
import Insert from './Insert'
import Update from './Update'
import Delete from './Delete'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
class RouteBox extends React.Component {
    render() {
        return (
            <Router>
                <div className="indexPage">
                    <p className="indexTitle">Index</p>
                    <Route exact={true} history={history} path="/" component={Find} />
                    <Route path="/insert" component={Insert} />
                    <Route path="/update" history={history} component={Update}/>
                    <Route path="/delete" component={Delete} />
                </div>
            </Router>
        )
    }
}
export default RouteBox