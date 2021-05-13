import { Route } from "react-router";

export default function UserTemplate(props) {

    const { Component, ...restParam } = props;

    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                        <div className="row flex-grow">
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <Component {...propsRoute} />
                            </div>
                            <div className="col-lg-6 login-half-bg d-flex flex-row">
                                <p className="text-white font-weight-medium text-center flex-grow align-self-end">Copyright © 2020  All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }} />
}
