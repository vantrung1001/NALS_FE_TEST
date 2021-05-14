import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftBar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                        <i className="ti-shield menu-icon" />
                        <span className="menu-title">Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#" aria-expanded="false" aria-controls="ui-basic">
                        <i className="ti-palette menu-icon" />
                        <span className="menu-title">UI Elements</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="#">Buttons</a></li>
                            <li className="nav-item"> <a className="nav-link" href="#">Typography</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="ti-layout-list-post menu-icon" />
                        <span className="menu-title">Form elements</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="ti-pie-chart menu-icon" />
                        <span className="menu-title">Charts</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="ti-view-list-alt menu-icon" />
                        <span className="menu-title">Tables</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="ti-star menu-icon" />
                        <span className="menu-title">Icons</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#" aria-expanded="false" aria-controls="auth">
                        <i className="ti-user menu-icon" />
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="#"> Login </a></li>
                            <li className="nav-item"> <a className="nav-link" href="#"> Login 2 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="#"> Register </a></li>
                            <li className="nav-item"> <a className="nav-link" href="#"> Register 2 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="#"> Lockscreen </a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="ti-write menu-icon" />
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
