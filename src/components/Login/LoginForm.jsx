import React from 'react'
import {Field} from 'redux-form'

const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       component="input"
                       name="login" />
            </div>
            <div>
                <Field placeholder="Password"
                       component="input"
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
        </form>)
}

export default LoginForm
