import React from "react";
import {UsersItemsType, UsersReducerState} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


type UsersPresentationComponentType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

let Users = React.memo((props: UsersReducerState & UsersPresentationComponentType) => {

    return <div>
        <Paginator onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage}/>
        {props.users.map((u: UsersItemsType) => {
            return <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}/>
        })
        }
    </div>
})

export default Users;