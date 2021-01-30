import React from "react";
import s from "./Users.module.css";
import {UsersItemsType, UsersReducerState} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/userPhotoANotFound.png";


type UsersPresentationComponentType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    isAuth: boolean
}

let Users = (props: UsersReducerState & UsersPresentationComponentType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p} </span>
            })}
        </div>
        {
            props.users.map((u: UsersItemsType) => <div key={u.id}>
                <span>
                    <div className={s.usersPhoto}>
                        <NavLink to={"/profile/" + u.id}>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt="userPhoto"/>
                        </NavLink>
                    </div>
                    <div>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;