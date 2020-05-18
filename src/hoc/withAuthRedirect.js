import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export const withAuthRedirect = (Component) => {
    const mapStateToPropsForRedirect = (state) => ({
        isAuth: state.authPage.isAuth
    })

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
