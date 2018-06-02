import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/index'
import Player from './containers/Player/index'
import Profile from './containers/Profile/index'
import App from './containers/app'
import './common/index.less'

render(<Router>
    <App>
    <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/player"} component={Player}/>
        <Route path={"/profile"} component={Profile}/>
    </Switch>
    </App>
</Router>,document.getElementById('app'))