import {PostsType} from "../Profile/Profile";
import {ActionTypes, profilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT" ;

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type ChangeNewTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

const profileReducer = (state: profilePageType, action: ActionTypes) => {
    switch(action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;