import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialized: false
}

export type StateAuthType = {
    initialized: boolean
}

type AuthUserType = {
    type: typeof INITIALIZED_SUCCESS
}

const appReducer = (state: StateAuthType = initialState, action: AuthUserType): StateAuthType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = (): AuthUserType => ({type: INITIALIZED_SUCCESS});

// thunk Type
type AppThunkType = ThunkAction<void, AppStateType, unknown, AuthUserType>

// thunk
export const initializeApp = (): AppThunkType => async (dispatch: any) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}

export default appReducer;