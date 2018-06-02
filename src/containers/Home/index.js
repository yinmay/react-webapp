import React, { Component } from 'react';
import HomeHeader from './../../components/HomeHeader/index'
import {connect} from 'react-redux'
import * as actions from './../../redux/actions/home'

class Home extends Component {
    chooseLesson=(type)=>{
        this.props.setCurrentLesson(type)
    }
  render() {
    return (
      <div>
        <HomeHeader chooseLesson={this.chooseLesson}/>
      </div>
    )
  }
};
export default connect(state=>({...state}),actions)(Home)