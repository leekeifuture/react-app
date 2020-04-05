import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfoComponent = () => {
    return (
        <div>
            <div>
                <img src="https://i.imgur.com/3EWqPHM.png" alt="Beach" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfoComponent
