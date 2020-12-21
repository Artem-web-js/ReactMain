const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

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
export type UsersActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType

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
}

let initialState: UsersReducerState = {
    users: [] as Array<UsersItemsType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action: UsersActionTypes): UsersReducerState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
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
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID});
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: Array<UsersItemsType>): SetUsersActionType => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;