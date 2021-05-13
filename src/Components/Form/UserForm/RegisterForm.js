import React from 'react'

export default function RegisterForm() {
    return (
        <form className="pt-3">
            <div className="form-group">
                <label>Username</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-user text-primary" />
                        </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" placeholder="Username" />
                </div>
            </div>
            <div className="form-group">
                <label>Email</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-email text-primary" />
                        </span>
                    </div>
                    <input type="email" className="form-control form-control-lg border-left-0" placeholder="Email" />
                </div>
            </div>
            {/* <div className="form-group">
                <label>Country</label>
                <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                </select>
            </div> */}
            <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-lock text-primary" />
                        </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />
                </div>
            </div>
            <div className="mb-4">
                <div className="form-check">
                    <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        I agree to all Terms &amp; Conditions
                    </label>
                </div>
            </div>
        </form>


    )
}
