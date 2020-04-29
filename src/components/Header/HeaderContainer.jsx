import * as axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        let baseUrl = 'https://social-network.samuraijs.com/api/1.0'
        axios.get(baseUrl + '/auth/me', {
            withCredentials: true
        })
            .then(
                (response) => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        this.props.setAuthUserData(id, login, email)
                    }
                }, (error) => {
                    console.error(error)
                }
            )
    }

    render() {
        return (
            <Header {...this.props}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

let mapDispatchToProps = {
    setAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
