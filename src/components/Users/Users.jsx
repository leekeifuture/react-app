import React from 'react'
import s from './Users.module.css'

let UsersComponent = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Vasya',
                status: 'Looking for new job',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                location: {
                    country: 'USA',
                    city: 'Mountain View'
                },
                followed: false
            },
            {
                id: 2,
                fullName: 'Kolya',
                status: 'Chilling',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                },
                followed: true
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img className={s.userAvatar}
                                         src={user.avatar}
                                         alt="Avatar" />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.fullName}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{user.location.country}</div>
                                    <div>{user.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersComponent
