import React from 'react'
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';


function LoginForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props;

    console.log('component', props)
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

            <div class="mb-2 d-flex">
                <button type="button" class="btn btn-facebook auth-form-btn flex-grow mr-1 font-weight-normal">
                    <i class="ti-facebook mr-2"></i>Connect using Facebook
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

    validationSchema: Yup.object().shape({

    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        console.log('submit', values);
        // props.dispatch({
        //     type: CREATE_PROJECT_SAGA,
        //     newProject: values
        // })
    },
    displayName: 'loginForm',
})(LoginForm);


export default connect()(loginForm);
