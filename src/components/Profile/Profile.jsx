import React from 'react'
import MyPostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (<>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus} />
        <MyPostsContainer />
    </>)
}

export default Profile
