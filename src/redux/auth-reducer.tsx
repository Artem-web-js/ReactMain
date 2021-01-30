import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type StateAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

type AuthUserType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number
        email: string
        login: string
    }
}

const authReducer = (state: StateAuthType = initialState, action: AuthUserType): StateAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): AuthUserType => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
});

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then((data: any) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
    }
}

export default authReducer;