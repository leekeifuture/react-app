import React from 'react'
import PostsComponent from './MyPosts/MyPosts'
import ProfileInfoComponent from './ProfileInfo/ProfileInfo'

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfoComponent />
            <PostsComponent
                postsData={props.profilePage.postsData}
                newPostData={props.profilePage.newPostData}
                dispatch={props.dispatch} />
        </div>
    )
}

export default ProfileComponent
