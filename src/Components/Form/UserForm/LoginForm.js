import React from 'react'
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { LOGIN_API } from '../../../redux/constants/UserConstant';
import {useSelector} from 'react-redux'


function LoginForm(props) {
    const {
        errors,
        handleChange,
        handleSubmit,
    } = props;

    return (
        <form className="pt-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-user text-primary" />
                        </span>
                    </div>
                    <input onChange={handleChange} name="username" type="text" className="form-control form-control-lg border-left-0 pl-2" placeholder="Username" />
                    
                </div>
                <p className="text-danger" style={{height: 16}}>{errors.username}</p>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="ti-lock text-primary" />
                        </span>
                    </div>
                    <input onChange={handleChange} name="password" type="password" className="form-control form-control-lg border-left-0 pl-2" placeholder="Password" />
                </div>
                <p className="text-danger" style={{height: 16}}>{errors.password}</p>
            </div>

            <div className="my-1">
                <button className="btn btn-block btn-primary btn-lg font-weight-normal auth-form-btn">SIGN IN</button>
            </div>

            <div className="my-3 d-flex justify-content-between align-items-center">
                <div className="form-check my-0">
                    <label className="form--check-label mb-0">
                        <input type="checkbox" className="form--check-input" />
                        <span className="form--check-mark"></span>
                        Keep me signed in
                    </label>
                </div>
                <a href="#" className="auth-link text-black">Forgot password?</a>
            </div>

            <div className="mb-2 d-flex">
                <button type="button" className="btn btn-facebook auth-form-btn flex-grow mr-1 font-weight-normal">
                    <i className="ti-facebook mr-2" />Connect using Facebook
                </button>
            </div>
        </form>
    )
}


const loginForm = withFormik({

    mapPropsToValues: (props) => {
        return {
            username: '',
            password: ''
        }
    },

    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch({
            type: LOGIN_API,
            model: values
        })
    },
    displayName: 'loginForm',
})(LoginForm);


export default connect()(loginForm);
