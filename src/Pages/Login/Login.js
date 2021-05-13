import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../../Components/Form/UserForm/LoginForm'

export default function Login() {
    return (
        <div className="auth-form-transparent text-left py-3">
            <div className="brand-logo">
                <img src={require('../../assets/images/logo.svg').default} alt="logo" />
            </div>
            <h4 className="font-weight-normal">Hello! let's get started</h4>
            <h4 className="font-weight-normal">Sign in to continue.</h4>
            
            <LoginForm />

            <div className="text-center mt-4 font-weight-light">
                Don't have an account? <NavLink className="text-primary" to="/register"> Create </NavLink>
            </div>
        </div>

    )
}
