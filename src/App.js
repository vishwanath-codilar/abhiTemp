import React, { Component } from 'react';
import DashBoardContainer from './DashBoard/DashBoard.container'

import style from "./App.style.module.scss"

export default class App extends Component {
  
  render() {
    return (
      <>
      <div className={style.appStyle}>
       
        <DashBoardContainer className={style.DashB}/>
       
      </div>
      </>
    )
  }
}
