import * as axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setUserProfile} from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let baseUrl = 'https://social-network.samuraijs.com/api/1.0'
        let userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : 2
        axios.get(baseUrl + `/profile/${userId}`)
            .then(response => {
                    this.props.setUserProfile(response.data)
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
