import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TOGGLE_LEFT_NAV } from '../../redux/constants/UiConstants';

export default function TopBar() {

    const dispatch = useDispatch();

    const toggleSideBar = () => {
        dispatch({ type: TOGGLE_LEFT_NAV });
    }

    return (
        <div>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <NavLink to="/" className="navbar-brand brand-logo mr-5">
                        <img src={require('../../assets/images/logo.svg').default} className="mr-2" alt="logo" />
                    </NavLink>
                    <NavLink to="/" className="navbar-brand brand-logo-mini">
                        <img src={require('../../assets/images/logo-mini.svg').default} alt="logo" />
                    </NavLink>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={toggleSideBar}>
                        <span className="ti-view-list" />
                    </button>

                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-search d-none d-lg-block">
                            <div className="input-group">
                                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                    <span className="input-group-text" id="search">
                                        <i className="ti-search" />
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown mr-1">
                            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                                <i className="ti-email mx-0" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <img src={require('../../assets/images/faces/face4.jpg').default} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="item-content flex-grow">
                                        <h6 className="ellipsis font-weight-normal">David Grey</h6>
                                        <p className="font-weight-light small-text text-muted mb-0"> The meeting is cancelled</p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <img src={require('../../assets/images/faces/face2.jpg').default} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="item-content flex-grow">
                                        <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                                        <p className="font-weight-light small-text text-muted mb-0"> New product launch</p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <img src={require('../../assets/images/faces/face3.jpg').default} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="item-content flex-grow">
                                        <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                                        <p className="font-weight-light small-text text-muted mb-0"> Upcoming board meeting </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="ti-bell mx-0" />
                                <span className="count" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <div className="item-icon bg-success">
                                            <i className="ti-info-alt mx-0" />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="font-weight-normal">Application Error</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted"> Just now </p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <div className="item-icon bg-warning">
                                            <i className="ti-settings mx-0" />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="font-weight-normal">Settings</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted"> Private message </p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <div className="item-icon bg-info">
                                            <i className="ti-user mx-0" />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="font-weight-normal">New user registration</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted"> 2 days ago</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                <img src={require('../../assets/images/faces/face28.jpg').default} alt="profile" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item">
                                    <i className="ti-settings text-primary" /> Settings </a>
                                <a className="dropdown-item">
                                    <i className="ti-power-off text-primary" /> Logout </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="ti-view-list" />
                    </button>
                </div>
            </nav>
        </div>
    )
}
