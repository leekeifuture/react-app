import * as axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from '../../redux/users-reducer'
import Users from './Users'

class UsersContainer extends React.Component {
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
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users} />
    }
}

let mapStateToProps = (state) => {
    let usersPage = state.usersPage

    return {
        users: usersPage.users,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
