import React from "react";
import s from "./Users.module.css";
import {UsersItemsType, UsersReducerState} from "../REDUX/users-reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/userPhoto.png"
import axios from "axios";


type UsersPresentationComponentType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
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
                             onClick={(e) => {
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
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "9e4686de-4379-4e75-89bc-e99abdd3cdc3"
                                    }
                                })
                                    .then((response: any) => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}

                            >Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9e4686de-4379-4e75-89bc-e99abdd3cdc3"
                                        }
                                    })
                                    .then((response: any) => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });

                                props.follow(u.id)
                            }}>Follow</button>}
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