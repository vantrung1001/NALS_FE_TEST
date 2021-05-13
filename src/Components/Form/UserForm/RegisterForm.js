import React from 'react'

export default function RegisterForm() {
    return (
        <form className="pt-3">
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="pl-3 form-control form-control-lg" placeholder="Username" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="email" className="pl-3 form-control form-control-lg" placeholder="Email" />
                </div>
            </div>
            <div className="form-group">
                <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                </select>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="password" className="pl-3 form-control form-control-lg" id="exampleInputPassword" placeholder="Password" />
                </div>
            </div>
            <div className="mb-4">
                <div className="form-check">
                    <label className="form--check-label mb-0">
                        <input type="checkbox" className="form--check-input" />
                        <span className="form--check-mark"></span>
                        I agree to all Terms &amp; Conditions
                    </label>
                </div>
            </div>
            <div className="mt-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
            </div>
        </form>


    )
}
