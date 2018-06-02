import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './containers/Home/index'
import Player from './containers/Player/index'
import Profile from './containers/Profile/index'
import App from './containers/app'
import './common/index.less'

window._store = store

render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/player"} component={Player} />
                <Route path={"/profile"} component={Profile} />
            </Switch>
        </App>
    </Router>
</Provider>, document.getElementById('app'))