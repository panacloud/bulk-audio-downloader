import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router'

import { App,Login, Signup, Dashboard } from './containers'
import {UserList, UserDetail} from './components'

export default (
    <Router history={browserHistory}>
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />            
            <Route path="dashboard" component={Dashboard} >
                <IndexRoute component={UserList} />
                <Route path="userlist" component={UserList} />
                <Route path="userlist/:id" component={UserDetail} />
            </Route>
            
        </Route>
    </Router>
)