import { Route } from "react-router";

export default function UserTemplate(props) {

    const { Component, ...restParam } = props;

    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                        <div className="row flex-grow align-items-center px-5">
                            <div className="col-xl-4 col-md-6 py-4 mx-auto bg-white" style={{ height: 'auto' }}>
                                <Component {...propsRoute} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }} />
}
