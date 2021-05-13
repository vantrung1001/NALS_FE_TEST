import React from 'react'
import { NavLink } from 'react-router-dom'
import RegisterForm from '../../Components/Form/UserForm/RegisterForm'

export default function Register() {
    return (
        <div className="auth-form-transparent text-left p-3">
            <div className="brand-logo">
                <img src={require('../../assets/images/logo.svg').default} alt="logo" />
            </div>
            <h4>New here?</h4>
            <h6 className="font-weight-light">Join us today! It takes only few steps</h6>

            <RegisterForm />

            <div className="mt-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
            </div>
            <div className="text-center mt-4 font-weight-light">
                Already have an account? <NavLink to="/login" className="text-primary"> Login</NavLink> 
            </div>
        </div>

    )
}
