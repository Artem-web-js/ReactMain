import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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
    payload: StateAuthType
}

const authReducer = (state: StateAuthType = initialState, action: AuthUserType): StateAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): AuthUserType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

// thunk Type
type AuthThunkType = ThunkAction<void, AppStateType, unknown, AuthUserType>

// thunks
export const getAuthUserData = (): AuthThunkType => {
    return (dispatch) => {
        return authAPI.me().then((data) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AuthThunkType => {
    return (dispatch: any) => {
        return authAPI.login(email, password, rememberMe).then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login',{_error: message}))
            }
        });
    }
}

export const logout = (): AuthThunkType => {
    return (dispatch) => {
        authAPI.logout().then((data: any) => {
            debugger
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}

export default authReducer;