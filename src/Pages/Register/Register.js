import React from 'react'
import { NavLink } from 'react-router-dom'
import RegisterForm from '../../Components/Form/UserForm/RegisterForm'

export default function Register() {
    return (
        <div className="auth-form-transparent text-left py-3">
            <div className="brand-logo">
                <img src={require('../../assets/images/logo.svg').default} alt="logo" />
            </div>
            <h4 className="font-weight-normal">New here?</h4>
            <h6 className="font-weight-normal">Signing up is easy. It only takes a few steps</h6>

            <RegisterForm />

            <div className="text-center mt-4 font-weight-light">
                Already have an account? <NavLink to="/login" className="text-primary"> Login</NavLink> 
            </div>
        </div>

    )
}
