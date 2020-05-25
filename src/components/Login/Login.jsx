import React from 'react'
import LoginReduxForm from './LoginReduxForm'

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (<>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>)
}

export default Login
