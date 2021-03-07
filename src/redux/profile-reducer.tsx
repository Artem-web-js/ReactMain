import {PostsType} from "../components/Profile/Profile";
import {DialogsItemProps} from "../components/Dialogs/DialogItem/DialogItem";
import {userAPI, profileAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

export type AddPostActionType = {
    type: typeof ADD_POST
    newPost: string
}
export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: any
}
export type SetUserStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

type ProfilePageType = {
    posts: Array<PostsType>
    dialogsData: Array<DialogsItemProps>
    profile: null
    status: string
    newPost: string
}

type ActionsType = AddPostActionType
    | SetUserProfileActionType
    | SetUserStatusActionType

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It is my first post!", likesCount: 20}
    ],
    dialogsData: [
        {
            id: 1,
            name: "Artem",
            src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        {
            id: 2,
            name: "Maks",
            src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
        },
        {
            id: 3,
            name: "Sergey",
            src: "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"
        },
        {
            id: 4,
            name: "Alina",
            src: "https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
        },
        {
            id: 5,
            name: "Sabina",
            src: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
        },
        {
            id: 6,
            name: "Veronika",
            src: "https://i.pinimg.com/originals/6d/c8/7a/6dc87ad6f004abcdfee40c25299b9502.jpg"
        }
    ],
    profile: null,
    status: '',
    newPost: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost: string): AddPostActionType => ({type: ADD_POST, newPost});
export const setUserProfile = (profile: any): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetUserStatusActionType => {
    return { type: SET_STATUS, status }
};

//thunks Type
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

//thunks

export const getUserProfile = (userId: string): ThunkType => (dispatch) => {
    userAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data))
    });
};

export const getStatus = (userId: string): ThunkType => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data))
    });
};

export const updateStatus = (status: string): ThunkType => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    });
};

export default profileReducer;