import { useSelector } from "react-redux";
import { Route } from "react-router";
import LeftBar from "../Components/Layout/LeftBar";
import TopBar from "../Components/Layout/TopBar";

export default function DashboardTemplate(props) {

    const { isCloseLeftNav } = useSelector(state => state.UiReducer);

    const { Component, ...restParam } = props;

    return <Route {...restParam} render={(propsRoute) => {
        return <div className={isCloseLeftNav ? 'sidebar-icon-only' : ''}>
            <div className="container-scroller">
                <TopBar />

                <div className="container-fluid page-body-wrapper">

                    <LeftBar />

                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Component {...propsRoute} />
                        </div>
                        <footer className="footer">
                            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard templates</a> from Bootstrapdash.com</span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        </div>
    }} />
}
