import React from 'react'
import {connect} from 'react-redux'
import {socialNetworkApi} from '../../api/socialNetworkApi'
import {setAuthUserData} from '../../redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        socialNetworkApi.authMe()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        this.props.setAuthUserData(id, login, email)
                    }
                }, error => {
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
