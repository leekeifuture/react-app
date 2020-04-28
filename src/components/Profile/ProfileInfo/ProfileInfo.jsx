import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfoComponent = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (<>
        <div>
            <img src="https://i.imgur.com/3EWqPHM.png" alt="Beach" />
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt="User" />
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    </>)
}

export default ProfileInfoComponent
