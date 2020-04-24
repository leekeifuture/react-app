import * as axios from 'axios'
import React from 'react'
import userPhoto from '../../assets/images/avatar.png'
import s from './Users.module.css'

let UsersComponent = (props) => {
    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                props.setUsers(response.data.items);
            }, (error) => {
            });
    }

    return (
        <div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto}
                                         src={user.photos.small != null
                                             ? user.photos.small
                                             : userPhoto}
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
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
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
