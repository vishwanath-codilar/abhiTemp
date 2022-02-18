import React, { Component } from 'react'
import DashBoardComponent from './DashBoard.component'

export default class DashBoardContainer extends Component {
    state={
        cancel: false,
        mobileView:false
    }
    HandelCancel (e){
        this.setState({
            cancel: !this.state.cancel,
            mobileView:!this.state.cancel
        })
    }
   containerFunctions={
       HandelCancel: this.HandelCancel.bind(this)
   }
  render() {
      console.log(this.state.cancel);
    return (
      <DashBoardComponent 
      {...this.state}
      {...this.containerFunctions}
      />
    )
  }
}
