import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {socialNetworkApi} from '../../api/socialNetworkApi'
import {setUserProfile} from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : 2
        socialNetworkApi.getProfileData(userId)
            .then(data => {
                    this.props.setUserProfile(data)
                }, error => {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))
