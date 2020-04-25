import * as axios from 'axios'
import React from 'react'
import defaultPhoto from '../../assets/images/avatar.png'
import s from './Users.module.css'

class Users extends React.Component {
    componentDidMount() {
        let baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
        axios.get(baseUrl + 'users', {
            params: {
                page: this.props.currentPage,
                count: this.props.pageSize
            }
        }).then(
            (response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }, (error) => {
                console.error(error)
            }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        let baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
        axios.get(baseUrl + 'users', {
            params: {
                page: pageNumber,
                count: this.props.pageSize
            }
        }).then(
            (response) => {
                this.props.setUsers(response.data.items)
            }, (error) => {
                console.error(error)
            }
        )
    }

    render() {
        let currentPage = this.props.currentPage

        let totalUsersCount = this.props.totalUsersCount
        let pageSize = this.props.pageSize
        let pagesCount = Math.ceil(totalUsersCount / pageSize)
        let pagesNumbers = Array(pagesCount).fill()
            .map((_, number) => number + 1)

        let userPhoto = (user) => {
            return user.photos.small != null
                ? user.photos.small
                : defaultPhoto
        }

        return (
            <div>
                <div>
                    {pagesNumbers.map(pageNumber => {
                        return (
                            <input
                                className={currentPage === pageNumber && s.selectedPage}
                                type="button"
                                value={pageNumber}
                                onClick={(event) => {
                                    this.onPageChanged(pageNumber)
                                }} />
                        )
                    })}
                </div>

                {this.props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto}
                                         src={userPhoto(user)}
                                         alt="Avatar" />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users
