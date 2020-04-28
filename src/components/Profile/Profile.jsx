import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoComponent from './ProfileInfo/ProfileInfo'

const ProfileComponent = (props) => {
    return (<>
        <ProfileInfoComponent profile={props.profile} />
        <MyPostsContainer />
    </>)
}

export default ProfileComponent
