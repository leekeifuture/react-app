import React from 'react'
import {connect} from 'react-redux'
import {
    addToFollowingUsers,
    followUser,
    getUsers,
    unfollowUser
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return (<>
            {this.props.isFetching
                ? <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingUsers={this.props.followingUsers}
                   addToFollowingUsers={this.props.addToFollowingUsers}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
            />
        </>)
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingUsers: state.usersPage.followingUsers
})

let mapDispatchToProps = {
    addToFollowingUsers,
    getUsers,
    followUser,
    unfollowUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
