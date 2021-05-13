import React from 'react'

export default function LoginForm() {
    return (
        <form className="pt-3">
            <div className="form-group">
                <label htmlFor="exampleInputEmail">Username</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-user text-primary" />
                        </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" id="exampleInputEmail" placeholder="Username" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-lock text-primary" />
                        </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                </div>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Keep me signed in
                    </label>
                </div>
                <a href="#" className="auth-link text-black">Forgot password?</a>
            </div>
            <div className="my-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">LOGIN</a>
            </div>
        </form>
    )
}
