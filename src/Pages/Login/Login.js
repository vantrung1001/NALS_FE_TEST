import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../../Components/Form/UserForm/LoginForm'

export default function Login() {
    return (
        <div className="auth-form-transparent text-left p-3">
            <div className="brand-logo">
                <img src={require('../../assets/images/logo.svg').default} alt="logo" />
            </div>
            <h4>Welcome back!</h4>
            <h6 className="font-weight-light">Happy to see you again!</h6>
            
            <LoginForm />

            <div className="text-center mt-4 font-weight-light">
                Don't have an account? <NavLink className="text-primary" to="/register"> Create </NavLink>
            </div>
        </div>

    )
}
