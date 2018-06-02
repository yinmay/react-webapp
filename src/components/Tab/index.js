import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'

export default class Tab extends Component {
  render() {
    return (
      <nav className="footer">
        <NavLink exact to={'/'} activeClassName="selected">首页</NavLink>
        <NavLink to={'/player'} activeClassName="selected">球员</NavLink>
        <NavLink to={'/profile'} activeClassName="selected">个人中心</NavLink>
      </nav>
    )
  }
};
