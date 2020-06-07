import React from 'react'
import {Field} from 'redux-form'
import {required} from '../../../utils/validators/validators'
import {Input} from '../../common/FormsControls/FormsControls'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       component={Input}
                       validate={[required]}
                       name="login" />
            </div>
            <div>
                <Field placeholder="Password"
                       component={Input}
                       validate={[required]}
                       name="password" />
            </div>
            <div>
                <Field type="checkbox"
                       component="input"
                       name="rememberMe" />
                <span>Remember Me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm
