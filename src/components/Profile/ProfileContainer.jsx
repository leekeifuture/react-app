import * as axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let baseUrl = 'https://social-network.samuraijs.com/api/1.0'
        axios.get(baseUrl + '/profile/2')
            .then((response) => {
                    this.props.setUserProfile(response.data)
                }, (error) => {
                    console.error(error)
                }
            )
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps = {
    setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
