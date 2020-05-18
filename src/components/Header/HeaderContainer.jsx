import React from 'react'
import {connect} from 'react-redux'
import {authMe} from '../../redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
})

const mapDispatchToProps = {
    authMe
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
