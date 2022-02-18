import { render } from '@testing-library/react';
// import './Dashboard.component.css';
import style from "./DashBoard.style.module.scss"
import React, { Component } from 'react'


export default class DashBoardComponent extends Component {


    renderCard() {
        return (
            <>
                <div className={style.box}>
                    <div className={style.main_box}>
                        <div className={style.main_top}>
                            <div className={style.top_box}>
                                <span className={style.box_img}>img</span>
                                <span className={style.money}>Today's Money</span>
                            </div>
                            <div className={style.amount}>
                                <span >$53K</span>
                            </div>
                        </div>

                        <div className={style.bottom_box}>
                            <span className={style.percentage}>+55%</span>
                            <span className={style.last_text}> than last week</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    renderSideBar() {
        const { HandelCancel, cancel } = this.props;
        return (

            <div className={cancel ? (style.maincontainerC) : (style.maincontainer)}>
                <div className={style.material}>
                    <span>Material Dashboard 2</span>
                    <img className={style.cancel} src="./img/icons8-cancel.svg" alt="cancel icon" onClick={HandelCancel}></img>
                </div>
                <hr />
                <div className={style.main_side_nav_main}>
                    <div className={style.main_side_nav}>
                        <ul>
                            <li>Dashboard</li>
                            <li>Tables</li>
                            <li>Virtual Reality</li>
                            <li>RTL</li>
                            <li>Notifications</li>

                            <p> ACCOUNT PAGES </p>

                            <li>Dashboard</li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                    <div className={style.button_area}>
                        <button className={style.upgrade}>
                            UPGRADE TO PREMIUM
                        </button>
                    </div>
                </div>
            </div>

        )
    }
    renderHeader() {
        const { HandelCancel, cancel } = this.props;
        return (
            <>
                <nav>
                    <div className={style.leftContains}>
                        <div className={style.inner_container}>
                            <span>Pages  /</span>
                            <span>Dashboard</span>
                        </div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className={style.rightContainer}>
                        <input type="text" placeholder='Type here...' />
                        <div className={style.icon_main}>
                            <ul>
                                <li className={style.sign_in}>

                                    <img src="./img/iconmonstr-user-5.svg" />
                                    <span> <a>Sign In</a>

                                    </span>
                                </li>
                                <li className={style.menu_icon}> <img src="./img/iconmonstr-menu-thin.svg" onClick={HandelCancel} /></li>
                                <li> <img src="./img/iconmonstr-gear-1.svg" /></li>
                                <li> <img src="./img/iconmonstr-bell-1.svg" /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

    render() {
        const { HandelCancel, cancel } = this.props;
        return (
            <div className={style.main_container}>

                <div className={style.main}>
                    {this.renderSideBar()}
                </div>
                <div className={style.cards}>
                    <div>{this.renderHeader()}</div>
                    <div className={style.CardHolder}>
                        {this.renderCard()}
                        {this.renderCard()}
                    </div>
                </div>

            </div>
        )
    }
}