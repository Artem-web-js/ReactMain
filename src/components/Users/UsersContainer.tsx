import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC, UsersItemsType} from "../REDUX/users-reducer";
import {AppStateType} from "../REDUX/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: any): MapDispatchType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UsersItemsType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

type MapDispatchType = {
    follow:  (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersItemsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);