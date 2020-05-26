import {reduxForm} from 'redux-form'
import LoginForm from './LoginForm'

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

export default LoginReduxForm
