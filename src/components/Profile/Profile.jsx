import React from 'react'
import PostsComponent from './Posts/Posts'
import ProfileInfoComponent from './ProfileInfo/ProfileInfo'

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfoComponent />
            <PostsComponent
                postsData={props.profileData.postsData}
                newPostData={props.profileData.newPostData}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default ProfileComponent
