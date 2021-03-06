import React, { Component } from 'react';
import './index.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class HomeHeader extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
        }
        this.changeShow = this.changeShow.bind(this)
    }
    changeShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    choose=(e)=>{
        this.props.chooseLesson(e.target.getAttribute('type'))
        //把值传给父级
        this.changeShow();//点击之后隐藏
    }
    render() {
        return (
            <div className="home-header">
                <div className="header-menu">
                    <div onClick={this.changeShow}>
                        {this.state.isShow ? <div className="delete"></div>
                            : <div className="list"></div>}
                    </div>

                </div>
                <TransitionGroup>
                    {this.state.isShow ?
                        <CSSTransition timeout={1000} classNames="fadeIn">
                            <ul className="header-list" onClick={this.choose}>
                                <li type="1">node</li>
                                <li type="2">html</li>
                                <li type="3">css</li>
                                <li type="4">js</li>
                            </ul>
                        </CSSTransition>
                        : null}
                </TransitionGroup>
            </div>
        )
    }
};
