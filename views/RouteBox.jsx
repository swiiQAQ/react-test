import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
import Find from './Find'
import Insert from './Insert'
import Update from './Update'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
class RouteBox extends React.Component {
    render() {
        return (
            <Router>
                <div className="indexPage">
                    <p className="indexTitle">Index</p>
                    <Route exact={true} history={history} path="/" component={Find} />
                    <Route path="/insert" history={history} component={Insert} />
                    <Route path="/update" history={history} component={Update}/>
                </div>
            </Router>
        )
    }
}
export default RouteBox