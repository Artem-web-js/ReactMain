import {userAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type FollowActionType = {
    type: typeof FOLLOW
    userID: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userID: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersItemsType>
}
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export type TogglePreloaderActionType = {
    type: typeof TOGGLE_PRELOADER
    isFetching: boolean
}
export type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export type UsersActionTypes = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | TogglePreloaderActionType
    | ToggleIsFollowingProgressActionType

export type UsersItemsType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}
export type UsersReducerState = {
    users: Array<UsersItemsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    followingInProgress: Array<number>
}
const initialState: UsersReducerState = {
    users: [] as Array<UsersItemsType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action: UsersActionTypes): UsersReducerState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_PRELOADER: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userID: number): FollowActionType => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID: number): UnfollowActionType => ({type: UNFOLLOW, userID});
export const setUsers = (users: Array<UsersItemsType>): SetUsersActionType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_PRELOADER, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

//thunks Type
type UsersThunkType = ThunkAction<void, AppStateType, unknown, UsersActionTypes>;

//thunks

export const requestUsers = (page: number, pageSize: number): UsersThunkType => {
    return async (dispatch: any) => {
        dispatch(setCurrentPage(page))
        dispatch(toggleIsFetching(true))
        const data = await userAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    };
};

export const follow = (userId: number): UsersThunkType => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await userAPI.followUser(userId)
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    };
};

export const unfollow = (userId: number): UsersThunkType => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await userAPI.unfollowUser(userId)
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    };
};

export default usersReducer;